import { UserService } from "../UserService";

export function deleteUserHandler(userService: UserService) {
    return function (req: any, res: any, next: any) {
        userService.delete(req.params.id)
            .then(() =>
                req.status(204).end()
            )
            .catch(next);
    };
}
