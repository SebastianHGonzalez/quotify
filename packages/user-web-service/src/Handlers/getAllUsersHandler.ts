import { UserService } from "../UserService";

export function getAllUsersHandler(userService: UserService) {
    return function (req: any, res: any, next: any) {
        userService.getAll()
            .then((users: any[]) =>
                req.json(users)
            )
            .catch(next);
    };
}
