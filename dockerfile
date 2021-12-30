FROM node:16.13.1-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm run build

COPY . /app

EXPOSE 3000

CMD ["npm", "start"]