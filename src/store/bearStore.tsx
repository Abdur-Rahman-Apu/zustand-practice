import { create } from "zustand";

type IBearStore = {
  bears: {
    small: number;
    big: number;
  };

  incrementSmallBear: () => void;
  incrementBigBear: () => void;
};

export const useBearStore = create<IBearStore>()((set) => ({
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
}));
