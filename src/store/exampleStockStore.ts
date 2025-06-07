import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

type OwnedStocksInterface = {
  stock_name: string;
  number_share: number;
};

interface StockStore {
  ownedStock: OwnedStocksInterface[];
  selectedStock: OwnedStocksInterface | null;
  setOwnedStock: (_params: StockStore["ownedStock"]) => void;
  setSelectedStock: (_params: StockStore["selectedStock"]) => void;
}

export interface TransactionModalStockStore {
  status: "IS_SELL" | "IS_BUY" | "CLOSED";
  setStatus: (_params: TransactionModalStockStore["status"]) => void;
}

export const useStockStore = create<StockStore>((set) => ({
  ownedStock: [],
  selectedStock: null,
  setOwnedStock: (ownedStock) => set((state) => ({ ...state, ownedStock })),
  setSelectedStock: (select) =>
    set((state) => {
      return { ...state, selectedStock: select };
    }),
}));

export const useTransactionModalStockStore = create<TransactionModalStockStore>(
  (set) => ({
    status: "CLOSED",
    setStatus: (param) => set((state) => ({ ...state, status: param })),
  }),
);

export const useTransactionModalStock = () => {
  const setStatus = useTransactionModalStockStore(
    useShallow((state) => state.setStatus),
  );
  const setSelectedStock = useStockStore(
    useShallow((state) => state.setSelectedStock),
  );
  const onBuyStock = (stock: OwnedStocksInterface) => {
    setStatus("IS_BUY");
    setSelectedStock(stock);
  };
  const onSellStock = (stock: OwnedStocksInterface) => {
    setStatus("IS_SELL");
    setSelectedStock(stock);
  };

  return {
    onBuyStock,
    onSellStock,
  };
};
