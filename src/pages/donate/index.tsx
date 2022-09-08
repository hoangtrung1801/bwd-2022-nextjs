/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Button from "@/components/buttons/Button";
import CarouselBanner from "@/components/CarouselBanner";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import DonationList from "@/components/DonationList";
import DonationModal from "@/components/DonationModal";
import { Donation } from "@/lib/types";
import {
    donate_card_1,
    donate_card_2,
    donate_card_3,
} from "../../../public/svg/index";

const DonatePage = () => {
    const dataBanner = [
        {
            id: 1,
            title: "Bảo vệ môi trường",
            BannerPicture: "/images/DonateBanner01.png",
            description:
                "Cùng chung tay bảo vệ môi trường vì tương lai của thế giới, hãy giữ lấy màu xanh và làm sạch môi trường.",
        },
        {
            id: 2,
            title: "Cùng chung tay quyên góp bảo vệ môi trường",
            BannerPicture: "/images/DonateBanner02.png",
            description:
                "Giúp đỡ lẫn nhau thực hiện các nhu cầu cơ bản của sự sống còn của con người, đấu tranh bảo tồn các nguồn tài nguyên thiên nhiên và chung tay.",
        },
    ];

    return (
        <Layout className="max-w-screen-2xl p-0 md:p-0">
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
                    <DonateSection />
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
            image: donate_card_1,
            description:
                "Những năm gần đây, diện tích rừng tự nhiên ở Việt Nam ngày càng giảm nhanh, chất lượng rừng suy thoái ảnh hưởng nặng nề đến đời sống của người dân , không những thế còn dẫn đến nguy cơ ô nhiễm môi trường cao.",
            btnTitle: "QUYÊN GÓP NGAY",
        },
        {
            id: 2,
            title: "BẢO VỆ NƯỚC",
            image: donate_card_2,
            description:
                "Những năm gần đây, ô nhiễm nguồn nước đang là một trong những thách thức môi trường lớn nhất đối với Việt Nam. Tỉ lệ người dân không có nước sạch để uống và sinh hoạt cao đe dọa đến sức khỏe và sinh kế của hàng triệu người.",
            btnTitle: "QUYÊN GÓP NGAY",
        },
        {
            id: 3,
            title: "SẢN PHẨM TÁI CHẾ",
            image: donate_card_3,
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
            className="flex flex-col bg-green-50 p-6 lg:flex-row lg:justify-evenly lg:p-24"
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
                        {/* style={{transition : 'all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1)'}} */}
                        <div
                            className="before:content[''] before:border-l-[rgb(219, 237,
                         219)]
                         before:transition[all 0.5s cubic-bezier(0.215, 0.61,
                         0.355, 1)] relative left-0 right-0 flex w-full flex-col items-center rounded bg-white p-12 transition-all duration-500 before:absolute before:left-[10px] before:bottom-[10px] before:h-0 before:w-0 before:border-t-[24px] before:border-r-0 before:border-b-0
                         before:border-l-[25px] before:border-solid before:border-t-transparent before:border-r-transparent before:border-b-transparent hover:translate-y-[-1rem] hover:before:border-t-transparent hover:before:border-r-transparent hover:before:border-b-transparent hover:before:border-l-[#40bf57]"
                        >
                            {/* <div className="mb-2">
                                <NextImage
                                    alt={item.title}
                                    src={item.image}
                                    width={100}
                                    height={100}
                                />
                            </div> */}
                            <div className="mb-2">{<item.image />}</div>
                            <p className="mb-6 text-xl font-bold text-green-500">
                                {item.title}
                            </p>
                            <p className="mb-6 text-center text-base text-gray-500">
                                {item.description}
                            </p>
                            <button className="text-sm font-semibold text-green-500">
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
                            className="max-h-[500px] overflow-hidden"
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
                                bottom: "-7%",
                                right: "-7%",
                            }}
                            className="static flex w-full flex-col bg-[#40c057] py-8  px-10 text-white
                            lg:absolute lg:bottom-[-7%] lg:right-[-7%] lg:w-1/2 lg:py-16 lg:px-20"
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

