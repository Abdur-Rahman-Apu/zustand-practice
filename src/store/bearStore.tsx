import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type IBearStore = {
  bears: {
    small: number;
    big: number;
  };

  incrementSmallBear: () => void;
  incrementBigBear: () => void;
  summary: () => string;
};

export const useBearStore = create<IBearStore>()(
  immer((set, get) => ({
    bears: {
      small: 0,
      big: 0,
    },
    incrementBigBear: () =>
      set((state) => {
        state.bears.big++;
      }),
    incrementSmallBear: () =>
      set((state) => {
        state.bears.small++;
      }),
    summary: () => {
      const smallBears = get().bears.small;
      const bigBears = get().bears.big;
      const total = smallBears + bigBears;
      return `There are total ${total} bears`;
    },
  }))
);
