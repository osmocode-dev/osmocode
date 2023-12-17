#!/bin/bash -e

# Authorize the execution of this script from anywhere
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR/../.."

Green=$'\e[0;32m'
Color_Off=$'\e[0m'

mkdir -p nginx/ssl/dhparam

if [[ ! -f nginx/ssl/dhparam/dhparam.pem ]]; then
  openssl dhparam -out nginx/ssl/dhparam/dhparam.pem 2048
fi

echo -e "nginx/ssl/dhparam/dhparam.pem:$Green OK !\n$Color_Off"
