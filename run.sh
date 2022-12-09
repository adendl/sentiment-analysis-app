#!/bin/bash
sudo docker stop flask-app
sudo docker rm flask-app
sudo docker build backend/ -t my-flask-app

sudo docker run -d -p 5000:5000 --name flask-app my-flask-app