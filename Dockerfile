FROM node:12
ENV NODE_ENV=production
##ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY ./package*.json ./
RUN npm install
COPY ./ .
EXPOSE 3000
CMD ["node", "bin/www"]
