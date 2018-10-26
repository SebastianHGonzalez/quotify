export function USDARGQuotationServiceHandler(quotationService: any) {
    return function (req: any, res: any) {
        quotationService.getQuotation().then((quotation: any) => res.json(quotation));
    };
}
