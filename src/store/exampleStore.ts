import { create } from "zustand";

interface ExampleItem {
  name: string;
  quantity: number;
}

interface ExampleStore {
  items: ExampleItem[];
  addItem: (item: ExampleItem) => void;
}

export const useExampleStore = create<ExampleStore>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => {
      return { items: [...state.items, item] };
    }),
}));
