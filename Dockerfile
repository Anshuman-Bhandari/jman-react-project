# Stage 1: Build the React application
FROM node:18-alpine AS build-stage

# Set working directory
WORKDIR /app

# Copy package files first for dependency caching
COPY package*.json ./

# Install dependencies (using npm install for better compatibility)
RUN npm install

# Copy source code
COPY . .

# Build the React application
RUN npm run build

# Stage 2: Serve the application with nginx
FROM nginx:alpine AS production-stage

# Copy the built assets from build stage
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
