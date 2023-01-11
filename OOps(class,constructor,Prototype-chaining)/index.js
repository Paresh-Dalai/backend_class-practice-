
// ========>>> Class <<<==========

// Object literal
let Xuv = {};
Xuv.brand = "Mahindra"
Xuv.colour = "Black"
Xuv["Variant"] = "Petrol"

console.log(Xuv.Variant)

// new Object
let Harrier = new Object();
Harrier.brand = "Tata"
Harrier.colour = "Red"

console.log(Harrier.colour)

function definePropsOfObject(obj){
    for (let props in obj){
        console.log(obj[props])
    }
}
definePropsOfObject(Harrier)


// Object.Create method we will see inside chrome

// constructor

function Car (brand,colour,variant) {
    this.brand = brand;
    this.colour = colour;
    this.Variant = variant;
}
Car.prototype.manufacturingYear = function(){
    console.log(2021)
}
let Innova = new Car("toyota","blue","petrol")
Innova.manufacturingYear()

// this Keyword

function suv (brand,colour,variant){
    this.brand = brand;
    this.colour = colour;
    this.variant = variant;
}
let compass = new suv("mahindra","blue","petrol");
suv.prototype.cardetails = function(){
    return (this.brand + "has" + this.variant)
}
console.log(compass.cardetails());

// class

class Bike {
    constructor(model,colour,brand){
        this.model = model;
        this.colour = colour;
        this.brand = brand;
    }
}
let splender = new Bike("top","black","hero");
console.log(splender.colour)

Bike.prototype.BikeDetails = function(){
      return ("i have a splender of " + this.colour +" & " + this.model + " model")
}
console.log(splender.BikeDetails())
