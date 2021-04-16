# InsomniaSeverityIndex
In this project, I created a CRUD API application using NodeJS, ExpressJS, and MongoDB

## Setup

run `npm install`

## Using Environment Variable
- Create a `.env` file in the root directory of the project
- Add environment-specific variable on new lines in the form of NAME=VALUE. It should look something like this:

```
DB_CONNECTION = mongodb+srv://<username>:<password>@cluster0.ron1z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```
- Replace `<username>` with the username of the database
- Replace `<password>` with the password for the `<username>` user 
- Replace myFirstDatabase with the name of the database that connections will use by default. 
- **Note**: Replace the whole string after `DB_CONNECTION =` as you wish to connect to your database

## Execute the Project
run `npm start`

---
Happy coding!
