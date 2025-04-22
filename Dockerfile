# Build frontend stage
FROM --platform=linux/amd64 node:18-alpine as frontend-build
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code and build the app
COPY . .
RUN npm run build

# Build backend stage
FROM --platform=linux/amd64 node:18-alpine as backend-build
WORKDIR /app

# Copy server package files and install dependencies
COPY server/package*.json ./
RUN npm install --omit=dev

# Copy server code
COPY server .

# Production stage
FROM --platform=linux/amd64 nginx:alpine

# Install Node.js with explicit version for stability
RUN apk add --update --no-cache nodejs npm supervisor

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy frontend build
COPY --from=frontend-build /app/dist /usr/share/nginx/html

# Copy backend
WORKDIR /app/backend
COPY --from=backend-build /app /app/backend

# Create logs directory
RUN mkdir -p /var/log/supervisor /app/backend/logs

# Copy supervisor configuration
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost/api/health || exit 1

# Expose port 80
EXPOSE 80

# Start both frontend and backend services
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"] 