# syntax=docker/dockerfile:1
   
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install --prod
CMD ["node", "src/index.js"]
EXPOSE 3000