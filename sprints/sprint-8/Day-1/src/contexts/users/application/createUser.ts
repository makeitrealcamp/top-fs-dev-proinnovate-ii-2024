import { User, UserInput } from '../entity/user';
import { UserRepository } from '../entity/user.repository';
import bcrypt from 'bcrypt';

export const createUser = async (
  user: UserInput,
  userRepository: UserRepository,
): Promise<User> => {
  // 1. verify if name and email are provided
  // 2. create a new user (object) with the provided name and email
  // 3. save the new user in the database

  const { password } = user;
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await userRepository.createUser({
    ...user,
    password: hashedPassword,
  });
  return newUser;
};
