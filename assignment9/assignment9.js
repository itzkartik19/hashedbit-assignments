// Assignment 9 - JavaScript Functions, Arrays, Objects


// 1. Difference between let, const, var

function checkScope() {

    var a = "I am var";
    let b = "I am let";
    const c = "I am const";

    console.log(a);
    console.log(b);
    console.log(c);
}

checkScope();

/*
Difference:

var   → function scoped, can redeclare
let   → block scoped, cannot redeclare
const → block scoped, cannot redeclare or reassign
*/



// 2. fruits array and return second fruit

const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

function getSecondFruit() {
    return fruits[1];
}

console.log("Second fruit:", getSecondFruit());



// 3. push() and pop()

function modifyArray(arr) {

    arr.push("New Element");

    arr.pop();

    return arr;
}

console.log("Modified array:", modifyArray([1,2,3,4]));



// 4. map() square numbers

const numbers = [1,2,3,4,5];

function squareNumbers(arr) {

    return arr.map(function(num){
        return num * num;
    });
}

console.log("Squared numbers:", squareNumbers(numbers));



// 5. filter odd numbers

function getOddNumbers(arr){

    return arr.filter(function(num){
        return num % 2 !== 0;
    });
}

console.log("Odd numbers:", getOddNumbers([1,2,3,4,5,6,7,8]));



// 6. person object greeting

const person = {
    name: "Kartik",
    age: 22,
    occupation: "Student"
};

function greetPerson(p){

    console.log(
        "Hello, my name is " + p.name +
        ", I am " + p.age +
        " years old and I am a " + p.occupation
    );
}

greetPerson(person);



// 7. Rectangle area

function rectangleArea(obj){

    return obj.width * obj.height;
}

console.log(
    "Rectangle area:",
    rectangleArea({width: 10, height: 5})
);



// 8. Object keys

function getObjectKeys(obj){

    return Object.keys(obj);
}

console.log(
    "Object keys:",
    getObjectKeys(person)
);



// 9. Merge objects

function mergeObjects(obj1, obj2){

    return Object.assign({}, obj1, obj2);
}

const objA = {a:1, b:2};
const objB = {c:3, d:4};

console.log(
    "Merged object:",
    mergeObjects(objA, objB)
);



// 10. reduce() sum of numbers

function sumNumbers(arr){

    return arr.reduce(function(total, num){
        return total + num;
    }, 0);
}

console.log(
    "Sum of numbers:",
    sumNumbers([10,20,30,40])
);