import Modal from "@/components/Modal";
import fetcher from "@/lib/fetcher";
import useModalStore from "@/lib/stores/useModalStore";
import useUserStore from "@/lib/stores/useUserStore";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { SWRConfig } from "swr";

function MyApp({ Component, pageProps }: AppProps) {
    const modalIsOpen = useModalStore((state) => state.isOpen);
    const setModalIsOpen = useModalStore((state) => state.setIsOpen);
    const modalTitle = useModalStore((state) => state.title);
    const modalBody = useModalStore((state) => state.body);

    // const user = useUserStore((state) => state.user);
    const fetchUser = useUserStore((state) => state.fetch);

    // Router.events.on("routeChangeStart", () => {
    //     if (user === null) fetchUser();
    // });

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    return (
        <SWRConfig value={{ fetcher: fetcher }}>
            <Modal
                title={modalTitle}
                isOpen={modalIsOpen}
                setIsOpen={setModalIsOpen}
            >
                {modalBody}
            </Modal>
            <Component {...pageProps} />;
        </SWRConfig>
    );
}

export default MyApp;
