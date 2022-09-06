import { AppProps } from "next/app";

import "@/styles/globals.css";
import { SWRConfig } from "swr";
import fetcher from "@/lib/fetcher";
import React, { useEffect } from "react";
import Router from "next/router";
import useUserStore from "@/lib/stores/useUserStore";

function MyApp({ Component, pageProps }: AppProps) {
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
            <Component {...pageProps} />;
        </SWRConfig>
    );
}

export default MyApp;
