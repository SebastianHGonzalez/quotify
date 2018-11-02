import axios from "axios";
import * as React from "react";

import config from "./config";

import { Currencies } from "@sebastianhgonzalez/quotation-service";
import { QuotationClient } from "./api";
import { QuotationTimelines } from "./components";


const baseURL = config.quotationServiceBaseURL;
const quotationClient = new QuotationClient(axios.create({ baseURL }));

class App extends React.Component {
  public render() {
    return (
      <QuotationTimelines
        quotationClient={quotationClient}
        maxQuotations={config.maxQuotations}
        autoFetchInterval={config.autoFetchInterval}
        currencies={[Currencies.USD, Currencies.BRL, Currencies.ARS]}
      />
    );
  }
}

export default App;
