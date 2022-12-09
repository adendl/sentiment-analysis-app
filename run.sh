#!/bin/bash
sudo docker stop backend
sudo docker rm backend
sudo docker stop frontend
sudo docker rm frontend
sudo docker build backend/ -t backend
sudo docker build frontend/ -t frontend

sudo docker run -d -p 5000:5000 --name backend backend
sudo docker run -d -p 3000:3000 --name frontend frontend

