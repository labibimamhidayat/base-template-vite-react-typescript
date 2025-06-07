export interface ListStockBasedOnTickersQueryInterface {
  ticker?: string;
  type: "CS";
  market: "stocks";
  search?: string;
  active: true;
  limit: "1" | "10" | "30" | "50";
}

export interface DetailStockPriceParamsInterface {
  ticker: string;
  date: string;
}
