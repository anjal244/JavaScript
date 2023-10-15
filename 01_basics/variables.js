const accountId = 244
let accountName = "Anjal Niraula"
var accountEmail = "anjalniraula244@gmail.com"
accoutCity = "Ilam"     // This is not prefer to use
let accountState;

// accountId = 2
// This is not allowed

accountName = "Niraula Anjal"
accountEmail = "niraula.anjal244@gmail.com"
accoutCity = "Jhapa"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log("accountId");

console.table([accountId, accountName, accountEmail, accoutCity, accountState]);
