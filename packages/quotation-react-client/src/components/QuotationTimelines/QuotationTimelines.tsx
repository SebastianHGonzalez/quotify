import * as React from "react";

import { Grid, GridList, withStyles } from "@material-ui/core";
import { Currency } from "@sebastianhgonzalez/quotation-service";
import { QuotationClient } from "src/api";
import { IQuotations } from "src/api/QuotationClient";
import { QuotationTimeline } from "src/components/QuotationTimeline";

interface IQuotationTimelinesProps extends React.Props<any> {
  currencies: Currency[];
}

interface IQuotationTimelinesState {
  quotations: IQuotations;
}

class UnStyledQuotationTimelines extends React.Component<
  IQuotationTimelinesProps,
  IQuotationTimelinesState
> {
  public quotationClient: QuotationClient;

  constructor(props: IQuotationTimelinesProps) {
    super(props);

    this.state = {
      quotations: {}
    };
  }

  public componentDidMount() {
    this.quotationClient = new QuotationClient();
    this.quotationClient
      .getQuotations(this.props.currencies)
      .then((quotations: IQuotations) => this.setState({ quotations }));
  }

  public render() {
    return (
      <GridList className={(this.props as any).classes.gridList}>
        {Object.keys(this.state.quotations).map(currency => (
          <Grid item={true} key={currency}>
            <QuotationTimeline
              currency={currency}
              quotations={this.state.quotations[currency]}
            />
          </Grid>
        ))}
      </GridList>
    );
  }
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
