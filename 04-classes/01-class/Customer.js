var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("KIM", "KI TAE");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
