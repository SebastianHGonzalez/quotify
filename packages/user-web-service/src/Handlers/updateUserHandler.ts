import { UserService } from "../UserService";

export function updateUserHandler(userService: UserService) {
    return function (req: any, res: any, next: any) {
        userService.update(req.body)
            .then((user: any) =>
                req.json(user)
            )
            .catch(next);
    };
}
