import { AppProps } from "next/app";

import "@/styles/globals.css";
import { SWRConfig } from "swr";
import fetcher from "@/lib/fetcher";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SWRConfig value={{ fetcher: fetcher }}>
            <Component {...pageProps} />;
        </SWRConfig>
    );
}

export default MyApp;
