//write a program that:
/*
1.create an empty array users
2.add 3 user object
3.prints the whole array
4.print only the second user name
*/


const users = []

const user1 =  { name: 'Lakshya', age: 20 };
 const user2 ={ name: 'Rahul', age: 22 }
 const user3= { name: 'Aman', age: 25 }


 users.push(user1);
 users.push(user2);
 users.push(user3);


 console.log(users[1].name)