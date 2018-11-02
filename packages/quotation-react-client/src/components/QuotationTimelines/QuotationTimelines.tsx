import * as React from "react";

import { Grid, GridList, withStyles } from "@material-ui/core";
import { Currency } from "@sebastianhgonzalez/quotation-service";
import { IQuotationsClient } from "src/api";
import { QuotationTimeline } from "src/components/QuotationTimeline";

interface IQuotationTimelinesProps extends React.Props<any> {
  quotationClient: IQuotationsClient;
  maxQuotations?: number;
  autoFetchInterval?: number;
  currencies: Currency[];
}

function UnStyledQuotationTimelines(props: IQuotationTimelinesProps)
{
    return (
      <GridList className={(props as any).classes.gridList}>
        {props.currencies.map(currency => (
          <Grid item={true} key={currency}>
            <QuotationTimeline
              currency={currency}
              quotationClient={props.quotationClient}
              maxQuotations={props.maxQuotations}
              autoFetchInterval={props.autoFetchInterval}
            />
          </Grid>
        ))}
      </GridList>
    );
  }

const styles: any = (theme: any) => ({
  gridList: {
    flexWrap: "nowrap",
    height: "100%",
    transform: "translateZ(0)"
  }
});

export const QuotationTimelines = withStyles(styles)(
  UnStyledQuotationTimelines
);
