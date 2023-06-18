import { create } from "zustand";

interface UserStoreProps {
  isAnimationOn: boolean;
  toggleAnimation: () => void;
}

export const useStore = create<UserStoreProps>((set) => ({
  isAnimationOn: true,
  toggleAnimation: () =>
    set((state) => ({ ...state, isAnimationOn: !state.isAnimationOn })),
}));
