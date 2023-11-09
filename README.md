# Access API - Full Stack Developer Portfolio Project

Welcome to my Access API project! This project demonstrates my skills as a junior full stack developer, showcasing my ability to build a RESTful API from scratch and effectively use tools like Postman for testing.

## Project Overview

This project is an Access API that serves as a portfolio piece to demonstrate my proficiency in the following areas:

- Creating a RESTful API using Node.js and Express.
- Setting up and configuring a PostgreSQL database.
- Handling CRUD (Create, Read, Update, Delete) operations on a database.
- Implementing route handlers and middleware.
- Using Postman for API testing and validation.
- Demonstrating error handling and validation.

## Features

- **User Management**: This API allows for the creation, retrieval, updating, and deletion of user profiles.
- **Database Integration**: It integrates with a PostgreSQL database to store user information.
- **API Testing**: I have used Postman to continuously test and validate the API endpoints.
- **Error Handling**: The API includes error handling to provide responses to clients in case of errors.

## Getting Started

To get a copy of the project up and running on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/SamGiorgievski/basic-api.git`
2. Navigate to the project directory: `cd basic-api`
3. Install project dependencies: `npm install`
4. Database Setup: `psql -U your_username -a -f users.sql`
   - Note: use your own personal username instead of "your_username"
6. Configure environment variables by creating a `.env` file and providing the necessary values. Refer to `.env.example` for required variables.
7. Start the API server: `npm start`
8. You can now access the API at `http://localhost:3001` (or as configured in your environment).

## API Endpoints

- **GET /users**: Retrieve a list of all users.
- **GET /users/:userId**: Retrieve a specific user by ID.
- **POST /users**: Create a new user. (Requires valid JSON request body)
- **PUT /users/:userId**: Update an existing user by ID. (Requires valid JSON request body)
- **DELETE /users/:userId**: Delete a user by ID.

## Testing with Postman

You can use Postman to test the API endpoints by importing the provided collection and environment files. Refer to the [Postman Collection](./postman/basicapi.postman_collection.json)

## Technology Stack

- Node.js
- Express.js
- PostgreSQL
- Postman

## Thanks for stopping by!
Feel free to reach out to me if you have any questions or feedback about this project. I am actively seeking opportunities to grow as a full-stack developer and contribute to exciting projects. Thank you for considering my portfolio!

[LinkedIn Profile](https://www.linkedin.com/in/samgiorgievski/)
[GitHub Profile](https://github.com/SamGiorgievski)
