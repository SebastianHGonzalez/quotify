import { UserService } from "../UserService";

export function getUserByIdHandler(userService: UserService) {
    return function (req: any, res: any, next: any) {
        userService.get(req.params.id)
            .then((user: any) =>
                req.json(user)
            )
            .catch(next);
    };
}
