import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createSelectors } from "../utils/utils";

type IFishStore = {
  count: { small: number; big: number };
  incrementSmallFish: () => void;
  incrementBigFish: () => void;
};

export const useFishStore = create<IFishStore>()(
  immer((set) => {
    return {
      count: {
        small: 0,
        big: 0,
      },
      incrementSmallFish: () =>
        set((state) => {
          state.count.small++;
        }),
      incrementBigFish: () =>
        set((state) => {
          state.count.big++;
        }),
    };
  })
);
