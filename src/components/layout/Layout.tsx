import Footer from "@/components/Footer";
import Header from "@/components/layout/Header";
import * as React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className="layout py-8">{children}</main>
            <Footer />
        </>
    );
}
