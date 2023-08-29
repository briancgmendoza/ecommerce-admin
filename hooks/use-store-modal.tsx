import { create } from "zustand";
import { IModalStore } from "./interface";

export const useStoreModal = create<IModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));