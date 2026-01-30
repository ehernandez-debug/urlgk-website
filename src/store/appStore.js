import { create } from 'zustand';

const useAppStore = create((set) => ({
  isMenuOpen: false,
  user: null,
  isAuthenticated: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  setUser: (user) => set({ user, isAuthenticated: !!user }),
}));

export default useAppStore;
