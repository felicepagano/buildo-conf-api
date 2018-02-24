FROM nginx
RUN mkdir -p /etc/nginx/ssl/
ADD default.conf /etc/nginx/conf.d/
ADD buildo.crt /etc/nginx/ssl/
ADD buildo.key /etc/nginx/ssl/
ADD .htpasswd /etc/nginx/

EXPOSE 443
