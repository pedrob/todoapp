# todoapp
A simple web app to make TODO. 

## Quick Start

### Requirements

- [__Java SE Development Kit__](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [__Docker__](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
- [__Maven__](http://maven.apache.org/download.cgi/)
- [__Node__](https://nodejs.org/en/download/)
- [__Yarn__](https://classic.yarnpkg.com/pt-BR/docs/install)


### Basics

Get a instance of postgreSQL and create app database

```sh
$ docker run --name postgres-instance -e "POSTGRES_PASSWORD=senha" -p 5432:5432 -v ~/todo-app/postgres:/var/lib/postgresql/data -d postgres
$ docker exec -it postgres-instance psql -U postgres -c "create database todoapp"
```

Run app backend

```sh
$ cd backend && mvn spring-boot:run
```

### Run application

Open another terminal and go to /path_to_application/frontend

```sh
$ yarn install && yarn start
```
