import { create } from "zustand";

type IBearStore = {
  bears: {
    small: number;
    big: number;
  };

  incrementSmallBear: () => void;
  incrementBigBear: () => void;
  summary: () => string;
};

export const useBearStore = create<IBearStore>()((set, get) => ({
  bears: {
    small: 0,
    big: 0,
  },
  incrementBigBear: () =>
    set((state) => ({ bears: { ...state.bears, big: state.bears.big + 1 } })),
  incrementSmallBear: () =>
    set((state) => ({
      bears: { ...state.bears, small: state.bears.small + 1 },
    })),
  summary: () => {
    const smallBears = get().bears.small;
    const bigBears = get().bears.big;
    const total = smallBears + bigBears;
    return `There are total ${total} bears`;
  },
}));
