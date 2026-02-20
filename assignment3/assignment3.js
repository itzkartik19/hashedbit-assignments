// Q1
const states = [
    "Andhra Pradesh",
    "Bihar",
    "Odisha",
    "Uttar Pradesh",
    "Rajasthan",
    "Assam",
    "Karnataka",
    "Maharashtra"
];

const filteredStates = states.filter(state => {
    let firstLetter = state[0].toLowerCase();
    return !['a', 'e', 'i', 'o', 'u'].includes(firstLetter);
});

console.log("Q1 Output:", filteredStates);
// Q2
let str = 'I love my India';

let reversedWords = str.split(" ").reverse().join(" ");

console.log("Q2 Output:", reversedWords);
// Q3
let string = 'INDIA';

let arr = string.split("");

arr.splice(3, 0, "O", "N", "E", "S");

let result = arr.join("");

console.log("Q3 Output:", result);
// Q4
let text = "JavaScript is a powerful language";

let vowels = 0;
let consonants = 0;

for (let char of text.toLowerCase()) {

    if (char >= 'a' && char <= 'z') {

        if ("aeiou".includes(char))
            vowels++;
        else
            consonants++;
    }
}

console.log("Q4 Vowels:", vowels);
console.log("Q4 Consonants:", consonants);
// Q5
function correctfn(sentence, wrong, correct) {

    return sentence.replace(wrong, correct);
}

let sentence = "I love Jav";

console.log("Q5 Output:", correctfn(sentence, "Jav", "Java"));
// Q6
let inputArr = [1,2,3,9,10,7,5,4,3];

let answer = inputArr.filter(num => num > 5);

console.log("Q6 Output:", answer);
// Q7
const students = [
{ name: "Ram", scores: [80, 70, 60] },
{ name: "Mohan", scores: [80, 70, 90] },
{ name: "Sai", scores: [60, 70, 80] },
{ name: "Hemang", scores: [90, 90, 80, 80] }
];

const averages = students.map(student => {

    let total = student.scores.reduce((sum, score) => sum + score, 0);

    let avg = total / student.scores.length;

    return {
        name: student.name,
        average: avg
    };
});

console.log("Q7 Output:", averages);
// Q8
function repeatedSum(num) {

    while (num > 9) {

        num = num.toString()
                 .split("")
                 .reduce((sum, digit) => sum + Number(digit), 0);
    }

    return num;
}

console.log("Q8 Output:", repeatedSum(456));
// Q9
function countWords(paragraph) {

    return paragraph.trim().split(/\s+/).length;
}

let paragraph = "JavaScript is easy and powerful language";

console.log("Q9 Output:", countWords(paragraph));
// Q10
function reverseString(str) {

    return str.split("").reverse().join("");
}

console.log("Q10 Output:", reverseString("Hello"));
// Q11
const data = {

    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },

    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },

    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};

let output = {};

for (let student in data) {

    let marks = Object.values(data[student]);

    let total = marks.reduce((sum, mark) => sum + mark, 0);

    let avg = Math.floor(total / marks.length);

    output[student] = { average: avg };
}

console.log("Q11 Output:", output);
