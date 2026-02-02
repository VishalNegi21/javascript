let score = "33"
console.log(typeof(score))
let value =  Number(score)  // converted to number
console.log(typeof(value))

let score1 ="33abc"
let value1 = Number(score1) // convertd to number
console.log(value1) // but actually it is NaN

// "33" => 33
// "33abs" => NaN
// true =>1 , false=>0

let isLoggedIn ="abc"
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanisLoggedIn)

let name = "hitesh"
let boolname = Boolean(name)
console.log(typeof boolname)

// 1=> true 0=>false
// "" => false
// "hitesh" => true

let somenumber = 99
let stringsomenumber = String(somenumber)  // 99 of string type
console.log(stringsomenumber)
console.log(typeof stringsomenumber)