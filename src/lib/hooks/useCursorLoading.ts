import useCursorLoadingStore from "@/lib/stores/useCursorLoadingStore";

const useCursorLoading = () => {
    const setShow = useCursorLoadingStore((state) => state.setShow);

    const setCursorLoadingShow = () => setShow(true);
    const setCursorLoadingOff = () => setShow(false);

    return {
        setCursorLoadingShow,
        setCursorLoadingOff,
    };
};

export default useCursorLoading;
