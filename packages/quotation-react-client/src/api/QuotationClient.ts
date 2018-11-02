import { Currency } from "@sebastianhgonzalez/quotation-service";
import { IQuotations, IQuotationsClient } from "./IQuotationsClient";

type ICurrencyEndpoints = { [currency in Currency]: string };

const endpoints: ICurrencyEndpoints = {
  ARS: "/Pesos/quote",
  BRL: "/Real/quote",
  USD: "/Dolar/quote"
};

export class QuotationClient implements IQuotationsClient {
  constructor(public http: any) {}

  public getQuotations(currencies: Currency[]): Promise<IQuotations> {
    return Promise.all(currencies.map(currency => this.getQuotation(currency))).then(quotations =>
      quotations.reduce((prev, curr) => ({ ...prev, ...curr }), {})
    );
  }

  public getQuotation(currency: Currency): Promise<IQuotations> {
    return this.http
      .get(this.currencyEndpoint(currency))
      .then(({ data }: { data: IQuotations }) => data)
      .catch();
  }

  public currencyEndpoint(currency: Currency) {
    return endpoints[currency];
  }
}
