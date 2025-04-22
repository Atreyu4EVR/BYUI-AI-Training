# Build frontend stage
FROM --platform=linux/amd64 node:18-alpine as frontend-build
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code and build the app
COPY . .
RUN npm run build

# Build backend stage
FROM --platform=linux/amd64 node:18-alpine as backend-build
WORKDIR /app

# Copy server package files and install dependencies
COPY server/package*.json ./
RUN npm install

# Copy server code
COPY server .

# Production stage
FROM --platform=linux/amd64 nginx:alpine

# Install Node.js
RUN apk add --update nodejs npm supervisor

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy frontend build
COPY --from=frontend-build /app/dist /usr/share/nginx/html

# Copy backend
WORKDIR /app/backend
COPY --from=backend-build /app .

# Copy supervisor configuration
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Create directory for supervisor logs
RUN mkdir -p /var/log/supervisor

# Expose port 80
EXPOSE 80

# Start both frontend and backend services
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"] 