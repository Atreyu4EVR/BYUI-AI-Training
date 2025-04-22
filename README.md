# BYU-Idaho AI Training Application

This repository contains the BYU-Idaho Artificial Intelligence Training application, designed to help administrators learn about AI technologies and how to apply them in their work.

## Features

- Comprehensive AI learning content
- Interactive search functionality
- Responsive design for all devices
- Dark/light mode support
- Glossary of AI terms
- Single-page application (SPA) architecture

## Technologies

### Core

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router (v7)

### UI Components & Icons

- Headless UI (`@headlessui/react`)
- Heroicons (`@heroicons/react`)
- Lucide React

### State Management

- React Context API (for theme and search functionality)

### Search

- Fuse.js for fuzzy searching

### Build & Deployment

- Docker & Nginx
- Azure App Service
- Azure Container Registry

## Project Structure

```
src/
├── assets/        # Static assets and images
├── components/    # React components
├── context/       # Context providers (Theme, Search)
├── routes.tsx     # Centralized routing configuration
├── index.css      # Global styles and Tailwind imports
└── main.tsx       # Application entry point
```

### Key Components

- `Layout.tsx` - Main application layout
- `Navbar.tsx` - Navigation component
- `SearchBar.tsx` - Search functionality
- `ThemeToggle.tsx` - Light/dark theme switcher

### Context Providers

- `ThemeContext.tsx` - Manages light/dark theme preferences
- `SearchContext.tsx` - Manages search functionality

### Routing Architecture

The application uses React Router v7 for client-side routing in a single-page application (SPA) architecture:

- All routes are defined in `src/routes.tsx`
- `BrowserRouter` provides clean URLs without hash fragments
- Nginx is configured to redirect all requests to `index.html`
- A 404 page redirects to the main application with the requested path

#### SPA Routing Configuration

The application includes multiple layers of SPA routing support:

1. **Development**: Custom middleware in `spa-history-fallback.ts` handles client-side routing
2. **Production (Nginx)**: Configuration in `nginx.conf` redirects all routes to index.html
3. **Static Hosting**: Configuration files in the `public` directory for various platforms:
   - `_redirects` file for Netlify
   - `_headers` file with security headers

## Development

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Environment Variables

No environment variables are required for local development. For production deployment, see the Docker and Azure configuration sections.

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

### Available Scripts

```bash
# Start development server
npm run dev

# Type-check and build for production
npm run build

# Lint TypeScript/TSX files
npm run lint

# Preview production build locally
npm run preview
```

### Browser Compatibility

The application supports all modern browsers (Chrome, Firefox, Safari, Edge). Internet Explorer is not supported.

## Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Docker Deployment

This application can be containerized for easy deployment using Docker.

### Building the Docker Image

```bash
# Build the image (specifying platform for compatibility with Azure)
docker build -t byui-ai-training:latest --platform linux/amd64 .

# Run locally
docker run -p 8080:80 byui-ai-training:latest
```

Visit `http://localhost:8080` to see the application running.

### Deployment Architecture

The application is built as a static site and served through Nginx within a Docker container:

1. Build stage compiles the React/TypeScript application
2. Production stage uses Nginx to serve the static assets with SPA routing support
3. Container is deployed to Azure App Service

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

## Setting Up AI Inference

This application uses Hugging Face's inference API for AI capabilities. To set up the environment:

1. Create a `.env` file in the project root with the following content:

   ```
   # HuggingFace API key (required for AI inference)
   HUGGINGFACE_API_KEY=your_huggingface_api_key_here

   # Server port (default is 3001)
   PORT=3001

   # Node environment
   NODE_ENV=development
   ```

2. Replace `your_huggingface_api_key_here` with your actual Hugging Face API key.

   - You can get a key by creating an account at [Hugging Face](https://huggingface.co/).
   - Generate an API key in your account settings.

3. For deployment, make sure to set the `HUGGINGFACE_API_KEY` environment variable in your Azure App Service settings.

## API Endpoints

The backend provides several endpoints for AI inference:

- `GET /api/health` - Health check endpoint
- `POST /api/token-prediction` - Get token predictions from a model
- `POST /api/prompt-feedback` - Get feedback on prompts
- `POST /api/huggingface/:model` - Generic endpoint for any Hugging Face model

## Contributing

### Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

### Code Style

- Follow the existing code style
- Use TypeScript for all new components
- Add JSDoc comments for functions and components
- Ensure components are responsive

## License

[MIT License](LICENSE)

## Contact

For questions about this project, please contact the BYU-Idaho IT department.
