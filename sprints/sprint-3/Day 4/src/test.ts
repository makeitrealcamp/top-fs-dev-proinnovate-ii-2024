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
// type alias
type newUser = {
  name: string;
  age: number;
  isActive?: boolean;
};

const newUsers: newUser[] = users.map((user) => ({ ...user }));

console.log({ newUsers });
