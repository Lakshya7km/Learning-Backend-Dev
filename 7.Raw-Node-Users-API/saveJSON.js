const fs = require('fs')

const users = [
    { id: 1, name: "Lakshya" }
]

const writeFile = fs.writeFile("users.json", JSON.stringify(users), (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("saved")
})







const readFile = fs.readFile("users.json", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        const result = data;
        console.log(result)
    }
})
console.log(readFile)
