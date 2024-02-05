# Build stage
FROM node:20-alpine as build
WORKDIR /app/client
COPY package*.json .
RUN npm install
COPY ./src ./src
COPY ./public ./public
COPY ./tsconfig.json .
COPY ./tsconfig.node.json .
COPY ./vite.config.ts .
COPY ./index.html .
COPY ./.env .
RUN npm run build

# Serve stage
FROM nginx:alpine as serve
COPY --from=build /app/client/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]