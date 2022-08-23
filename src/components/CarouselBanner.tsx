import NextImage from "@/components/NextImage";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import React from "react";
import Slider from "react-slick";

type CarouselBannerProps = {} & React.ComponentProps<"div">;

const dataHome = [
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
];

const CarouselBanner: React.FC<CarouselBannerProps> = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        // autoplay: true,
        // autoplaySpeed: 5000,
        slidesToShow: 2,
        // slidesToScroll: 1,
        // nextArrow: <SamplePrevArrow />,
        // prevArrow: <SampleNextArrow />,
    };

    return (
        <div>
            <Slider {...settings}>
                <div className="">
                    <div className="h-60 w-full bg-green-50"></div>
                </div>
                <div className="h-60 w-full bg-black/50"></div>
                {/* <div className="h-60 w-full bg-black/50"></div>
                <div className="h-60 w-full bg-black/50"></div> */}
                {/* {dataHome.map((item) => (
                    <BannerItem key={item.id} data={item} />
                ))} */}
            </Slider>
        </div>
    );
};

function SampleNextArrow(props) {
    const { style, onClick } = props;
    // ${
    //     props.isDesktop ? '-left-14' : 'left-0'
    // }
    return (
        <div
            className={`absolute top-1/2 left-4 z-30 block cursor-pointer text-7xl text-white opacity-50 hover:opacity-100`}
            style={{
                ...style,
                borderRadius: "50%",
                transition: "all .25s ease",
                transform: "translateY(-50%)",
            }}
            onClick={onClick}
        >
            <ArrowLeft />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            className={`absolute top-1/2 right-4 z-30 block cursor-pointer text-7xl text-white opacity-50 hover:opacity-100`}
            style={{
                ...style,
                borderRadius: "50%",
                transition: "all .25s ease",
                transform: "translateY(-50%)",
            }}
            onClick={onClick}
        >
            <ArrowRight />
        </div>
    );
}

export function BannerItem({ data }) {
    const { BannerPicture, title, description } = data;

    return (
        <div className="BannerHeight relative">
            <div className="h-full w-full ">
                <div className="h-full w-full">
                    {/* <BannerPicture className="h-full w-full object-cover" /> */}
                    <NextImage
                        className="h-full w-full object-cover"
                        alt=""
                        src={BannerPicture}
                        width={100}
                        height={100}
                    />
                </div>
            </div>
            <div className=" absolute top-0 left-0 m-auto my-auto flex h-full w-full">
                <motion.div
                    style={{ background: "#33333380", minHeight: "400px" }}
                    className=" m-auto  w-3/4 p-5 py-4 px-8 text-white"
                    initial={{ opacity: 0, y: 200, x: 0 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
                >
                    <h1 className="text-3xl font-bold text-white md:py-5 md:text-5xl">
                        {title}
                    </h1>
                    <p className="mt-2 break-words py-5 md:mt-4 md:whitespace-pre-wrap md:text-xl ">
                        {description}
                    </p>
                    <button className="MoreBtn md:mt-20">TÌM HIỂU THÊM</button>
                </motion.div>
            </div>
        </div>
    );
}

export default CarouselBanner;
