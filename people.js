const names = require("./names.js");
const hobbies = require("./hobbies.js");

function namesPlusHobbies(){
    let fullName = names('Michele', 'Casani');
    let hobbiesList = hobbies('music,','videogames,','board games.')

    return{
        name : fullName,
        hobbies: hobbiesList
    }
}

console.log(namesPlusHobbies())