export type Currency = "USD" | "BRL" | "ARS";

interface ICurrencies {
    [x: string]: Currency;
}

export const Currencies: ICurrencies = {
    ARS: "ARS",
    BRL: "BRL",
    USD: "USD",
};
