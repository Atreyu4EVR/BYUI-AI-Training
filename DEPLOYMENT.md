# Deploying to Azure

This document provides step-by-step instructions for building and deploying the BYU-Idaho AI Training application to Azure using Docker containers.

## Prerequisites

1. Azure account with active subscription
2. [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli) installed
3. [Docker](https://www.docker.com/get-started) installed
4. Git repository with your application code

## Method 1: Manual Deployment

### Step 1: Build Docker Image Locally

```bash
# Navigate to your project directory
cd Training-BYUI-Administrators

# Build the Docker image
docker build -t byui-ai-training:latest .

# Test the image locally
docker run -p 8080:80 byui-ai-training:latest
```

Visit `http://localhost:8080` in your browser to verify the application works correctly.

### Step 2: Create Azure Container Registry (ACR)

```bash
# Log in to Azure
az login

# Create a resource group if you don't have one
az group create --name byui-ai-training-rg --location westus2

# Create a container registry
az acr create --resource-group byui-ai-training-rg --name byuiaitraining --sku Basic

# Log in to the registry
az acr login --name byuiaitraining
```

### Step 3: Tag and Push the Image to ACR

```bash
# Tag the image for your registry
docker tag byui-ai-training:latest byuiaitraining.azurecr.io/byui-ai-training:latest

# Push the image to ACR
docker push byuiaitraining.azurecr.io/byui-ai-training:latest
```

### Step 4: Create Azure App Service

```bash
# Create App Service plan
az appservice plan create --name byui-ai-training-plan --resource-group byui-ai-training-rg --is-linux --sku B1

# Create Web App for Containers
az webapp create --resource-group byui-ai-training-rg --plan byui-ai-training-plan --name byui-ai-training --deployment-container-image-name byuiaitraining.azurecr.io/byui-ai-training:latest

# Configure the registry credentials for the web app
az webapp config container set --name byui-ai-training --resource-group byui-ai-training-rg --docker-custom-image-name byuiaitraining.azurecr.io/byui-ai-training:latest --docker-registry-server-url https://byuiaitraining.azurecr.io --docker-registry-server-user byuiaitraining --docker-registry-server-password $(az acr credential show --name byuiaitraining --query "passwords[0].value" --output tsv)
```

Your application should now be available at `https://byui-ai-training.azurewebsites.net`.

## Method 2: Automated Deployment with Azure DevOps

### Step 1: Set Up Azure DevOps

1. Create a new project in Azure DevOps.
2. Push your code to the Azure DevOps repository or connect to your GitHub repository.

### Step 2: Configure Azure Resources

```bash
# Create resources as in Method 1 (Steps 2 and 4)
# Make sure your App Service has continuous deployment enabled
az webapp deployment container config --enable-cd true --name byui-ai-training --resource-group byui-ai-training-rg
```

### Step 3: Set Up Azure Pipeline

1. In Azure DevOps, go to Pipelines and create a new pipeline.
2. Choose your repository.
3. When prompted for a template, select "Existing Azure Pipelines YAML file".
4. Select the `azure-pipelines.yml` file we've created.
5. Before running the pipeline, you'll need to:
   - Create a service connection to your Azure subscription
   - Create a service connection to your Azure Container Registry
   - Update the pipeline variables with your actual resource names

### Step 4: Run the Pipeline

Run the pipeline to build and deploy your application. The pipeline will:

1. Build the Docker image
2. Push it to Azure Container Registry
3. Deploy it to Azure App Service

## Additional Configuration

### Custom Domain

To add a custom domain to your App Service:

```bash
# Add a custom domain
az webapp config hostname add --webapp-name byui-ai-training --resource-group byui-ai-training-rg --hostname training.byui.edu
```

You'll need to configure DNS records for your domain to point to the Azure App Service.

### HTTPS

Enable HTTPS with a managed certificate:

```bash
# Add a binding for your custom domain
az webapp config ssl create --resource-group byui-ai-training-rg --name byui-ai-training --hostname training.byui.edu
```

## Monitoring and Troubleshooting

### View Logs

```bash
# View logs from the container
az webapp log tail --name byui-ai-training --resource-group byui-ai-training-rg
```

### Performance Monitoring

1. In the Azure portal, navigate to your App Service.
2. Select "Monitoring" to view metrics like CPU usage, memory, and request rates.
3. Set up alerts for critical metrics by navigating to "Alerts" in the Azure portal.

## Scaling

```bash
# Scale up (change to a more powerful plan)
az appservice plan update --name byui-ai-training-plan --resource-group byui-ai-training-rg --sku S1

# Scale out (add more instances)
az appservice plan update --name byui-ai-training-plan --resource-group byui-ai-training-rg --number-of-workers 3
```

## Cost Management

Monitor costs by:

1. Setting up a budget in the Azure portal.
2. Reviewing the Cost Management + Billing section regularly.
3. Considering scaling down during periods of low traffic.
