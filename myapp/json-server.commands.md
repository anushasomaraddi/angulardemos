# Install json server

npm install -g json-server

# verify json-server installation

json-server --version

# Run json server on a data file

json-server --watch db.json

# access your api

GET http://localhost:3000/employees
GET http://localhost:3000/employees/3
POST GET http://localhost:3000/employees

POST http://localhost:3000/posts

PUT http://localhost:3000/employees/5
{

    "firsh_name":"Lestle",
    "last_name":"Andy",
    "email":"Andylestle@gmail.com"


    }

    DELETE  http://localhost:3000/employees/5
