# Use the official image as a parent image
FROM node:lts-slim

# Set the working directory
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY package.json  tsconfig.json ./


# Install dependencies
RUN npm install

# Copy source code
COPY src ./src

# Build the app
RUN npm run build 
# RUN npx tsc

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define environment variable
ENV NODE_ENV=production

# Run the app when the container launches
CMD ["node", "dist/index.js"] 