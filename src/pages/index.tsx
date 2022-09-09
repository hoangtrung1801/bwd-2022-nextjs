import Button from "@/components/buttons/Button";
import CarouselBanner from "@/components/CarouselBanner";
import Layout from "@/components/layout/Layout";
import {
    BannerSkeleton,
    ProductListSkeleton,
    CommonProductSkeleton,
    FeaturedProductSkeleton,
} from "@/components/Skeletons";
import Link from "next/link";
import React, { useState } from "react";

import ProductList from "@/components/ProductsList";
import useProducts from "@/lib/hooks/useProducts";
import { motion } from "framer-motion";
import FeaturedProducts from "@/components/FeaturedProducts";
import { Router, useRouter } from "next/router";

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

    const router = useRouter();
    const { products, isLoading, error } = useProducts();

    // const [isLoading, setIsLoading] = useState(true);
    // React.useEffect(() => {
    //     const timeoutID = setTimeout(() => {
    //         setIsLoading(false);
    //     }, 5000);
    //     return () => clearTimeout(timeoutID);
    // }, []);

    React.useEffect(() => {
        if (error) router.reload();
    }, [error, router]);

    return (
        <Layout className="md:py-0">
            <main className="space-y-2">
                <div>
                    {isLoading ? (
                        <BannerSkeleton />
                    ) : (
                        <CarouselBanner products={dataBanner} />
                    )}
                </div>

                <div>
                    {isLoading ? (
                        <ProductListSkeleton />
                    ) : (
                        <ProductList products={products} title="Phổ biến" />
                    )}
                </div>

                <div>
                    {isLoading ? (
                        <CommonProductSkeleton />
                    ) : (
                        <ProductList
                            products={products}
                            title="Nổi bật"
                            className="bg-[url(https://bwd2022.vercel.app/assets/donate-1.jpg)] bg-cover bg-fixed bg-center bg-no-repeat text-green-400"
                        />
                    )}
                </div>

                <div>
                    {isLoading ? (
                        <CommonProductSkeleton />
                    ) : (
                        <ProductList products={products} title="Đặc biệt" />
                    )}
                </div>

                {isLoading ? (
                    <BannerSkeleton />
                ) : (
                    <div
                        className="h-full w-full bg-cover bg-fixed bg-center bg-no-repeat text-white"
                        style={{
                            backgroundImage: `url(https://bwd2022.vercel.app/assets/bg6.jpg)`,
                            height: "500px",
                        }}
                    >
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
                                    <Link href="/donate">
                                        <Button
                                            style={{
                                                backgroundImage:
                                                    "linear-gradient(to right, #232526 0%, #414345 51%, #232526 100%)",
                                                transition: "0.5s",
                                                backgroundSize: "200% auto",
                                            }}
                                            className="transition[0.5s] h-auto w-[200px] min-w-[200px] bg-black py-4 px-8 text-white hover:bg-right md:mt-10"
                                        >
                                            QUYÊN GÓP
                                        </Button>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                )}
            </main>
        </Layout>
    );
};

export default HomePage;
