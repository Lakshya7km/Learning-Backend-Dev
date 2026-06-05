Each HTTP method represents an action on that resource.

1. Create user -> POST
2. Get users -> GET
3. Replace user -> PUT
4. Update email only -> PATCH
5. Delete user -> DELETE

##HTTP Methods

Think of a user record:

{
id: 1,
name: "Lakshya",
age: 20
}

Each HTTP method represents an action on that resource.

GET → Read Data

Used when fetching data.

GET /users

Get all users.

GET /users/1

Get one user.

Express:

app.get("/users",(req,res)=>{
res.send(users);
});
POST → Create Data

Used when creating new records.

POST /users

Body:

{
"name":"Lakshya"
}

Express:

app.post("/users",(req,res)=>{
// create user
});
PUT → Replace Entire Resource

Suppose database contains:

{
id:1,
name:"Lakshya",
age:20
}

Request:

PUT /users/1

Body:

{
"name":"Rahul",
"age":25
}

Result:

{
id:1,
name:"Rahul",
age:25
}

Entire resource replaced.

PATCH → Partial Update

Current:

{
id:1,
name:"Lakshya",
age:20
}

Request:

PATCH /users/1

Body:

{
"age":21
}

Result:

{
id:1,
name:"Lakshya",
age:21
}

Only changed field updated.

DELETE → Remove Resource
DELETE /users/1

Result:

User deleted
REST API Example
GET /users
GET /users/1

POST /users

PUT /users/1

PATCH /users/1

DELETE /users/1


Topic: HTTP Status Codes

Right now you've been doing:

res.send("User Created");

But professional APIs also send status codes.

Example:

res.status(201).send("User Created");

The status code tells the client what happened.

Most Important Codes
200 OK

Request succeeded.

res.status(200).send("Users fetched");
201 Created

New resource created.

res.status(201).send("User created");

Used after:

POST /users
400 Bad Request

Client sent invalid data.

res.status(400).send("Invalid JSON");

You've already done this in raw Node.

401 Unauthorized

User is not logged in.

res.status(401).send("Login required");
403 Forbidden

User is logged in but lacks permission.

res.status(403).send("Access denied");

Example:

Normal user trying to access admin route
404 Not Found

Route or resource doesn't exist.

res.status(404).send("User not found");
500 Internal Server Error

Server crashed or unexpected failure.

res.status(500).send("Something went wrong");

GET success      -> 200

POST success     -> 201

Bad input        -> 400

Not logged in    -> 401

No permission    -> 403

Not found        -> 404

Server error     -> 500