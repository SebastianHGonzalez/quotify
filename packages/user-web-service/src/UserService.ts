import { User } from "./";

export class UserService {

    getAll() {
        return User.findAll();
    }
}
