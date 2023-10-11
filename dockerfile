FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm ci

EXPOSE 3000 3001 

CMD [ "npm", "start"]
