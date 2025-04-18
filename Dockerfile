# Build stage
FROM --platform=linux/amd64 node:18-alpine as build
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code and build the app
COPY . .
RUN npm run build

# Production stage with Nginx
FROM --platform=linux/amd64 nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 