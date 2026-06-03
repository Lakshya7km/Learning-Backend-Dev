const { error } = require('console');
const fs = require('fs')
const path = require('path')


// //join the dir name and the folder
// const dataFolder = path.join(__dirname, "data")


// //check if folder exist ior not
// if (!fs.existsSync(dataFolder)) {
//     //create folder 
//     fs.mkdirSync(dataFolder)
//     console.log('datafolder created');
// }

// const filePath = path.join(dataFolder, "example.txt")

// //sync way of creating the file

// const data = "write this txt in the file"
// fs.writeFileSync(filePath, data);
// console.log("file created successfully")


// //to read the file content

// const readContetnFromFile = fs.readFileSync(filePath, 'utf-8')
// console.log(readContetnFromFile);


// //append data in the file
// fs.appendFileSync(filePath, '\n this is a new line added to that file')
// console.log("new file content added")


//async way of creating the file

const asyncData = path.join(__dirname, "asyncData");

//check if the dir present or not

if (!fs.existsSync(asyncData)) {
    fs.mkdirSync(asyncData);
    console.log("dir created successfully")
}


//file path
const filePathAsync = path.join(asyncData, "asyncDemo.txt")
//create file

fs.writeFile(filePathAsync, "this is im writing with the help of async fs module", (err) => {
    if (err) throw err;
    console.log("file created successfully")


    //readfile

    fs.readFile(filePathAsync, "utf-8", (err, data) => {
        if (err) throw err;
        console.log("async file content", data)



        //append file
        fs.appendFile(filePathAsync, "\n this is new line added", (err, data) => {
            if (err) throw err;
            console.log("new line added to async file")

            fs.readFile(filePathAsync,"utf-8", (err, Updateddata) => {
                if (err) throw err;
                console.log("async file content", Updateddata)
            })
        })


    })


})