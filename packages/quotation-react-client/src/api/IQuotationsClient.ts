import { Currency, Quotation } from '@sebastianhgonzalez/quotation-service';

export interface IQuotationsClient {
  getQuotation(currencies: Currency): Promise<Quotation>;
}
