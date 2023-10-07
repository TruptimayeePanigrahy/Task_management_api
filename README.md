# Task_management_api
Task Management API
This is a RESTful API for managing tasks. Users can create, retrieve, update, and delete tasks. It also includes optional features like authentication and rate limiting.

## Table of Contents
- Getting Started
- Prerequisites
- Installation
- Usage
- Running the API
- Task structure
- Endpoints
- Authentication
- Error Handling
- Logging

## Getting Started
Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js
- npm installed.


## Clone this repository:

- git clone https://github.com/TruptimayeePanigrahy/Task_management_api.git <br/>
- cd task-management-api
## Install dependencies:

npm install <br/>

Add a .env file and add below three varibales:-<br/>
mongourl=your mongodb atlas url <br/>
 port=8080<br/>
secrete=""<br/>
- Running the APP: <br/>

npm run server <br/>

The API will be accessible at http://localhost:8080 by default.
## Task Structure
Each task should have the following properties:<br/>
ID<br/>
Title<br/>
Description<br/>
Creation Date<br/>
Status (e.g., pending, completed)

## Endpoints:

POST /task/addtask: Add a new task.<br/>
GET /task/gettask: Retrieve a list of all tasks.<br/>
GET /task/id Retrieve a specific task by ID.<br/>
PUT /task/updatetask/id Update a specific task by ID.<br/>
DELETE /task/deletetask/id Delete a specific task by ID.<br/>

## Authentication Endpoints 
POST /user/register: Register a new user.<br/>
POST /user/login: Authenticate and log in a user.<br/>
## Authentication:
To use authentication, you must register and log in to manage tasks. Protected endpoints require authentication.
## Error Handling
Appropriate HTTP status codes and error messages will be returned in case of errors.
## Logging 
API requests and responses can be logged in a log.txt file.
<h1 align="center">✨Thank You✨</h1>
