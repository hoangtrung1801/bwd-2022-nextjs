import NextImage from "@/components/NextImage";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CarouselBannerProps = {
    products: any[];
} & React.ComponentProps<"div">;

const CarouselBanner: React.FC<CarouselBannerProps> = ({ products }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SamplePrevArrow />,
        prevArrow: <SampleNextArrow />,
    };

    return (
        <div>
            <Slider {...settings}>
                {products.map((item) => (
                    <BannerItem key={item.id} data={item} />
                ))}
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
                        height={50}
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
