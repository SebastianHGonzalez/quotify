import express from "express";

import { config } from "./config";

import {
    USDARGQuotationServiceHandler,
    notImplementedHandler,
} from "./Handlers";


const app = express();

app.get("/Dolar", USDARGQuotationServiceHandler);
app.get("/Pesos", notImplementedHandler);
app.get("/Real", notImplementedHandler);

app.listen(config.port);
