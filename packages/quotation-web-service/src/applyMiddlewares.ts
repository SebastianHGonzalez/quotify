import {
    USDARGQuotationServiceHandler,
notImplementedHandler,
} from './Handlers';

export function applyMiddlewares(expressApp: any) {

    expressApp.get('/Dolar', USDARGQuotationServiceHandler);
    expressApp.get('/Pesos', notImplementedHandler);
    expressApp.get('/Real', notImplementedHandler);
}
