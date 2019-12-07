FROM 192.168.9.233:30080/library/nginx:1.12
COPY dist/ /usr/share/nginx/html/
COPY default.conf /etc/nginx/conf.d/default.conf