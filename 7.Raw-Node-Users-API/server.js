const http = require('http');
require('dotenv').config();
const PORT = process.env.PORT;
const fs = require('fs')

let users = [];
const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    res.setHeader("Content-Type", "application/json")
    if (url.pathname === "/health" && req.method === "GET") {
        console.log(url.pathname)
        const response = {
            status: "OK",
            uptime: "running"
        }
        res.end(JSON.stringify(response));
    } else if (url.pathname === "/users" && req.method === "GET") {
        console.log(url.pathname)

        // const result = users;
        // res.end(JSON.stringify(result))
        try {
            fs.readFile("users.json", "utf-8", (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    const result = data;
                    res.end(JSON.stringify(result))

                }
            })
        } catch (err) {
            console.log(err);
            res.end("Error fetching the users")
        }

    } else if (url.pathname === "/users" && req.method === "POST") {

        console.log(url.pathname)
        let body = ""
        req.on("data", (chunk) => {
            body += chunk;
            console.log(body)
        })



        req.on("end", () => {
            console.log("BODY:")
            console.log(body)
            try {
                const data = JSON.parse(body)
                console.log("DATA:")
                console.log(data)
                console.log("data recevied")
                const user = {
                    id: users.length + 1,
                    name: data.name
                }
                users.push(user);
                fs.writeFile(
                    "users.json",
                    JSON.stringify(users, null, 2),
                    (err) => {
                        if (err) {
                            res.statusCode = 500//internal server error
                            console.log(err)
                            return res.end(JSON.stringify({ message: "Failed to save" }))
                        } else {
                            res.end(JSON.stringify({ message: "User Created" }))
                        }
                    })


            } catch (error) {
                console.log(error.message)
                res.statusCode = 400;
                res.end(JSON.stringify({
                    "error": "Invalid JSON"
                }))//if the JSON string came invalid from the browser in body

            }

        })


    } else {
        res.statusCode = 404;
        res.end("404 Not found")
    }


})

server.listen(PORT, () =>
    console.log("Server running"))


/*Valid JSON:

{"name":"Lakshya"}
[1,2,3]
true
123
"hello"

Invalid JSON:

{name:"Lakshya"}

(property name not quoted)

hello

(not JSON at all)

{'name':'Lakshya'}

(JSON requires double quotes, not single quotes)*/

//data stored in the ram on restarting the server the data created are all destroyed
//to save the Users to JSON file

// Node creates a request object for every incoming HTTP request and passes it into your callback:

// The req object is created by Node.js whenever a client sends an HTTP request to the server. It contains information about the incoming request such as the URL, HTTP method, headers, and request body data. I have used properties like req.url, req.method, and req.headers while building routes and parsing requests.

// The res object is created by Node.js for every incoming request. It is used to send data back to the client. Using the response object we can set headers, set status codes, and send the final response using methods like res.end().


//express exist
// before express in node we  manually:

// Parsed URLs
// Parsed JSON bodies
// Set headers
// Managed routes
// Wrote error handling
