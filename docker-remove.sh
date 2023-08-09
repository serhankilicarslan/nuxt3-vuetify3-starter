#!/bin/sh
Green='\033[0;32m'
Yellow='\033[0;33m'
Red='\033[0;31m'
NC='\033[0m' # No Color

echo "\n\n${Yellow}Container removing...${NC}\n"
docker ps -a | grep "esonline-web-test";

docker ps -a | grep "esonline-web-test" | awk '{print $1}' | xargs docker stop | xargs docker rm;

echo "\n${Yellow}Container removed.\n\n${NC}"
