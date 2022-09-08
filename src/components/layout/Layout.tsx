import Footer from "@/components/Footer";
import Header from "@/components/layout/Header";
import clsxm from "@/lib/clsxm";
import * as React from "react";

type LayoutProps = {
    className?: string;
} & React.ComponentProps<"div">;

export default function Layout({ children, className }: LayoutProps) {
    return (
        <>
            <Header />
            <main className={clsxm("layout md:py-8", className)}>
                {children}
            </main>
            <Footer />
        </>
    );
}
