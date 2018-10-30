import * as React from "react";

import { Card, CardContent, CardHeader } from "@material-ui/core";
import { Quotation } from "@sebastianhgonzalez/quotation-service";

interface IQuotationCardProps extends React.Props<any> {
  quotation: Quotation;
}

export function QuotationCard(props: IQuotationCardProps) {
  return (
    <Card>
      <CardHeader>QuotationCard</CardHeader>
      <CardContent>
        target currency: {props.quotation.targetCurrency}
        base currency: {props.quotation.baseCurrency}
        buyer: {props.quotation.buyer}
        seller: {props.quotation.seller}
        updated at: {props.quotation.updatedAt.toLocaleString()}
      </CardContent>
    </Card>
  );
}
