FROM node:23.5.0-slim

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json /app

# Install dependencies
RUN npm install

# Copy all project files
COPY . /app

# Build the application
RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
