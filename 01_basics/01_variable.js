const accountId = 144553
let accountEmail = "kartikey@google.com"
var accountPassword = "12345"
accountCity = "Gujarat"
let accountState;

// accountId = 2 // not allowed


accountEmail = "kt@kt.com"
accountPassword = "21212121"
accountCity = "Noida"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])