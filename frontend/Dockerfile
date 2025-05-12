# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the frontend code
COPY . .

# Expose the port React runs on
EXPOSE 3000

# Start the React dev server
CMD ["npm", "start"]
