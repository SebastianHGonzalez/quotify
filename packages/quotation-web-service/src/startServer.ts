const cors = require("cors");
import Axios from "axios";
import express from "express";

import { QuotationService, USDARGQuotationStrategy } from "@sebastianhgonzalez/quotation-service";

import { config } from "./config";

import {
    USDARGQuotationServiceHandler,
    notImplementedHandler,
} from "./Handlers";

const http = Axios.create({ baseURL: config.quotationBaseUrl });
const quotationStrategy = new USDARGQuotationStrategy(http);
const quotationService = new QuotationService(quotationStrategy);

const app = express();

app.use(cors());
app.get("/Dolar/quote", USDARGQuotationServiceHandler(quotationService));
app.get("/Pesos/quote", notImplementedHandler);
app.get("/Real/quote", notImplementedHandler);

app.listen(config.port);
