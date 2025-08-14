FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Avvia Vite esponendo su 0.0.0.0
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
