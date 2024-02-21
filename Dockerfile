FROM node:alpine
WORKDIR /app
COPY . /app
RUN npm install --force
EXPOSE 5173
CMD ["npm", "run-script", "dev"]
