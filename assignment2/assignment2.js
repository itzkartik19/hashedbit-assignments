console.log("File is running");

// Question 1: Display even numbers from 1 to 100

console.log("Even numbers from 1 to 100:");

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// Question 2: Calculator function using switch

function calculate(num1, num2, operator) {

    let result;

    switch(operator) {

        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            if (num2 !== 0)
                result = num1 / num2;
            else
                result = "Division by zero not allowed";
            break;

        default:
            result = "Invalid operator";
    }

    return result;
}

// Example
console.log("Addition:", calculate(10, 5, "+"));
console.log("Subtraction:", calculate(10, 5, "-"));
console.log("Multiplication:", calculate(10, 5, "*"));
console.log("Division:", calculate(10, 5, "/"));
// Question 3: Find tax based on salary

function findTax(salary) {

    let tax = 0;

    switch(true) {

        case (salary > 0 && salary <= 500000):
            tax = salary * 0;
            break;

        case (salary > 500000 && salary <= 1000000):
            tax = salary * 0.10;
            break;

        case (salary > 1000000 && salary <= 1500000):
            tax = salary * 0.20;
            break;

        case (salary > 1500000):
            tax = salary * 0.30;
            break;

        default:
            tax = "Invalid salary";
    }

    return tax;
}

// Example
console.log("Tax:", findTax(750000));
console.log("Tax:", findTax(1200000));
// Question 4: Sum of products of corresponding digits

function sumOfDigitProducts(n1, n2) {

    let sum = 0;

    while (n1 > 0 || n2 > 0) {

        let digit1 = n1 % 10;
        let digit2 = n2 % 10;

        sum = sum + (digit1 * digit2);

        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
    }

    return sum;
}

// Example
console.log("Sum of digit products:", sumOfDigitProducts(6, 34));
console.log("Sum of digit products:", sumOfDigitProducts(123, 456));
