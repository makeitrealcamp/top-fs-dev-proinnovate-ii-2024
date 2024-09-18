"use strict";
const users = [
    {
        name: 'john',
        age: 20,
        isActive: false,
    },
    {
        name: 'pepe',
        age: 10,
    },
];
const newUsers = users.map((user) => (Object.assign({}, user)));
console.log({ newUsers });
