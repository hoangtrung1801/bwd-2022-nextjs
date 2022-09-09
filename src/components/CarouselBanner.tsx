import NextImage from "@/components/NextImage";
import { motion } from "framer-motion";
import { CaretLeft, CaretRight } from "phosphor-react";
import React from "react";
import Slider from "react-slick";
import Button from "@/components/buttons/Button";
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
            className={`absolute top-1/2 -left-2 z-30 block cursor-pointer text-7xl text-white opacity-50 hover:opacity-100 md:left-4`}
            style={{
                ...style,
                borderRadius: "50%",
                transition: "all .25s ease",
                transform: "translateY(-50%)",
            }}
            onClick={onClick}
        >
            <CaretLeft />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            className={`absolute top-1/2 -right-2 z-30 block cursor-pointer text-7xl text-white opacity-50 hover:opacity-100 md:right-4`}
            style={{
                ...style,
                borderRadius: "50%",
                transition: "all .25s ease",
                transform: "translateY(-50%)",
            }}
            onClick={onClick}
        >
            <CaretRight />
        </div>
    );
}

export function BannerItem({ data }) {
    const { BannerPicture, title, description } = data;

    return (
        <div className=" relative h-[400px] max-h-[800px] lg:h-[calc(100vh-80px)]">
            <div className="h-full w-full ">
                <div className="h-full w-full ">
                    <NextImage
                        alt=""
                        src={BannerPicture}
                        height={"100"}
                        width={"100"}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL={BannerPicture}
                    />
                    {/* </div> */}
                </div>
            </div>
            <div className=" absolute top-0 left-0 m-auto my-auto flex h-full w-full">
                <motion.div
                    style={{ background: "#33333380" }}
                    className=" m-auto  min-h-[400px] w-3/4 p-5 py-4 px-8 text-white"
                    initial={{ opacity: 0, y: 200, x: 0 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-3xl font-bold text-white md:py-5 md:text-5xl">
                        {title}
                    </h1>
                    <p className="mt-2 break-words py-5 md:mt-4 md:whitespace-pre-wrap md:text-xl ">
                        {description}
                    </p>
                    {/* className="MoreBtn md:mt-20" */}
                    <Button
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, #232526 0%, #414345 51%, #232526 100%)",
                            transition: "0.5s",
                            backgroundSize: "200% auto",
                        }}
                        className="transition[0.5s] h-auto w-[200px] min-w-[200px] bg-black py-4 px-8 text-white hover:bg-right md:mt-20"
                    >
                        <a className="h-full w-full" href="#donate">
                            TÌM HIỂU THÊM
                        </a>
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}

export default CarouselBanner;
