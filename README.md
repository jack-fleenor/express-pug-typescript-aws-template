# typescript-api-example
This is a sample project written in TypeScript that serves as an example repository for API projects. It uses popular libraries and technologies such as Jest, Pug, Express, Zod, Mongoose, and MongoDB. Whether you're new to API development or looking for a TypeScript-based reference, this repository can help you get started.

## Getting Started
To get started with this project, follow the steps below:

### Clone the repository to your local machine:

```bash
git clone https://github.com/jack-fleenor/typescript-api-example.git
```

### Install the project dependencies using npm or yarn:
```bash
cd typescript-api-example
npm install
```

## Configure the Environment Variables:

Create a `.env` file in the root of the project and set the necessary environment variables. You can copy the .env.example file as a starting point.

Start the MongoDB server. You can either run a local MongoDB instance or use a cloud-based service.

Run the development server:

```bash
npm run dev
```
The API server should now be running at http://localhost:4000.

## Project Structure
The project structure is organized as follows:

- `src/`: Contains the TypeScript source code for the project.
- - `models/`: Mongoose models for MongoDB.
- - `views/`: Pug templates for rendering HTML pages (if applicable).
- - `controllers/`: Controllers for handling API routes.
- - `shared/`: Additional services, helpers, and business logic.
- - `routes/`: Express route definitions.
- - `index.ts`: The entry point of the Express application.
- - `tests/`: Contains Jest tests for the API routes and services.
- `.env.example`: Example environment variable configuration.
- `jest.config.js`: Jest configuration for testing.
- `tsconfig.json`: TypeScript configuration.
- `package.json`: Dependency management.
- `README.md`: The project's documentation (this file).

## Available Scripts
In the project directory, you can run the following scripts:

`npm run build`: Build the TypeScript source code to the dist/ directory.
`npm start`: Start the server using the compiled code from the dist/ directory.
`npm test`: Run Jest tests to verify the functionality of the API.

## Testing
This project includes unit tests using Jest. You can run the tests with the following command:

```bash
npm test
```

## Acknowledgments
This project is built upon various open-source libraries and tools. Special thanks to the authors and maintainers of the following projects:

(Jest)[]
(Pug)[]
(Express)[]
(Zod)[]
(Mongoose)[]
(MongoDB)[]

(Simple TypeScript Starter)[https://github.com/stemmlerjs/simple-typescript-starter/tree/master]