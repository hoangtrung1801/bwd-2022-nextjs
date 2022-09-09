import NextImage from "@/components/NextImage";
import Spinner from "@/components/Spinner";
import clsxm from "@/lib/clsxm";
import useScrollBlock from "@/lib/hooks/useScrollBlock";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";

const screenLoadingVariants: Variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.1,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.1,
        },
    },
};

export default function Loading() {
    const router = useRouter();
    const [blockScroll, allowScroll] = useScrollBlock();

    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const handleStart = (url) => {
            url !== router.asPath && setLoading(true);
            blockScroll();
        };
        const handleComplete = (url) => {
            url === router.asPath &&
                setTimeout(() => {
                    setLoading(false);
                    allowScroll();
                }, 500);
        };

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);

        return () => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleComplete);
            router.events.off("routeChangeError", handleComplete);
        };
    }, [allowScroll, blockScroll, router.asPath, router.events]);

    return (
        loading && (
            <motion.div
                // variants={screenLoadingVariants}
                // initial="initial"
                // animate="animate"
                // exit="exit"
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className={clsxm(
                    "absolute inset-0 bg-white",
                    loading ? "z-[100]" : "z-[-1]"
                )}
            >
                <div className="flex h-full w-full items-center">
                    <div className="mx-auto max-w-sm">
                        <NextImage
                            src="/images/LAVIE-loading.png"
                            alt="Logo"
                            width={200}
                            height={200}
                        />
                        <Spinner />
                    </div>
                </div>
            </motion.div>
        )
    );
}
