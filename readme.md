# Employee Management System

## Installation & Running

1. Install root dependencies.

   ```shell
   npm i
   ```

2. Install frontend and backend dependencies.

   ```shell
   npm run i:dev
   ```   

2. Start both the Angular application and the Express-Apollo server. Also, pull and run an instance of MongoDB Docker image.

   ```shell
   npm start
   ```

## Stopping

1. Simply press `ctrl` + `c` at the same time to stop the application and the server.
2. Stop and remove the MongoDB container.

   ```shell
   npm run db:dev:rm
   ```
