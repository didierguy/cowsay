const user = require('./information.js');

let cowsay = require('cowsay');

console.log(cowsay.say({
    text: `I'm ${user.firstName} ${user.lastName} from ${user.campus} `,
    e: "xx",
    T: "U"
}));