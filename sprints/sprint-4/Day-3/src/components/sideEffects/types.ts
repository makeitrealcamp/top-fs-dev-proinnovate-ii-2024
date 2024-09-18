function proccesValue(value: unknown) {
  if (typeof value === 'number') {
    return value.toFixed(2);
  }
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
}

function proccesValue2(value: number | string | boolean) {
  if (typeof value === 'number') {
    return value.toFixed(2);
  }
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  if (typeof value === 'boolean') {
    return !value;
  }
}

function simpleGeneric<inputType>(value: inputType): inputType {
  return value;
}

simpleGeneric<string>('hello');
simpleGeneric<number>(1);
simpleGeneric<boolean>(true);

interface IGeneric<inputType, secondInputType> {
  value: inputType;
  key: secondInputType;
}
user -> {name: 'name', age: 1} 
 
interface IUser{
    name: string;
    age: number;
    sayHi: () => void;
}

interface Roles{
    type: string;
    level: number;
}

interface IAdmin extends IUser{
    admin?: boolean;
}

class User implements IAdmin {
    static admin= true;
    static type= 'admin';
    static level=4;
    constructor(public name: string, public age: number) {


    }
    sayHi(){
        console.log('hi');
    }
}



const pair: IGeneric<string, number> = {
  value: '1',
  key: 3,
};

console.log(pair);


function getProperty<objectType, keyType extends keyof objectType>(object:objectType, key:keyType) {
  return object[key];
}

const user = {
  name: 'name',
  age: 1,
};
user['name']
const name = getProperty(user, 'name');
console.log(name);

const genercis2 = <T>(b:T):T => {
    return b;
}