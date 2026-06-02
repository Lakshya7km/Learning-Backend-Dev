// const name = "lakshya"


//common properties of error
try {
    console.log(name);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

//js let me create customise error

try{ //       errorName error Message
    throw new Error("Somthing went wrong")
}catch(error){

    console.log(error.name);
}