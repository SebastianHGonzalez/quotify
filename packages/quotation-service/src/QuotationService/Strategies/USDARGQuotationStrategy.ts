import { DateTime } from "luxon";

import { IQuotationStrategy } from "./IQuotationStrategy";
import { Quotation } from "../Quotation";


interface IResponse {
    data: [string, string, string];
}

interface IHttpClient {
    get: (path: string) => Promise<IResponse>;
}

export class USDARGQuotationStrategy implements IQuotationStrategy {

    constructor(private http: IHttpClient) { }

    public getQuotation() {
        return this.http.get('/Principal/Dolar')
            .then(response => response.data)
            .then(quotationData =>
                new Quotation(
                    'USD',
                    'ARG',
                    this.getBuyerValue(quotationData),
                    this.getSellerValue(quotationData),
                    this.getUpdatedAtDate(quotationData),
                )
            );
        ;
    }

    private getBuyerValue(quotationData: IResponse['data']) {
        return Number.parseFloat(quotationData[0]);
    }

    private getSellerValue(quotationData: IResponse['data']) {
        return Number.parseFloat(quotationData[1]);
    }

    private getUpdatedAtDate(quotationData: IResponse['data']) {
        return DateTime.fromFormat(
            quotationData[2],
            "'Actualizada al' dd/LL/yyyy HH:mm"
        ).toJSDate();
    }
}
