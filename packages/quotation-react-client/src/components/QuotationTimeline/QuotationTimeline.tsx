import * as React from "react";

import { List, ListItem, Typography } from "@material-ui/core";
import { Quotation } from "@sebastianhgonzalez/quotation-service";
import { QuotationCard } from "../QuotationCard";

interface IQuotationTimelineProps extends React.Props<any> {
  currency: string;
  quotations: Quotation[];
}

export function QuotationTimeline(props: IQuotationTimelineProps) {
  return (
    <List>
      <Typography>Quotation Timeline {props.currency}</Typography>

      {props.quotations.map(quotation => (
        <ListItem>
          <QuotationCard quotation={quotation} />
        </ListItem>
      ))}
    </List>
  );
}
