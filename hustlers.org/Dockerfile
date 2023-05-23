# syntax=docker/dockerfile:1
   
FROM node:18-alpine
WORKDIR /hustlers.org
COPY . .
RUN npm install
CMD ["npm", "start"]
EXPOSE 3000