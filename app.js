function resetForm(){
    document.getElementById("Email").value = "";
    document.getElementById("Password").value = "";
}

function validateForm(){
    let x = document.forms["myForm"]["Email"].value;
    let y = document.forms["myForm"]["Password"].value;
    if (x == ""){
        alert("Email field must be filled out to continue")
        return false
    }
    if (y == ""){
        alert("Password field must be filled out to continue");
        return false;
    }
}

const myBtn = document.getElementById("bgColor");

myBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = "Green";
});

//Object Literals

var Person = {firstName: "Karim", lastName: "Elagamy", Age: 22, location: "Washinton"};
console.log(Person);

//Function Constructor
function Guy(first = "default", last = "default", Age = 11, location = "the Default"){
    this.firstName = first;
    this.lastName = last;
    this.Age = Age;
    this.location = location;
}

const Karim = new Guy("Karim", "Elagamy", 22, "Washington");
console.log(Karim);
const Tom = new Guy();
console.log(Tom);

//Object.Create()

const newKarim = Object.create(Karim);
console.log(newKarim);
newKarim.firstName = "New First Name";
newKarim.lastName = "New Last Name";
newKarim.Age = Karim.Age;
newKarim.location = Karim.location;
console.log(newKarim);

//Classes
class Car {
    constructor(Make, Model){
        this.Make = Make;
        this.Model = Model;
    }
}

const newCar = new Car("BMW", "5 Series");
console.log(newCar);

//Inheritance
class Engine extends Car {
    constructor(Make, Model, Engine){
        super(Make, Model);
        this.Engine = Engine;
    }
}

const specificCar = new Engine("BMW", "5 Series", "V6");
console.log(specificCar);

//Arrays
let salaries = {
    John: 100,
    Amy: 300,
    Smith: 500
};

//Array Operations

console.log(salaries);

const salariesValues = [100, 300, 500];

console.log(salariesValues);

salariesValues[1] = 200;

console.log(salariesValues);

salariesValues.push(300);

console.log(salariesValues);

salariesValues.pop();

console.log(salariesValues);

salariesValues.shift();

console.log(salariesValues);

salariesValues.push(200, 300, 400, 500, 600, 700, 800);

console.log(salariesValues);

salariesValues.splice(4, 2);

console.log(salariesValues);

//remove specific value
function SpliceArrayByValue(val){
    for (var i = 0; i < salariesValues.length; i++){
        if (salariesValues[i] === val){
            salariesValues.splice(i, 1);
            i--;
        }
    }
}

//22 === "22" false
//22 == "22" true

SpliceArrayByValue(600);

console.log(salariesValues);

var currentDate = new Date();
console.log(currentDate);

//XMLHttpRequest
var oReq = new XMLHttpRequest();
oReq.addEventListener('load', reqListener);
oReq.open("POST", "https://jsonplaceholder.typicode.com/posts");
oReq.send("title=Example Post Request&body=Antra.com&userId=1");
function reqListener(){
    console.log(this.responseText);
}

//Fetch API
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

//.then is executed if the promise is successful, .catch is executed if the promise fails

//Critical Topics: XMLHTTPRequests, Fetch API, Callbacks, Closures, Callback Hell, and Promises