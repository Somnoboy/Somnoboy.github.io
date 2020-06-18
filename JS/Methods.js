function showAlert(text) {
    alert(text);
}

function changeColor(ctrlID) {
    var lbl = document.getElementById(ctrlID);
    lbl.style.color = 'Green';
}

function add(ctrlID) {
    var lbl = document.getElementById(ctrlID);
    lbl.innerHTML = 5 + 6;
}

function documentWrite() {
    document.write(5 + 6); //document.write after HTML document is loaded will delete all existing HTML.
}

function windowAlert() {
   window.alert(5 + 6); //specifying window is not needed because the window object is the global scope object.
}

function consoleLog() {
    console.log(5 + 6);
}

function printPage() {
    window.print(); //I could not get this to work.
}

function add2() {
    var x, y, z;
    x = 5;
    y = 6;
    z = x + y;
    alert(z);
    //Can also be written x = 5; y = 6; z = x + y;
}

function array() {
    var cars = ["Saab", "Volvo", "BMW"];
}

function person() {
    var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
    alert(person.age + ' ' + person.eyeColor);
}

function typeOf(ctrlID) {
    var lbl = document.getElementById(ctrlID);
    alert(typeof lbl);
}

function printSum(x, y) {
    alert(getSum(x, y));
}
function getSum(x, y) {
    return x + y
}

function showCarInfo(ctrlID) {
    var lbl = document.getElementById(ctrlID);

    var myCar = car;
    myCar.type = 'Ford';
    myCar.model = 'F150';
    myCar.color = 'black';
    
    //lbl.innerHTML = "The car type is " + car.type // or lbl.innerHTML = "The car type is " + car['type']
    lbl.innerHTML = myCar.fullCarDescritption();
}

var car = {
    type: '',
    model: '',
    color: '',
    fullCarDescritption: function() {
        return ' Type: ' + car.type + ' Model: ' + car.model + ' Color: ' + car.color;
    }
};

function getArray(ctrlID) {
    var arCars = ["Saab", "Volvo", "BMW"];
    document.getElementById(ctrlID).innerHTML = arCars;
}
