"use strict";
class Customer {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
let myCustomer = new Customer("KIM", "KI TAE");
myCustomer.firstName = "Hong";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
