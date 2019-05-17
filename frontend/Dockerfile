FROM node:latest

WORKDIR /usr/src/banger_music/frontend

COPY package.json /usr/src/banger_music/frontend
COPY package-lock.json /usr/src/banger_music/frontend

RUN npm install

COPY . /usr/src/banger_music/frontend/

EXPOSE 3000

CMD ["npm", "start"]