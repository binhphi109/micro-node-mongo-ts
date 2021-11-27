import { User, UserModel } from "../models/User";
import { CreateUserType } from "../types/users";

interface IUserRepository {
  create(user: CreateUserType): Promise<User>;
  findById(id: string): Promise<User | null>;
  findByUsername(id: string): Promise<User | null>;
}

class UserRepository implements IUserRepository {

  create(user: CreateUserType): Promise<User> {
    return UserModel.create(user);
  }

  findById(id: string): Promise<User | null> {
    return UserModel.findById(id).exec();
  }

  findByUsername(username: string): Promise<User | null> {
    return UserModel.findOne({
      username
    }).exec();
  }

}

export default new UserRepository();
