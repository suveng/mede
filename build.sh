#!/usr/bin/env sh
# 检查变量文件
if [  ! -f docker.env ]; then
    echo '文件不存在,自动创建'
    touch docker.env
    echo 'version 1 \n name mede \n host 192.168.9.233' > docker.env
fi

#获取输入
profile=$1

# 默认值
if [ -z "$profile"  ]; then
    echo '没有输入环境,默认dev'
    profile=dev
fi

# image tag的版本

old_version=$(cat docker.env | grep version | awk '{print $2}' | tr -d '\n')
name=$(cat docker.env | grep name | awk '{print $2}' | tr -d '\n')
host=$(cat docker.env | grep host | awk '{print $2}' | tr -d '\n')
new_version=$(expr $old_version + 1)

# 更新tag版本
sed "s/$old_version$/$new_version/" docker.env > docker.2
rm -f docker.env
mv docker.2 docker.env

tag=$host/$name:$profile-$new_version
echo "$tag"


docker build -t $tag .
