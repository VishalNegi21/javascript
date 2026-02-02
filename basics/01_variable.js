const accountId = 12343
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState  //not known so do not assign
// accountId = 54322 (const cannot change)

accountEmail="hjd@gmail.com" // can change
accountPassword="432121"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
do not use var
becoz of issue in block scope and functional scope
*/