#!/bin/bash -e

# Authorize the execution of this script from anywhere
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR/../.."

Green=$'\e[0;32m'
Color_Off=$'\e[0m'

mkdir -p nginx/ssl/certs

if [[ ! -f nginx/ssl/certs/localhost.crt ]]; then
  echo ""
  # Generate a ssl certificate of 10 years for localhost domain
  openssl req -x509 -sha256 -nodes -newkey rsa:2048 -days 3650 \
    -keyout nginx/ssl/certs/localhost.key \
    -out nginx/ssl/certs/localhost.crt <<EOF
fr
PROVINCE_STATE
CITY
Osmo
Osmocode
localhost
nobody@nobody.com
EOF
fi

echo -e "nginx/ssl/certs/localhost.key:$Green OK !$Color_Off"
echo -e "nginx/ssl/certs/localhost.crt:$Green OK !$Color_Off"
