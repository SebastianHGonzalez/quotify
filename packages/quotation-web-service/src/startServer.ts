import * as express from 'express';

import { applyMiddlewares } from './applyMiddlewares';
import { config } from './config';


export function startServer({
    applyMidlewares,
    config,
    express,
}: any) {
    const app = express();

    applyMidlewares(app);

    app.listen(config.port);
}

startServer({
    express,
    applyMiddlewares,
    config,
});
