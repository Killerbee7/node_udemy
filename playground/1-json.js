const fs = require('fs');
const { userInfo } = require('os');
const { json } = require('stream/consumers')
// const { json } = require('stream/consumers')

// const book ={
//     title: 'CAT ON A BUS',
//     author: 'Dibya'
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('1-json.json', bookJSON)

// console.log(bookJSON);

// const parseData = JSON.parse(bookJSON) // can access a property

// console.log(parseData.author);

const dataBuffer = fs.readFileSync('1-json.json');

const dataJSON = dataBuffer.toString();

const parseUser = JSON.parse(dataJSON);

console.log(parseUser)

parseUser.name= "Lovely"
parseUser.age= "22"

const userJSON = JSON.stringify(parseUser)
fs.writeFileSync('1-json.json', userJSON)

