export type User = {
  id: string;
  name: string;
  password: string;
  email: string;
  age?: number | null;
  bio?: string | null;
};

export type UserInput = Pick<User, 'email' | 'password'>;

// Partial is a utility type that makes all properties of the object optional.
// Omit is a utility type that makes it possible to create a new type by omitting properties from another type.
// Pick is a utility type that makes it possible to create a new type by picking properties from another type.
