import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useDetailsStore = create(
  devtools((set) => ({
    authDetails: {},
    setAuthDetails: (data) => set({ authDetails: data }),
  }))
);
