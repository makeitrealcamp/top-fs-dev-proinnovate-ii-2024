import { JWT_SECRET } from '../../../config/config';
import { ApplicationError } from '../../../shared/errors/ApplicationError';
import { errorStatus, errorType } from '../../../utils/constants';
import { UserInput } from '../entity/user';
import { UserRepository } from '../entity/user.repository';
import { getUserByEmail } from './getUserByEmail';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const loginUser = async (
  user: UserInput,
  repository: UserRepository,
) => {
  const { email, password } = user;

  const userExists = await getUserByEmail(email, repository);

  if (!userExists) {
    throw new ApplicationError(
      'User or password incorrect',
      errorType.UNAUTHORIZED,
      errorStatus.UNAUTHORIZED,
    );
  }

  const validatePassword = await bcrypt.compare(password, userExists.password);

  if (!validatePassword) {
    throw new ApplicationError(
      'User or password incorrect',
      errorType.UNAUTHORIZED,
      errorStatus.UNAUTHORIZED,
    );
  }
  const token = jwt.sign(
    { id: userExists.id, email: userExists.email, roles: ['user', 'editor'] },
    `${JWT_SECRET}`,
    {
      expiresIn: 3600 * 60,
    },
  );

  return token;
};
