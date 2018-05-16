'use strict';

function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function () {
    console.log("The phone brand is " + this.brand + " , color is " + this.color + " and the price is " + this.price + ".");
};

var iphone6s = new Phone("Apple", 2250, "silver");
var SamsungGalaxyS6 = new Phone("Samsung", 1000, "grey");
var OnePlusOne = new Phone("NieWiem", 1500, "white");

iphone6s.printInfo();





