import CursorLoading from "@/components/CursorLoading";
import Loading from "@/components/Loading";
import Modal from "@/components/Modal";
import fetcher from "@/lib/fetcher";
import useModalStore from "@/lib/stores/useModalStore";
import useUserStore from "@/lib/stores/useUserStore";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import { useEffect } from "react";
import { SWRConfig } from "swr";
import colors from "tailwindcss/colors";

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const modalIsOpen = useModalStore((state) => state.isOpen);
    const setModalIsOpen = useModalStore((state) => state.setIsOpen);
    const modalTitle = useModalStore((state) => state.title);
    const modalBody = useModalStore((state) => state.body);

    // const user = useUserStore((state) => state.user);
    const fetchUser = useUserStore((state) => state.fetch);

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    return (
        <SWRConfig value={{ fetcher: fetcher }}>
            <NextNProgress
                color={colors.green[500]}
                options={{ showSpinner: false }}
                stopDelayMs={500}
            />
            <Loading />
            <CursorLoading />
            <Modal
                title={modalTitle}
                isOpen={modalIsOpen}
                setIsOpen={setModalIsOpen}
            >
                {modalBody}
            </Modal>
            <Component {...pageProps} />
        </SWRConfig>
    );
}

export default MyApp;
