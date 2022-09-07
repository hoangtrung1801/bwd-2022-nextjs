import useModalStore from "@/lib/stores/useModalStore";

const useModal = () => {
    const setModalIsOpen = useModalStore((state) => state.setIsOpen);
    const setModalContent = useModalStore((state) => state.setContent);

    const showModal = (title: string, body: string) => {
        setModalContent(title, body);
        setModalIsOpen(true);
    };

    return {
        showModal,
    };
};

export default useModal;
