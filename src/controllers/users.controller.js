const userService = require('../services/user.service');

// function change() {
//     return new Promise(function(resolve, reject) {

//         // Setting 2000 ms time
//         setTimeout(resolve, 3000);
//     }).then(function() {
//         console.log("Wrapped setTimeout after 2000ms");
//     });

// }

// const one = async () => {
//     await change()
//     console.log('hi 1')
// }

// const two = async () => {
//     console.log('hi 2')
// }

// const three = async () => {
//     console.log('hello 3')
// }

const createUser = async(req, res) => {
    try{
        const result = await userService.createUser(req, res);
        res.send(result);

    } catch(ex) {
        res.send(ex);
    }
    


    // await one()
    
    // await three()
    // await two()
}


module.exports = {
    createUser
}