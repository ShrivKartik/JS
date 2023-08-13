const accountId = 234567
let accountEmail = "kartikey@google.com"
var accountPassword = "231455"
accountCity = "Surat"
let accountState;

// accountId = 345677  // not allowed

accountEmail = "shrivastav@google.com"
accountPassword = "124356"
accountCity = "Noida"


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
   prefer not to use var
   
   because of issue in block scope and functional scope

*/