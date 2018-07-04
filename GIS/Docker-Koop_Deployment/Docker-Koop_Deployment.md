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

If you want to build a Dockerfile for yourself, go to this [example](CreateDockerfileFromScratch.md)


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

5. Load Data into Mongo
You can add some data to the mongo image. For example, this [JSON](https://www.kaggle.com/new-york-city/ny-public-recycling-bins).

```sh
$ mongoimport --db ciudadesdb --collection ciudades --drop --file socrata_metadata.json --port 27017
```
6. Check the availability of the Database with [Robo3T](https://robomongo.org/).

**LORETO! IMAGEN!**

### Koop

![image](https://user-images.githubusercontent.com/7832202/28444721-43eb6ea6-6d8d-11e7-8d56-3af46fd5bf88.png)


## Resources
* [Docker Official Documentation](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
* [Mongo Import](https://www.todavianose.com/importar-en-mongodb/)
* [Docker-Mongo-Sample-Dataset](https://github.com/g0t4/docker-mongo-sample-datasets)
* [Mongo Cheat Sheet](https://blog.codecentric.de/files/2012/12/MongoDB-CheatSheet-v1_0.pdf)
* [Mongo Example - Dockefile](https://github.com/atbaker/mongo-example/blob/master/Dockerfile)
* [Eliminar contenedores Docker](https://www.solvetic.com/topic/5374-como-eliminar-imagenes-y-contenedores-docker-centos-ubuntu/)
