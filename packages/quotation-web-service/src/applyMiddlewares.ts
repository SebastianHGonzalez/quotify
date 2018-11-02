const cors = require("cors");
import {
    USDARGQuotationServiceHandler,
    notImplementedHandler,
} from "./Handlers";

export function applyMiddlewares(expressApp: any) {

    expressApp.use(cors());
    expressApp.get("/Dolar/quote", USDARGQuotationServiceHandler);
    expressApp.get("/Pesos/quote", notImplementedHandler);
    expressApp.get("/Real/quote", notImplementedHandler);
}

export default applyMiddlewares;
