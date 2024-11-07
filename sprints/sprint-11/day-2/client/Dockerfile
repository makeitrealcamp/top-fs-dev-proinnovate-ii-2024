FROM node:lts-slim AS build

# Set the working directory
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY package.json  tsconfig.json ./


# Install dependencies
RUN npm install

# Copy source code
COPY . ./

# Build the app
RUN npm run build 
# RUN npx tsc

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]