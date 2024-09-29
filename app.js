// 1 masala

let num = (5, 4, 3);

let result = ''

if (num < 5) {
    result = ['Quincy', 'Alexis', 'Katie']
    console.log(result)
} else if (num > 4) {
    result = ['Jason', 'Anna']
} else {
    result = ['Sam']
}

// 2 masala

const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

for (let i = 0; i < animals.length; i++) {
    animals.sort()
    console.log(animals[i])
}

// 3 masala

const arr2 = [1, 2, 3, 4, 5];

const newarr = arr2.map(function name(c) {
    return c ** 2;
})

console.log(newarr);

// 4 masala

// 5 masala

const text = 'George Raymond Richard Martin';

let a = text.charAt(0);
let b = text.charAt(7);
let c = text.charAt(15);
let d = text.charAt(23);

console.log(a, b, c, d);

// 6 masala

let numbers = [13, 56, 45, 67, 65];

let max = numbers[0];

let min = numbers[0]

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    } else if (numbers[i] < min) {
        min = numbers[i]
    }
}

console.log(max - min);

// 7 masala

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newarr3 = arr3.filter(function name(g) {
    return g % 2 == 0;
})

console.log(newarr3);

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newarr4 = arr3.filter(function name(g) {
    return g % 2 !== 0;
})

console.log(newarr4);

// 8 masala

const n = [19, 56, 85, -345, 65];

const newarray = n.reduce((item, index, arr) => {
    return item > 5
})

console.log(newarray)

// 9 masala

const products = ['id', 'name', 'price', 'rating', 'discount'];

products.sort()

console.log(products)

// 10 masala

// 11 masala

// 12 masala