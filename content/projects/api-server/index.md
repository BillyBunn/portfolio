---
title: Express CRUD API Server
date: "2019-08-27"
description: Extensible REST API server with CRUD methods. Built with Express in Node.js.
source: https://github.com/BillyBunn/api-server-basic
tags: Express, Node, MongoDB
image: ./api-server-1.png
---

Extensible REST API server with CRUD methods. Intended to integrate various data models through a common API. Built with [Express](https://expressjs.com/) in [Node.js](https://nodejs.org/en/).

This serves as a blueprint to get an Express server with routes for CRUD operations—`GET`, `POST`, `PUT`, `DELETE`—up-and-running with your database of choice. 

Currently, there are examples of data models using Mongoose schemas for a MongoDB database. Other dattabase frameworks can be added and integrated with this common API.

### Built With
- [Express](https://reactjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

### Data models

Currently, the app has examples of a CRUD interface for:

- [x] JavaScript memory (for initial development)
- [x] MongoDB (with Mongoose schemas)
- [ ] PostgreSQL
- [ ] Neo4j

### CRUD Routes

| Route                                          | API V1 Middleware          | HTTP Method | CRUD Operation |
| ---------------------------------------------- | -------------------------- | ----------- | -------------- |
| `/api/v1/:model`, `/api/v1/:model/:id` | handleGetAll, handleGetOne | `GET`       | Read           |
| `/api/v1/:model/:id`                  | handlePost                 | `POST`      | Create         |
| `/api/v1/:model/:id`                   | handlePut                  | `PUT`       | Update         |
| `/api/v1/:model/:id`                | handleDelete               | `DELETE`    | Delete         |

### Additional Routes

| Route                   | Result                                               |
| ----------------------- | ---------------------------------------------------- |
| `/api/v1/models`        | API V1: Sends an array of all available data models. |
| `/api/v1/:model/schema` | API V1: Sends the schema of the model in JSON format |
| `/docs`                 | Serves static JSDoc generated site  


[See project source code on GitHub](https://github.com/BillyBunn/api-server-basic)