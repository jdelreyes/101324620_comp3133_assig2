FROM node:20-alpine

WORKDIR /client

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 8000

CMD ["npm", "start"]