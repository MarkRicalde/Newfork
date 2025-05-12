FROM node:18
WORKDIR /app

COPY package*.json tsconfig.json ./
RUN npm install

COPY . .

# Build TypeScript
RUN npm run build

EXPOSE 5000

# Run the compiled app
CMD ["npm", "start"]
