import * as React from "react";

import { Card, CardContent } from "@material-ui/core";
import { Currency } from '@sebastianhgonzalez/quotation-service';


interface IQuotationErrorCardProps {
  currency: Currency;
}

export function QuotationErrorCard(props: IQuotationErrorCardProps) {
  return (
    <Card style={{width:"100%"}}>
      <CardContent>
        <p>Could not retrieve quotations for currency {props.currency}</p>
      </CardContent>
    </Card>
  );
}
