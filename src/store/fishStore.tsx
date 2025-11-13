import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type IFishStore = {
  count: { small: number; big: number };
  incrementSmallFish: () => void;
  incrementBigFish: () => void;
};

export const useFishStore = create<IFishStore>()(
  immer(
    devtools(
      (set) => {
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
      },
      {
        enabled: true,
        name: "fish Store",
      }
    )
  )
);
