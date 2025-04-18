# Deploying to Azure

This document provides step-by-step instructions for building and deploying the BYU-Idaho AI Training application to Azure using Docker containers.

## Prerequisites

1. Azure account with active subscription
2. [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli) installed
3. [Docker](https://www.docker.com/get-started) installed
4. Git repository with your application code

## Important Architecture Considerations

When deploying from a Mac (especially with Apple Silicon M1/M2/M3 chips) to Azure, you must build for the correct architecture:

1. Always specify `--platform=linux/amd64` in your Dockerfile
2. Always use the `--platform linux/amd64` flag when building with Docker
3. This prevents "exec format error" issues in Azure App Service

## Current Deployment Process (Manual)

The following steps describe our current deployment process:

### Step 1: Build Docker Image Locally

```bash
# Navigate to your project directory
cd Training-BYUI-Administrators

# Build the Docker image (specifying platform for compatibility with Azure)
docker build -t byui-ai-training:latest --platform linux/amd64 .

# Test the image locally
docker run -p 8080:80 byui-ai-training:latest
```

Visit `http://localhost:8080` in your browser to verify the application works correctly.

### Step 2: Push to Azure Container Registry (ACR)

```bash
# Log in to Azure
az login

# Log in to the container registry
az acr login --name byuiaitraining

# Tag the image for your registry
docker tag byui-ai-training:latest byuiaitraining.azurecr.io/byui-ai-training:latest

# For version control, also tag with a specific version number
docker tag byui-ai-training:latest byuiaitraining.azurecr.io/byui-ai-training:v1

# Push the images to ACR
docker push byuiaitraining.azurecr.io/byui-ai-training:latest
docker push byuiaitraining.azurecr.io/byui-ai-training:v1
```

### Step 3: Update the Web App

```bash
# Update the web app to use the newly pushed image
az webapp config container set --name byui-ai-training --resource-group byui-ai-training-rg \
  --docker-custom-image-name byuiaitraining.azurecr.io/byui-ai-training:v1

# Restart the web app to apply changes
az webapp restart --name byui-ai-training --resource-group byui-ai-training-rg
```

The updated application should be available at `https://byui-ai-training.azurewebsites.net`.

## Updating the Application

When updating the application, follow these steps:

1. Make changes to your code and test locally
2. Rebuild the Docker image with a new version tag:
   ```bash
   docker build -t byui-ai-training:latest --platform linux/amd64 .
   docker tag byui-ai-training:latest byuiaitraining.azurecr.io/byui-ai-training:v2
   docker push byuiaitraining.azurecr.io/byui-ai-training:v2
   ```
3. Update the web app to use the new version:
   ```bash
   az webapp config container set --name byui-ai-training --resource-group byui-ai-training-rg --docker-custom-image-name byuiaitraining.azurecr.io/byui-ai-training:v2
   az webapp restart --name byui-ai-training --resource-group byui-ai-training-rg
   ```

## Reference: Initial Setup Steps

These steps were performed once to set up the infrastructure and should not need to be repeated:

```bash
# Create a resource group
az group create --name byui-ai-training-rg --location centralus

# Create a container registry
az acr create --resource-group byui-ai-training-rg --name byuiaitraining --sku Basic

# Enable admin user for the ACR
az acr update -n byuiaitraining --admin-enabled true

# Create App Service plan
az appservice plan create --name byui-ai-training-plan --resource-group byui-ai-training-rg --location centralus --is-linux --sku B1

# Create Web App for Containers
az webapp create --resource-group byui-ai-training-rg --plan byui-ai-training-plan --name byui-ai-training --deployment-container-image-name byuiaitraining.azurecr.io/byui-ai-training:v1

# Configure the registry credentials for the web app
az webapp config container set --name byui-ai-training --resource-group byui-ai-training-rg \
  --docker-custom-image-name byuiaitraining.azurecr.io/byui-ai-training:v1 \
  --docker-registry-server-url https://byuiaitraining.azurecr.io \
  --docker-registry-server-user byuiaitraining \
  --docker-registry-server-password $(az acr credential show --name byuiaitraining --query "passwords[0].value" --output tsv)

# Configure app settings
az webapp config container set --name byui-ai-training --resource-group byui-ai-training-rg --enable-app-service-storage false

# Configure continuous deployment webhook
az webapp deployment container config --name byui-ai-training --resource-group byui-ai-training-rg --enable-cd true

# Set the container start time limit
az webapp config appsettings set --name byui-ai-training --resource-group byui-ai-training-rg --settings WEBSITES_CONTAINER_START_TIME_LIMIT=600
```

## Troubleshooting

### Common Issues

1. **Exec Format Error**:

   - Symptom: `exec /docker-entrypoint.sh: exec format error` in logs
   - Solution: Rebuild image with `--platform linux/amd64` flag

2. **Container Fails to Start**:

   - Check logs: `az webapp log tail --name byui-ai-training --resource-group byui-ai-training-rg`
   - Enable diagnostics: `az webapp config appsettings set --name byui-ai-training --resource-group byui-ai-training-rg --settings WEBSITES_ENABLE_APP_SERVICE_STORAGE=true`

3. **App Not Accessible**:
   - Check app status: `az webapp show --name byui-ai-training --resource-group byui-ai-training-rg --query "{State:state}"`
   - Restart the app: `az webapp restart --name byui-ai-training --resource-group byui-ai-training-rg`

## Monitoring and Maintenance

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

1. Setting up a budget in the Azure portal
2. Reviewing the Cost Management + Billing section regularly
3. Considering scaling down during periods of low traffic

## Future Consideration: Automated Deployment

If you decide to implement automated deployments in the future, you could use GitHub Actions with the workflow defined in `.github/workflows/azure-deploy.yml`. This would require setting up GitHub repository secrets and configuring webhooks.
