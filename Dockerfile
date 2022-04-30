FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8100
# required for docker desktop port mapping

CMD ["ionic", "serve"]

# CMD ["npm", "start"]