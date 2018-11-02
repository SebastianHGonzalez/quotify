import * as React from "react";

import { Card, CardContent } from "@material-ui/core";
import { Quotation } from "@sebastianhgonzalez/quotation-service";

interface IQuotationCardProps extends React.Props<any> {
  quotation: Quotation;
}

export function QuotationCard(props: IQuotationCardProps) {
  return (
    <Card style={{width:"100%"}}>
      <CardContent>
        <b>Target currency: </b>{props.quotation.targetCurrency} <br/>
        <b>Base currency: </b>{props.quotation.baseCurrency} <br/>
        <b>Buyer: </b>{props.quotation.buyer} <br/>
        <b>Seller: </b>{props.quotation.seller} <br/>
        <b>Updated at: </b>{props.quotation.updatedAt && props.quotation.updatedAt.toLocaleString()} <br/>
      </CardContent>
    </Card>
  );
}
