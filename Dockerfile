FROM node:14-slim

WORKDIR /application

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]