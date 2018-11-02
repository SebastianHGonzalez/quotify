import * as React from "react";

import { List, ListItem } from "@material-ui/core";
import { Quotation } from "@sebastianhgonzalez/quotation-service";
import { QuotationCard } from "../QuotationCard";

interface IQuotationTimelineProps extends React.Props<any> {
  currency: string;
  quotations: Quotation[];
}

export function QuotationTimeline(props: IQuotationTimelineProps) {
  return (
    <List>
      {props.quotations.map((quotation, index) => (
        <ListItem key={index}>
          <QuotationCard quotation={quotation} />
        </ListItem>
      ))}
    </List>
  );
}
