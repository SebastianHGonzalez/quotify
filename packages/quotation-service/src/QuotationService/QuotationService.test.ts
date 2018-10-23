import { DateTime } from 'luxon';

import { QuotationService, Quotation } from './';
import { USDARGQuotationStrategy } from './Strategies';

describe(QuotationService, () => {
    describe(USDARGQuotationStrategy, () => {

        let expectedQuotation;
        let strategy;
        let quotationService;
        let httpMock;
        let usdargQuotationServiceResponse;

        beforeEach(() => {
            usdargQuotationServiceResponse = { data: ["35.800", "37.800", "Actualizada al 23/10/2018 15:00"] };
            expectedQuotation = new Quotation(
                'USD',
                'ARG',
                35.8,
                37.8,
                DateTime.fromFormat(
                    usdargQuotationServiceResponse.data[2],
                    "'Actualizada al' dd/LL/yyyy HH:mm"
                ).toJSDate()
            );

            httpMock = {
                get: jest.fn().mockResolvedValue(usdargQuotationServiceResponse)
            };
            
            strategy = new USDARGQuotationStrategy(httpMock);
            quotationService = new QuotationService(strategy);
        });

        it('retrieves cotization for usd', () => {
            return quotationService.getQuotation().then((actualQuotation: Quotation) => {
                expect(actualQuotation).toEqual(expectedQuotation);
            });
        });
    });
});
