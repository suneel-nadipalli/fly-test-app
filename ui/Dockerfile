# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy project files
COPY . .

# Build the Next.js app
RUN npm run build

# Expose frontend port
EXPOSE 3000

# Start Next.js in production mode
CMD ["npm", "run", "start"]
