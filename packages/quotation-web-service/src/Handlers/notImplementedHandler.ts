export function notImplementedHandler(req: Express.Request, res: Express.Response, next: any) {
    next("Not Implemented");
}
