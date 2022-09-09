FROM node:alpine
COPY . /
WORKDIR  /
EXPOSE 80
CMD node index.js
