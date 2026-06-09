const bcrypt = require("bcrypt");


async function test(){

    const password = "1234"
    const hashedPassword = await bcrypt.hash(password,10);
    console.log("hashed",hashedPassword)
    console.log("normal",password)

    const isMatched = await bcrypt.compare("134",hashedPassword);
    console.log(isMatched)
}
test()