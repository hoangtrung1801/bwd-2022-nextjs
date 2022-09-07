import { AppProps } from "next/app";
import "@/styles/globals.css";
import { SWRConfig } from "swr";
import fetcher from "@/lib/fetcher";
import React, { useEffect } from "react";
import Router from "next/router";
import useUserStore from "@/lib/stores/useUserStore";
import Modal from "@/components/Modal";
import useModalStore from "@/lib/stores/useModalStore";

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
