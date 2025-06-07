export interface StockBasedOnTickerInterface {
  ticker: string;
  name: string;
  currency_name: string;
}

export interface ListStockBasedOnTickersInterfaceResponse {
  results: StockBasedOnTickerInterface[];
  next_url: string;
  count: number;
  request_id: string;
}

export interface DetailPriceStockBasedOnTickerAndDateResponseInterface {
  status: string;
  from: string;
  symbol: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  afterHours: number;
  preMarket: number;
}
