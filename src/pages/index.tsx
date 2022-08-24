import CarouselBanner from "@/components/CarouselBanner";
import CarouselProducts from "@/components/CarouselProducts";
import CommonProducts from "@/components/CommonProducts";
import FeaturedProducts from "@/components/FeaturedProducts";
import Layout from "@/components/layout/Layout";
import ButtonLink from "@/components/links/ButtonLink";
import { Product } from "@/lib/types";
import { motion } from "framer-motion";

export default function HomePage() {
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

    const products: Product[] = [
        {
            id: "1",
            name: "Limited Edition Sports Trainer",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam optio cumque tenetur, accusantium officia distinctio consequuntur impedit nulla exercitationem velit.",
            categories: ["shoes"],
            images: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80",
            price: 100,
            stock: 10,
        },
        {
            id: "2",
            name: "Limited Edition Sports Trainer",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam optio cumque tenetur, accusantium officia distinctio consequuntur impedit nulla exercitationem velit.",
            categories: ["shoes"],
            images: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80",
            price: 100,
            stock: 10,
        },
        {
            id: "3",
            name: "Limited Edition Sports Trainer",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam optio cumque tenetur, accusantium officia distinctio consequuntur impedit nulla exercitationem velit.",
            categories: ["shoes"],
            images: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80",
            price: 100,
            stock: 10,
        },
        {
            id: "4",
            name: "Limited Edition Sports Trainer",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam optio cumque tenetur, accusantium officia distinctio consequuntur impedit nulla exercitationem velit.",
            categories: ["shoes"],
            images: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80",
            price: 100,
            stock: 10,
        },
    ];

    return (
        <Layout className="py-0">
            <main className="space-y-2">
                {/* <section className="bg-white"></section> */}
                <div>
                    <CarouselBanner products={dataBanner} />
                </div>
                <div>
                    <CarouselProducts products={products} />
                </div>
                <div>
                    <FeaturedProducts products={products} />
                </div>
                <div>
                    <CommonProducts products={products} />
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
}
