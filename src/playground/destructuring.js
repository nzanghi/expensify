//
// Object destructuring
//

// const person = {
//   name: 'Nick',
//   age: 23,
//   location: {
//     city: 'Basking Ridge',
//     temp: 29
//   }
// };
// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature}˚ in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

//
// Array Destructuring
//

const address = ['137 Union Mill Terrace', 'Mount Laurel', 'NJ', '08054'];
const [, city, state] = address;
console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [name, , medPrice] = item;

console.log(`A medium ${name} costs ${medPrice}`)
