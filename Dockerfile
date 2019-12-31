# 基础镜像
FROM 192.168.9.233:30080/library/nginx:1.12

# 作者
MAINTAINER suveng

# 代码构建好打包到基础容器
COPY dist/ /usr/share/nginx/html/
COPY default.conf /etc/nginx/conf.d/default.conf

