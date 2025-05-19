name: Build and Push Docker image

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout código
      uses: actions/checkout@v2

    - name: Login a Docker Hub
      uses: docker/login-action@v2
      with:
        username: kaliyn
        password: dckr_pat_ydWsCsLIuZOzNLTzzBhKFORUVBI

    - name: Build y Push de la imagen
      uses: docker/build-push-action@v3
      with:
        push: true
        tags: kaliyn/docker-elizondo:v1
