#!/bin/bash

url="url"
timeout=1

while true; do
  result=$(curl -sS "$url")

  if [ -n "$result" ]; then
    echo true
  else
    echo "Request timed out"
  fi

  sleep "$timeout"
done