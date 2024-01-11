# Build stage
FROM node:20-alpine as build
WORKDIR /app/server
COPY server/package*.json ./
RUN npm install
COPY server/ ./
RUN npm run build

# Serve stage
FROM alpine:3
WORKDIR /app/server
COPY --from=build /app/server/dist /app/server
COPY server/.env .

RUN apk add --no-cache nodejs

CMD ["node", "src/server.js"]