const DonateSection = () => {
    const donations: Donation[] = [
        {
            name: "Donation name 1",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, iusto esse minus, vitae eos distinctio animi ullam aperiam consequuntur illo nobis eaque blanditiis asperiores totam. Fugit quod explicabo mollitia adipisci.",
            target: 1000,
            expiryDate: new Date(Date.now() + 36000),
            donator: [],
            image: "/images/default-avatar.jpg",
        },
        {
            name: "Donation name 2",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, iusto esse minus, vitae eos distinctio animi ullam aperiam consequuntur illo nobis eaque blanditiis asperiores totam. Fugit quod explicabo mollitia adipisci.",
            target: 1000,
            expiryDate: new Date(Date.now() + 36000),
            donator: [],
            image: "/images/default-avatar.jpg",
        },
        {
            name: "Donation name 3",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, iusto esse minus, vitae eos distinctio animi ullam aperiam consequuntur illo nobis eaque blanditiis asperiores totam. Fugit quod explicabo mollitia adipisci.",
            target: 1000,
            expiryDate: new Date(Date.now() + 36000),
            donator: [],
            image: "/images/default-avatar.jpg",
        },
        {
            name: "Donation name 4",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, iusto esse minus, vitae eos distinctio animi ullam aperiam consequuntur illo nobis eaque blanditiis asperiores totam. Fugit quod explicabo mollitia adipisci.",
            target: 1000,
            expiryDate: new Date(Date.now() + 36000),
            donator: [],
            image: "/images/default-avatar.jpg",
        },
    ];

    const [selectedDonation, setSelectedDonation] = React.useState<Donation>(
        donations[0]
    );
    const [isOpenDonationModal, setIsOpenDonationModal] = React.useState(false);

    const onOpenDonationModal = (donation: Donation) => {
        setSelectedDonation(donation);
        setIsOpenDonationModal(true);
    };

    // const [donationMountID, setDonationMountID] = React.useState(-1);
    // const [isOpenDonationModal, setIsOpenDonationModal] = React.useState(false);
    // const handleChooseMount = (index) => {
    //     setDonationMountID(index);
    // };
    // const handleOpenDonationModal = () => {
    //     setIsOpenDonationModal(!isOpenDonationModal);
    // };
    // const dataMount = [50, 100, 200, 500, 1000];

    return (
        <div>
            <div className="before:content[''] before-left-0 relative z-0 h-full w-full bg-[url(https://bwd2022.vercel.app/assets/bg7.jpg)] bg-cover bg-fixed bg-center bg-no-repeat text-white before:absolute before:top-0 before:z-[-1] before:h-full before:w-full before:bg-[#0000001a]">
                <div className="h-full w-full px-4 py-12">
                    <div className="mx-auto flex h-full min-h-[75vh] max-w-7xl flex-row items-center justify-center">
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
                                style={{
                                    background:
                                        "-webkit-linear-gradient(right, #a6f77b, #2dbd6e)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                                className="before:content[''] after:content[''] relative mb-3
                                            text-xl font-bold before:absolute before:top-1/2 before:left-[calc(50%-6.5rem)] before:h-[3px] before:w-[2rem] before:translate-y-[-50%] before:bg-gradient-to-r before:from-[#a6f77b]
                                            before:to-[#2dbd6e] after:absolute after:top-1/2 after:right-[calc(50%-6.5rem)] after:h-[3px] after:w-[2rem] after:translate-y-[-50%] after:bg-gradient-to-r after:from-[#a6f77b] after:to-[#2dbd6e]
                                            "
                                initial={{ opacity: 0, y: 200, x: 0 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    type: "spring",
                                    duration: 1.5,
                                    bounce: 0.3,
                                }}
                            >
                                QUYÊN GÓP
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
                                className="mb-10 text-5xl font-bold"
                            >
                                VÌ MỘT MÔI TRƯỜNG XANH SẠCH ĐẸP
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
                                className="mx-auto mb-4 w-full text-lg"
                            >
                                Cùng nhau hành động ngay bây giờ, mọi đóng góp
                                của bạn đều mang lại sự thay đổi tích cực cho
                                môi trường.
                            </motion.p>

                            {/* <motion.div
                                className="mb-7 flex md:flex-row"
                                initial={{ opacity: 0, y: 200, x: 0 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    type: "spring",
                                    duration: 1.5,
                                    bounce: 0.3,
                                }}
                            >
                                <div className="mx-auto flex w-full flex-wrap justify-center p-5 md:w-3/4 md:flex-row">
                                    {dataMount.map((item, index) => {
                                        return (
                                            <div
                                                className="w-1/2 p-2 lg:w-1/6"
                                                key={index}
                                                onClick={() =>
                                                    handleChooseMount(index)
                                                }
                                            >
                                                <div
                                                    className={`cursor-pointer bg-white p-3 text-lg font-semibold text-black hover:bg-green-500 hover:text-white ${
                                                        donationMountID ===
                                                        index
                                                            ? "isChoosed"
                                                            : ""
                                                    }`}
                                                >
                                                    {item}K
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.div>

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
                                <button
                                    style={{
                                        background:
                                            "-webkit-linear-gradient(right, #a6f77b, #2dbd6e)",
                                        transition: "all 0.4s ease",
                                        boxShadow: "0 1px 8px #69db7c",
                                    }}
                                    onClick={handleOpenDonationModal}
                                    className="mx-auto w-3/4 border-none p-4 text-base font-bold md:w-[34%] md:p-5"
                                >
                                    QUYÊN GÓP NGAY
                                </button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 200, x: 0 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    type: "spring",
                                    duration: 1.5,
                                    bounce: 0.3,
                                }}
                                className="mt-3"
                            >
                                <Link href={"donate/ranking"}>
                                    <a className="text-base italic text-green-500 hover:underline">
                                        Xem danh sách
                                    </a>
                                </Link>
                            </motion.div> */}

                            <DonationList
                                donations={donations}
                                onDonate={onOpenDonationModal}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
            <DonationModal
                donation={selectedDonation}
                isOpen={isOpenDonationModal}
                setIsOpen={setIsOpenDonationModal}
            />
        </div>
    );
};

export default DonatePage;
