import create from "zustand";

export interface ModalStoreState {
    isOpen: boolean;
    title: string;
    body: string;
    setIsOpen: (check: boolean) => void;
    setContent: (title: string, body: string) => void;
}

const useModalStore = create<ModalStoreState>((set, get) => ({
    title: "",
    body: "",
    isOpen: false,
    setIsOpen: (check) => {
        set({ isOpen: check });
    },
    setContent: (title, body) => {
        set({
            title,
            body,
        });
    },
}));

export default useModalStore;
