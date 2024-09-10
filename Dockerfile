FROM node:16.14.2-alpine3.14

WORKDIR /flexforce-web

COPY package.json .

COPY . .

RUN npm config set fetch-retry-maxtimeout 300000000
#RUN yarn install
#RUN yarn run build
RUN npm install --legacy-peer
RUN npm run build

EXPOSE 6600
CMD ["npm", "start"]

