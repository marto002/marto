import { create } from "zustand";

interface ParcelInfo {
  

  weight: number;
  length: number;
  width: number;
  height: number;
  Sendernumber:string;
  Receivername:string;
  Address:string;
  Sendername:string;
  Senderaddress:string;
  Content:string;
  Deliverydate: string;
}

interface QuoteState {
  data: ParcelInfo | null;
  setData: (form: ParcelInfo) => void;
}

export const useQuoteStore = create<QuoteState>((set) => ({
  data: null,
  setData: (form) => set({ data: form }),
}));
