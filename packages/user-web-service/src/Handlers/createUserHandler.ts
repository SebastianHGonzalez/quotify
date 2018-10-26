import { UserService } from "../UserService";

export function createUserHandler(userService: UserService) {
    return function (req: any, res: any, next: any) {
        userService.create(req.body)
            .then((user: any) =>
                req.json(user)
            )
            .catch(next);
    };
}
