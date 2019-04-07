from node:7
ENV NODE_ENV=production
ENV URL=https://www.themealdb.com/api/json/v1/1/randomselection.php
ENV PORT=8080
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD npm start
EXPOSE $PORT