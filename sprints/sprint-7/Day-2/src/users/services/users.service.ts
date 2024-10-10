import { User } from "../entity/user";
import { prisma } from '../../database/database';

interface UserService {
    getUserById(id: number): User;
    getUsers(): User[];
    createUser(user: User): User;
    updateUser(user: User): User;
    deleteUser(id: number): void;
}


const userService: UserService = (dbClient) => {
    return {
        getUserById: (id: number) => {
            return dbClient.getUserById(id);
        },
        getUsers: () => {
            return dbClient.getUsers();
        },
        createUser: (user: User) => {
            return dbClient.createUser(user);
        },
        updateUser: (user: User) => {
            return dbClient.updateUser(user);
        },
        deleteUser: (id: number) => {
            return dbClient.deleteUser(id);
        },
    }
}

//  userService(prisma);