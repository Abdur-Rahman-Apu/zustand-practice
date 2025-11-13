import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type IFishStore = {
  count: { small: number; big: number };
  color: string;
  incrementSmallFish: () => void;
  incrementBigFish: () => void;
  reset: () => void;
};

export const useFishStore = create<IFishStore>()(
  immer(
    persist(
      (set) => {
        return {
          count: {
            small: 0,
            big: 0,
          },
          color: "red",
          reset: () => set({ count: { small: 0, big: 0 } }),
          incrementSmallFish: () =>
            set((state) => {
              state.count.small++;
            }),
          incrementBigFish: () =>
            set((state) => {
              state.count.big++;
            }),
        };
      },
      {
        name: "fishStore",
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({ count: state.count }),
      }
    )
  )
);
