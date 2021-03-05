//Symbols

// const uniqueId = Symbol('hello');
// const uniqueId2 = Symbol('hello');

// console.log(uniqueId === uniqueId2);

const uniqueId = Symbol('Hello');

// const obj = {
//     [uniqueId]: 'Hello'
// };

// console.log(obj)

//wel know symbols

// Symbol.iterator
// Symbol.split
// Symbol.toStringTag

const obj = {
    [Symbol.iterator]() {

    }
}