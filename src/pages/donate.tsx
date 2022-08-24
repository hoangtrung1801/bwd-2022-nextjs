/* eslint-disable @next/next/no-img-element */
import * as React from "react";

import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import CarouselBanner from "@/components/CarouselBanner";
import { motion } from "framer-motion";
import NextImage from "@/components/NextImage";
import Button from "@/components/buttons/Button";
import ButtonLink from "@/components/links/ButtonLink";

const DonatePage = () => {
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

    return (
        <Layout>
            <main>
                <div>
                    <CarouselBanner products={dataBanner} />
                </div>
                <div>
                    <MissionSection />
                </div>
                <div>
                    <DonateAction />
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

const MissionSection = () => {
    const dataDonateCard = [
        {
            id: 1,
            title: "BẢO VỆ RỪNG",
            image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80",
            description:
                "Những năm gần đây, diện tích rừng tự nhiên ở Việt Nam ngày càng giảm nhanh, chất lượng rừng suy thoái ảnh hưởng nặng nề đến đời sống của người dân , không những thế còn dẫn đến nguy cơ ô nhiễm môi trường cao.",
            btnTitle: "QUYÊN GÓP NGAY",
        },
        {
            id: 2,
            title: "BẢO VỆ NƯỚC",
            image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80",
            description:
                "Những năm gần đây, ô nhiễm nguồn nước đang là một trong những thách thức môi trường lớn nhất đối với Việt Nam. Tỉ lệ người dân không có nước sạch để uống và sinh hoạt cao đe dọa đến sức khỏe và sinh kế của hàng triệu người.",
            btnTitle: "QUYÊN GÓP NGAY",
        },
        {
            id: 3,
            title: "SẢN PHẨM TÁI CHẾ",
            image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80",
            description:
                "Mỗi năm, hàng trăm ngàn tấn rác thải các loại được thải ra ảnh hưởng nghiêm trọng cho môi trường. Vì vậy, việc sử dụng sản phẩm tái chế từ túi nhựa, chai nước, giấy các loại... là biện pháp hiệu quả để bảo vệ môi trường chúng ta.",
            btnTitle: "QUYÊN GÓP NGAY",
        },
    ];

    return (
        <motion.div
            // variants={inViewFromLeftShow}
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ once: true }}
            className="flex flex-col bg-green-50 p-12  lg:flex-row lg:justify-evenly lg:p-24"
        >
            {dataDonateCard.map((item) => {
                return (
                    <motion.div
                        // variants={donateValueShow}
                        // initial={'hidden'}
                        // animate={inView && 'visible'}
                        key={item.id}
                        className="flex p-3 "
                        // className="flex flex-col lg:w-30% w-full p-12 mb-5 items-center relative card-donate bg-white"
                    >
                        <div className="card-donate relative mb-5 flex w-full flex-col items-center bg-white p-12">
                            <div className="mb-2">
                                <NextImage
                                    alt={item.title}
                                    src={item.image}
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <p className="mb-6 text-xl font-bold text-green-500">
                                {item.title}
                            </p>
                            <p className="mb-6 text-center text-base text-gray-600">
                                {item.description}
                            </p>
                            <button className="text-xs font-semibold text-green-500">
                                {item.btnTitle}
                            </button>
                        </div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

const DonateAction = () => {
    return (
        <div className="h-full w-full">
            <div className="py-32">
                <div className="mx-auto flex h-full w-3/4 ">
                    <div className="relative h-full w-full">
                        <motion.figure
                            // initial="hidden"
                            // whileInView="visible"
                            // viewport={{ once: true }}
                            style={{ maxHeight: "500px" }}
                            className="overflow-hidden"
                        >
                            <img
                                className="h-auto w-full object-cover"
                                src="https://bwd2022.vercel.app/assets/donate-action.jpg"
                                alt="actionImg"
                            ></img>
                        </motion.figure>
                        <motion.div
                            // variants={inViewFromRightShow}
                            // initial="hidden"
                            // whileInView="visible"
                            viewport={{ once: true }}
                            style={{
                                backgroundColor: "#40c057",
                                bottom: "-7%",
                                right: "-7%",
                            }}
                            className="static flex w-full flex-col py-8 px-10 text-white lg:absolute lg:bottom-0 lg:right-0 lg:w-1/2 lg:py-16 lg:px-20"
                        >
                            <p className="mb-6 text-4xl font-bold">Quyên góp</p>
                            <p className="mb-6 text-lg">
                                Số tiền của bạn có thế cứu lấy thế giới. Hãy
                                cùng chúng tôi tiếp tục chung tay góp phần bảo
                                vệ môi trường.
                            </p>
                            {/* <Button
                                className="justify-start text-xl text-white"
                                variant="text"
                                startIcon={<VolunteerActivismIcon />}
                            >
                                QUYÊN GÓP NGAY
                            </Button> */}
                            <Button variant="light">QUYÊN GÓP NGAY</Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonatePage;
