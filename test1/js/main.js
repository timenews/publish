"use strict";
var a = "hello ttt";
function f() {
    var a = "hello, test!";
    console.log(a);
    return a;
}
f();
console.log(a);
function warnUser() {
    console.log(new Date());
}
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "User" };
window.onload = function () {
    var User = document.getElementById('user');
    User.innerHTML = greeter(user);
    warnUser();
};
