import create from "zustand";

export interface CursorLoadingState {
    show: boolean;
    setShow: (show: boolean) => void;
}

const useCursorLoadingStore = create<CursorLoadingState>((set, get) => ({
    show: false,
    setShow: (show) => {
        set({ show });
    },
}));

export default useCursorLoadingStore;
