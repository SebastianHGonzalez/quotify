export type Currency = "USD" | "BRL" | "ARS";

type ICurrencies = {
    [currency in Currency]: Currency;
};

export const Currencies: ICurrencies = {
    ARS: "ARS",
    BRL: "BRL",
    USD: "USD",
};
