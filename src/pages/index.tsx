import CarouselBanner from "@/components/CarouselBanner";
import Layout from "@/components/layout/Layout";

export default function HomePage() {
    return (
        <Layout>
            <main>
                {/* <section className="bg-white"></section> */}
                <div className="w-full">
                    <CarouselBanner />
                </div>
            </main>
        </Layout>
    );
}
