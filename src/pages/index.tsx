import CarouselBanner from "@/components/CarouselBanner";
import Layout from "@/components/layout/Layout";
import ButtonLink from "@/components/links/ButtonLink";
import ProductList from "@/components/ProductsList";
import useProducts from "@/lib/hooks/useProducts";
import { motion } from "framer-motion";

const HomePage = () => {
    const dataBanner = [
        {
            id: 1,
            title: "Thay đổi thế giới",
            BannerPicture:
                "https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80",
            description:
                "Chúng ta cần bắt đầu thay đổi thế giới ngay hôm nay, không phải ngày mai. Chúng ta cần phải hành động và ngừng phàn nàn về những điều tồi tệ hiện tại để chúng ta có cơ hội làm cho chúng tốt hơn. Hãy cùng chung tay với chúng tôi?",
        },
        {
            id: 2,
            title: "Tái sử dụng, vì tiềm năng của rác là vô hạn",
            BannerPicture:
                "https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80",
            description:
                "Bạn đang cố gắng trở nên xanh và thân thiện với môi trường, nhưng không biết làm thế nào bạn có thể tiết kiệm tài nguyên của môi trường? Hãy tái sử dụng rác thải có thể tái chế.",
        },
        {
            id: 2,
            title: "Tái sử dụng, vì tiềm năng của rác là vô hạn",
            BannerPicture:
                "https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80",
            description:
                "Bạn đang cố gắng trở nên xanh và thân thiện với môi trường, nhưng không biết làm thế nào bạn có thể tiết kiệm tài nguyên của môi trường? Hãy tái sử dụng rác thải có thể tái chế.",
        },
        {
            id: 2,
            title: "Tái sử dụng, vì tiềm năng của rác là vô hạn",
            BannerPicture:
                "https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80",
            description:
                "Bạn đang cố gắng trở nên xanh và thân thiện với môi trường, nhưng không biết làm thế nào bạn có thể tiết kiệm tài nguyên của môi trường? Hãy tái sử dụng rác thải có thể tái chế.",
        },
    ];

    const { products } = useProducts();

    return (
        <Layout className="py-0">
            <main className="space-y-2">
                <div>
                    <CarouselBanner products={dataBanner} />
                </div>
                <div>
                    {/* <CarouselProducts products={products} /> */}
                    <ProductList products={products} title="Phổ biến" />
                </div>
                <div>
                    <ProductList
                        products={products}
                        title="Nổi bật"
                        className="bg-[url(https://bwd2022.vercel.app/assets/donate-1.jpg)] bg-cover bg-fixed bg-center bg-no-repeat text-green-400"
                    />
                    {/* <FeaturedProducts products={products} /> */}
                </div>
                <div>
                    <ProductList products={products} title="Đặc biệt" />
                    {/* <CommonProducts products={products} /> */}
                </div>
                <div>
                    <div className="h-80 w-full bg-[url(https://bwd2022.vercel.app/assets/bg6.jpg)] bg-cover bg-fixed bg-center bg-no-repeat text-white">
                        <div className="flex h-full w-full flex-row items-center justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 200, x: 0 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    type: "spring",
                                    duration: 1.5,
                                    bounce: 0.3,
                                }}
                                className="text-center"
                            >
                                <motion.p
                                    initial={{ opacity: 0, y: 200, x: 0 }}
                                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        type: "spring",
                                        duration: 1.5,
                                        bounce: 0.3,
                                    }}
                                    className="mb-10 text-5xl font-bold"
                                >
                                    Cùng chung tay quyên góp bảo vệ môi trường
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 200, x: 0 }}
                                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        type: "spring",
                                        duration: 1.5,
                                        bounce: 0.3,
                                    }}
                                    className="mx-auto w-3/4 text-lg"
                                >
                                    Giúp đỡ lẫn nhau thực hiện các nhu cầu cơ
                                    bản của sự sống còn của con người, đấu tranh
                                    bảo tồn các nguồn tài nguyên thiên nhiên và
                                    chung tay.
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 200, x: 0 }}
                                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        type: "spring",
                                        duration: 1.5,
                                        bounce: 0.3,
                                    }}
                                >
                                    <ButtonLink href="#">Quyên góp</ButtonLink>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

// export const getServerSideProps: GetServerSideProps = async () => {
//     const API = "/api/products";
//     const repoInfo = await fetcher(API);

//     return {
//         props: {},
//         fallback: {
//             ["/api/products"]: repoInfo,
//         },
//     };
// };

export default HomePage;
