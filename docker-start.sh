#!/bin/sh
Green='\033[0;32m'
Yellow='\033[0;33m'
Red='\033[0;31m'
NC='\033[0m' # No Color

echo "\n\n${Green}Container starting...${NC}\n"

docker run \
    --name esonline-web-test \
    --env-file ./.env.docker \
    -d \
    -e TZ=Europe/Istanbul \
    -p 3003:3000 \
    esonline-web-test:development;

docker ps -a | grep "esonline-web-test";

echo "\n${Green}Success\n\n ${NC}"

