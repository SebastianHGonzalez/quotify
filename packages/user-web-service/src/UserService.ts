import { models } from "./models";

const model = models.User;

export class UserService {

    getAll() {
        return model.findAll().map((result: any) => result.toObject());
    }

    get(id: string | number) {
        return model.findById(id).toObject();
    }

    update(user: any) {
        return model.findByIdAndUpdate(user.id, user);
    }

    delete(id: string | number) {
        return model.destroy({
            where: {
                id
            }
        });
    }

    create(user: any) {
        return model.create(user);
    }
}
