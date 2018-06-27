# Docker - Koop Deployment for GIS

## Introduction

The objective is to use Georreferenced Data using Koop. Koop is a highly-extensible Javascript toolkit for connecting incompatible spatial APIs.

Out of the box it exposes a Node.js server that can translate [GeoJSON](http://geojson.org/) into the [Geoservices](https://geoservices.github.io/) specification supported by the [ArcGIS](https://esri-es.github.io/awesome-arcgis/) family of products. Koop can be extended to translate data from any source to any API specification.

## Prerequisites
For this tutorial, we wil use:
- OS: Since is not possible to install Docker on Windows 10 Home edition, we use Ubuntu 18.04 LTS
- Create an account on [Docker Hub](https://hub.docker.com/)
- Docker Community Edition
- Koop

## Steps

### Install Docker
1. Update the `apt` package index.

```sh
$ sudo apt-get update
```

2. Install the last version of Docker.
```sh
$ sudo apt-install docker
```

3. Verify that Docker is installed correctly by running the `hello-world` image.
```sh
$ sudo docker run hello-world
```

#### Test Docker version

1. Run `docker --version` and ensure that you have a supported version of Docker:

**LORETO! IMAGEN!**

2. Run Docker info or (`docker version` without `--`) to view even more details about your Docker installation:

**LORETO! IMAGEN!**

### Define a Container with Dockerfile
`Dockerfile` defines what goes in the environment inside your container.

- Create an empty directory
- Change directories (`cd`) into the new directory
- Create a file called `Dockerfile`
```sh
$ touch dockerfile
```

**LORETO! IMAGEN!**

- Edit the Dockerfile copying in it the following statements:

```python
# Use an official Python runtime as a parent image
FROM python:2.7-slim

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME World

# Run app.py when the container launches
CMD ["python", "app.py"]

# Set proxy server, replace host:port with values for your servers
ENV http_proxy host:port
ENV https_proxy host:port
```

In order to do this on your terminal, type:

```sh
$ gedit Dockerfile
```
- Create a new file, called `requirements.txt`

```sh
$ touch requirements.txt

$ gedit requirements.txt
```
and type the following statements:
````
Flask
Redis
````
- Create a new file called 'app.py'

```sh
$ touch app.py

$ gedit app.py
```
and type the following statements:
```python
from flask import Flask
from redis import Redis, RedisError
import os
import socket

# Connect to Redis
redis = Redis(host="redis", db=0, socket_connect_timeout=2, socket_timeout=2)

app = Flask(__name__)

@app.route("/")
def hello():
    try:
        visits = redis.incr("counter")
    except RedisError:
        visits = "<i>cannot connect to Redis, counter disabled</i>"

    html = "<h3>Hello {name}!</h3>" \
           "<b>Hostname:</b> {hostname}<br/>" \
           "<b>Visits:</b> {visits}"
    return html.format(name=os.getenv("NAME", "world"), hostname=socket.gethostname(), visits=visits)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
```

- Install the Python libraries that are written in the `requirements.txt`

```sh
$ sudo apt install python-pip

$ pip install -r requirements.txt
```

#### Build the App

1. Create a Docker image

```sh
$ docker build -t geosquad
```

2. Check where is your built image

```sh
$ docker image ls
```

#### Run the App

Run the app, mapping your macjhine's port 4000 to the container's published port 80 using `-p`:

```sh
docker run -p 4000:80 geosquad
```

You should see a message that Python is serving your app at http://0.0.0.0:80. But that message is coming from inside the container, which doesn’t know you mapped port 80 of that container to 4000, making the correct URL http://localhost:4000.

Go to that URL in a web browser to see the display content served up on a web page.

**LORETO! IMAGEN!**

### Mongo
Open your Console and follow the next steps:

1. Login on Docker
```sh
$ docker login
```

2. Go to [Docker Hub](https://hub.docker.com/) and find the image that best suits your project. We used [MongoDB](https://hub.docker.com/_/mongo/).

```sh
$ docker pull mongo
```

3. Run the Container

```sh
$ docker run -p 27017:27017 "mongo"
```

4. Check if the container is running

```sh
$ docker ps
```

### Koop
