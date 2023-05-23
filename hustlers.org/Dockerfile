# syntax=docker/dockerfile:1
   
FROM node:18-alpine
WORKDIR /hustlers.org
COPY . .
RUN yarn install --prod --network-timeout 300000
CMD ["node", "src/index.js"]
EXPOSE 3000