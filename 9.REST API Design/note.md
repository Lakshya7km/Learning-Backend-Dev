---
What is REST?
---

REST stands for:

Representational State Transfer

---

Design your API around resources and use HTTP methods to tell what action you want.

---

Resource = Noun
Think of things in your application:

Users
Tasks
Posts
Comments
Products
Orders
These are resources.

Bad API Design
Many beginners do:

GET /getUsers
POST /createUser
DELETE /deleteUser/1
PUT /updateUser/1
Problem:

Action repeated in URL
AND
Action repeated in HTTP method
Good REST Design
Use the resource name:

GET /users
POST /users
GET /users/1
PUT /users/1
DELETE /users/1
Now the HTTP method tells the action.

CRUD Mapping
CRUD means:

Create
Read
Update
Delete
REST mapping:

Operation Method Route
Create POST /users
Read All GET /users
Read One GET /users/:id
Update PUT/PATCH /users/:id
Delete DELETE /users/:id
Memorize this table.

Example
Create a user:

POST /users
Body:

{
"name": "Lakshya"
}
Get all users:

GET /users
Get one user:

GET /users/5
Route param:

req.params.id
gives:

5
Delete user:

DELETE /users/5
Nested Resources
Suppose every user has tasks.

Good REST style:

GET /users/1/tasks
Meaning:

Give me tasks belonging to user 1
Query Parameters for Filtering
Remember:

Route params identify a resource.

/users/5
means:

User id = 5
Query params modify the result.

/users?age=20
means:

Give users where age=20
Examples:

/users?page=2

/users?role=admin

/tasks?status=done

/posts?search=node
REST Example for Your Future Task API
Get all tasks:

GET /tasks
Create task:

POST /tasks
Get task 10:

GET /tasks/10
Update task 10:

PATCH /tasks/10
Delete task 10:

DELETE /tasks/10
This is exactly how your Task Management API will be designed.

---

Topic: Input Validation ⭐

---

//bad
app.post("/users",(req,res)=>{

    const user = req.body;

    users.push(user);

    res.json(user);

});
anything get saved

//good

app.post("/users",(req,res)=>{

    const { name } = req.body;

    if(!name){
        return res.status(400).json({
            error:"Name is required"
        });//bad input
    }return is important becuase it stop the execution after sending the error response immediately

    res.status(201).json({
        message:"User created"
    });

});

What is the difference between:

if (!name)

and

if (name === undefined)

ans---
if (!name)

catches:

undefined
null
""
0
false
NaN

all return false

Any falsy value.

if (name === undefined)

catches only:

undefined

Topic: Global Error Format
{
"success": false,
"message": "Internal server error"
}

consistent repsonse for error
success -> always exists
message -> always exists

Only the values change

success -> always exists
message -> always exists

Only the values change

//global error handler -> express know it with 4 parameter
app.use((err,req,res,next)=>{
res.status(500).json(

        success:false,
        message:err.message
    )

})

throwing an error

Topic: CORS ⭐⭐⭐

This is one of the most common beginner backend issues.

Imagine:

Frontend:

http://localhost:5173

Backend:

http://localhost:3000

Frontend tries:

fetch("http://localhost:3000/users")

Browser says:

Blocked by CORS policy

😡

Even though your backend is working.

What is an Origin?

Origin =

Protocol + Domain + Port

Example:

http://localhost:3000

Origin:

http
localhost
3000

Different port:

http://localhost:5173

Different origin.

Why CORS Exists

Without CORS:

Any website
↓
Could call your API
↓
Read responses

Browser protects users by enforcing CORS rules.

Enable CORS

Install:

npm install cors

Use:

const cors = require("cors");

app.use(cors());

Now:

Frontend
↓
Backend

works.

Restrict Origins

Instead of allowing everyone:

app.use(cors());

Allow only your frontend:

app.use(
cors({
origin: "http://localhost:5173"
})
);

Request Body Size Limits
Now imagine someone sends:

500 MB

or

2 GB

of data.

What happens?

Server memory usage ↑
Performance ↓
Possible crash

Not good.

Express Solution
app.use(express.json({
limit: "10kb"
}));

Why We Use It

Security:

Prevent huge requests

Performance:

Protect server memory

Stability:

Reduce abuse
Common Limits
10kb
50kb
100kb
1mb
5mb

Depends on application.

For normal CRUD APIs:

100kb



API Versioning Basics

Imagine you launch:

GET /users

Response:

{
  "id":1,
  "name":"Lakshya"
}

Frontend uses it.

Six months later you change it:

{
  "userId":1,
  "fullName":"Lakshya"
}

Now old frontend code breaks. ❌

Solution: Version APIs

Version 1:

/api/v1/users

Version 2:

/ api/v2/users

Now both can exist:

GET /api/v1/users
GET /api/v2/users

Example:

Version 1:

{
  "id":1,
  "name":"Lakshya"
}

Version 2:

{
  "userId":1,
  "fullName":"Lakshya",
  "age":20
}

Old clients continue using:

/api/v1/users

New clients use:

/api/v2/users
Express Example
app.get("/api/v1/users",(req,res)=>{
    res.json({name:"Lakshya"});
});

app.get("/api/v2/users",(req,res)=>{
    res.json({
        fullName:"Lakshya",
        age:20
    });
});
Why Version APIs?
Avoid breaking old clients
Allow gradual upgrades
Maintain backward compatibility
