import * as React from "react";

import { Currencies } from '@sebastianhgonzalez/quotation-service';
import { QuotationTimelines } from "./components";

class App extends React.Component {
  public render() {
    return <QuotationTimelines currencies={[Currencies.USD, Currencies.BRL, Currencies.ARS]} />;
  }
}

export default App;
