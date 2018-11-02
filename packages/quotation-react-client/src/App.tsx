import * as React from "react";

import { Currencies } from "@sebastianhgonzalez/quotation-service";
import { QuotationTimelines } from "./components";

import config from './config';


class App extends React.Component {
  public render() {
    return (
      <QuotationTimelines
        maxQuotations={config.maxQuotations}
        autoFetchInterval={config.autoFetchInterval}
        currencies={[Currencies.USD, Currencies.BRL, Currencies.ARS]}
      />
    );
  }
}

export default App;
