# Use the official Node.js 14 image as a parent image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or npm-shrinkwrap.json)
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of your app's source code
COPY src/ /usr/share/nginx/html

# Your app binds to a specific port, so expose it
EXPOSE 3000

# Define the command to run your app
CMD ["node", "app.js"]
