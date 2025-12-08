# ------------ STAGE 1: Build Angular ------------
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# build production
RUN npm run build -- --configuration production

# ------------ STAGE 2: Serve with Nginx ------------
FROM nginx:alpine

# ลบ config default ของ nginx
RUN rm /etc/nginx/conf.d/default.conf

# ใส่ nginx config ของเรา
COPY nginx.conf /etc/nginx/conf.d/default.conf

# copy build output จาก stage แรก
COPY --from=build /app/dist/rin-linin-art-showcase/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
