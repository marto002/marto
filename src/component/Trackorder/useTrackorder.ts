import { create } from "zustand";

interface ParcelInfo {
  from: string;
  to: string;
  weight: number;
  length: number;
  width: number;
  height: number;
  isResidential: boolean;
}

interface QuoteState {
  data: ParcelInfo | null;
  setData: (form: ParcelInfo) => void;
}

export const useQuoteStore = create<QuoteState>((set) => ({
  data: null,
  setData: (form) => set({ data: form }),
}));
