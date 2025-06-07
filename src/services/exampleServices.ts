
import type {
  ListStockBasedOnTickersQueryInterface,
  DetailStockPriceParamsInterface,
} from "@/_types/request";
import type {
  ListStockBasedOnTickersInterfaceResponse,
  DetailPriceStockBasedOnTickerAndDateResponseInterface,
} from "@/_types/response";

import { apiFetch } from "@/lib/ofetch";

export const getListStockBasedOnTicker = (
  query: ListStockBasedOnTickersQueryInterface,
) =>
  apiFetch<ListStockBasedOnTickersInterfaceResponse>("/v3/reference/tickers", {
    query,
  });

export const getDetailStockPriceBasedOnTickerAndDate = (
  params: DetailStockPriceParamsInterface,
) =>
  apiFetch<DetailPriceStockBasedOnTickerAndDateResponseInterface>(
    `/v1/open-close/${params.ticker}/${params.date}`,
  );
