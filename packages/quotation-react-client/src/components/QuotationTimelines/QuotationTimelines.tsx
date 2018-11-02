import * as React from "react";

import { Grid, GridList, withStyles } from "@material-ui/core";
import { Currency } from "@sebastianhgonzalez/quotation-service";
import { IQuotations, IQuotationsClient } from "src/api";
import { QuotationTimeline } from "src/components/QuotationTimeline";

interface IQuotationTimelinesProps extends React.Props<any> {
  quotationClient: IQuotationsClient;
  maxQuotations?: number;
  autoFetchInterval?: number;
  currencies: Currency[];
}

interface IQuotationTimelinesState {
  quotations: IQuotations;
}

class UnStyledQuotationTimelines extends React.Component<
  IQuotationTimelinesProps,
  IQuotationTimelinesState
> {
  constructor(props: IQuotationTimelinesProps) {
    super(props);

    this.state = {
      quotations: {}
    };

    this.addQuotations = this.addQuotations.bind(this);
    this.fetchQuotations = this.fetchQuotations.bind(this);
    this.autoFetchQuotations = this.autoFetchQuotations.bind(this);
  }

  public componentDidMount() {
    this.autoFetchQuotations();
  }

  public autoFetchQuotations() {
    this.fetchQuotations();
    if (this.props.autoFetchInterval) {
      setTimeout(this.autoFetchQuotations, this.props.autoFetchInterval);
    }
  }

  public fetchQuotations() {
    this.props.quotationClient
      .getQuotations(this.props.currencies)
      .then(this.addQuotations);
  }

  public addQuotations(newQuotations: IQuotations) {
    const quotations = { ...this.state.quotations };

    Object.keys(newQuotations).forEach(currency => {
      quotations[currency] = [
        newQuotations[currency],
        ...(this.state.quotations[currency] || [])
      ].slice(0, this.props.maxQuotations);
    });

    this.setState({ quotations });
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
