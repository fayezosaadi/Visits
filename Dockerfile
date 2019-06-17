FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# Default command to run container startup
CMD ["npm", "start"]
