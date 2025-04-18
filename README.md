# BYU-Idaho AI Training Application

This repository contains the BYU-Idaho Artificial Intelligence Training application, designed to help administrators learn about AI technologies and how to apply them in their work.

## Features

- Comprehensive AI learning content
- Interactive search functionality
- Responsive design for all devices
- Dark/light mode support
- Glossary of AI terms

## Technologies

- React
- TypeScript
- Tailwind CSS
- Vite
- Fuse.js for search

## Development

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/Training-BYUI-Administrators.git
cd Training-BYUI-Administrators

# Install dependencies
npm install

# Run development server
npm run dev
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Docker Deployment

This application can be containerized for easy deployment using Docker.

### Building the Docker Image

```bash
# Build the image
docker build -t byui-ai-training:latest .

# Run locally
docker run -p 8080:80 byui-ai-training:latest
```

Visit `http://localhost:8080` to see the application running.

## Azure Deployment

This repository includes configuration for deploying to Azure using:

1. Azure DevOps Pipelines (`azure-pipelines.yml`)
2. GitHub Actions (`.github/workflows/azure-deploy.yml`)

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

### Quick Azure CLI Deployment

```bash
# Login to Azure
az login

# Create a resource group
az group create --name byui-ai-training-rg --location westus2

# Create an App Service plan
az appservice plan create --name byui-ai-training-plan --resource-group byui-ai-training-rg --is-linux --sku B1

# Create a container registry
az acr create --resource-group byui-ai-training-rg --name byuiaitraining --sku Basic

# Build and push to ACR
az acr build --registry byuiaitraining --image byui-ai-training:latest .

# Create a web app using the container image
az webapp create --resource-group byui-ai-training-rg --plan byui-ai-training-plan --name byui-ai-training --deployment-container-image-name byuiaitraining.azurecr.io/byui-ai-training:latest
```

## License

[MIT License](LICENSE)

## Contact

For questions about this project, please contact the BYU-Idaho IT department.
