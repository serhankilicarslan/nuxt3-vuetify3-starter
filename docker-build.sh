#!/bin/sh
Green='\033[0;32m'
Yellow='\033[0;33m'
Red='\033[0;31m'
NC='\033[0m' # No Color

echo "\n\n${Yellow}Docker images is removing...${NC}\n"

docker images -a | grep "esonline-web-test" | awk '{print $3}' | xargs docker rmi;

echo "\n\n${Green}Docker images is rebuilding...${NC}\n"

docker build -t esonline-web-test:development .;

echo "\n\n${Green}Ready.${NC}\n"

docker images -a | grep "esonline-web-test"
