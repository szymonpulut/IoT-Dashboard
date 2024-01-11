# Build stage
FROM node:20-alpine as build
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ ./
COPY client/.env .
RUN npm run build

# Serve stage
FROM nginx:alpine
COPY --from=build /app/client/dist /usr/share/nginx/html
EXPOSE 80