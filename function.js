//opgave 1
function sum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

let tal = [1, 2, 3];
console.log(sum(tal));


//opgave 2

function maxOf(numbers) {
    return Math.max(...numbers);
}

const myNumbers = [10, 5, 8, 12, 3];
const max = maxOf(myNumbers);
console.log(max);


//opgave 3


function countVowels(str) {
    let count = 0;

    let array = str.toLowerCase().split("");

    let vowels = ["a", "e", "i", "o", "u", "y", "æ", "ø", "å"];

    for (let i = 0; i < array.length; i++) {
        if (vowels.includes(array[i])) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Åge bøjede syv fine rør ud."));