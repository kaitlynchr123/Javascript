console.log("testing")

let kait = {name: "name",
    age: "20",
    height: "5ft8",
    favoriteCandy: "twix",
    eyeColor: "blue"

}

var person = {
    firstName: "Kc",
    lastName: "C", 
    fullName: function() {
        return this.firstName + " " + this.lastName;
        }
}

let variables1 = {
    const pi: 3.14159,
    eulers: 2.718,
    g:9.81,  
    force: function(mass) { return this.g*mass;}   
}


console.log(kait.eyeColor)
console.log(person.fullName())
console.log(variables1.force(32))

kait.age = 22

person.firstName = "ABCD"

variables1.pi = 23
console.log(kait.age)
console.log(person.firstName)
console.log(variables1.pi)

let test1= 22
var test2 = 32
const test3 = 3.14

console.log(test1)
console.log(test2)
console.log(test3)

test1 = 34
test2= 399
test3 = 1234

console.log(test1)
console.log(test2)
console.log(test3)
