import { Currency, Quotation } from '@sebastianhgonzalez/quotation-service';

export type IQuotations = {
  [currency in Currency]?: Quotation;
}

export interface IQuotationsClient {
  getQuotations(currencies: Currency[]): Promise<IQuotations>;
}
