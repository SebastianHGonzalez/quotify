import { models } from "./models";

const User = models.User;

export class UserService {

    getAll() {
        return User.findAll();
    }
}
