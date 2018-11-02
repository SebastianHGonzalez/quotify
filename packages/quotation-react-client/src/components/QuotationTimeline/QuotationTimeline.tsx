import * as React from "react";

import { List, ListItem } from "@material-ui/core";
import { Currency, Quotation } from "@sebastianhgonzalez/quotation-service";
import { IQuotationsClient } from "src/api";
import { QuotationCard, QuotationErrorCard } from "../QuotationCard";

interface IQuotationTimelineProps extends React.Props<any> {
  quotationClient: IQuotationsClient;
  maxQuotations?: number;
  autoFetchInterval?: number;
  currency: Currency;
}

interface IQuotationTimelineState {
  autoFetchInterval: number;
  error: any;
  quotations: Quotation[];
}

export class QuotationTimeline extends React.Component<
  IQuotationTimelineProps,
  IQuotationTimelineState
> {
  constructor(props: IQuotationTimelineProps) {
    super(props);

    this.state = {
      autoFetchInterval: props.autoFetchInterval || 0,
      error: null,
      quotations: []
    };
  }

  public componentDidMount() {
    this.autoFetchQuotations();
  }

  public autoFetchQuotations() {
    this.fetchQuotations();
    if (this.state.autoFetchInterval) {
      setTimeout(
        () => this.autoFetchQuotations(),
        this.state.autoFetchInterval
      );
    }
  }

  public componentWillUnmount() {
    this.setState({ autoFetchInterval: 0 });
  }

  public showError(error: any) {
    this.setState({error, autoFetchInterval: 0})
  }

  public fetchQuotations() {
    const currency = this.props.currency;
    this.props.quotationClient
      .getQuotation(currency)
      .then((quotation: Quotation) => {
        if (quotation) {
          this.addQuotation(quotation);
        }
      })
      .catch(err => {
        this.showError(err);
      });
  }

  public addQuotation(quotation: Quotation) {
    const quotations: Quotation[] = [quotation, ...this.state.quotations];
          this.setState({
            quotations
          });
  }

  public render() {
    return (
      <List>
        {this.state.error && (
        <ListItem>
          <QuotationErrorCard currency={this.props.currency} />
        </ListItem>
        )}
        {this.state.quotations.map((quotation, index) => (
          <ListItem key={index}>
            <QuotationCard quotation={quotation} />
          </ListItem>
        ))}
      </List>
    );
  }
}
