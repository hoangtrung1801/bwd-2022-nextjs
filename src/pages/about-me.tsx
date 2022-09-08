import {
    CaretLeft,
    CaretRight,
    FacebookLogo,
    GithubLogo,
    InstagramLogo,
} from "phosphor-react";
import Layout from "@/components/layout/Layout";
import { useViewport } from "../hooks/UseViewPort";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutMe = () => {
    const members = [
        {
            name: "Lê Kim Hoàng Trung",
            description:
                "Tôi là người năng động, luôn thích thú, chủ động tìm những công nghệ mới hiện nay. Vì là người năng động nên cả ngày tôi chỉ cười, có lúc không.",
            facebook: "https://www.facebook.com/trung181",
            github: "https://github.com/hoangtrung1801 ",
            instagram: "https://www.instagram.com/hoangtrung1801",
            image: "/images/member-1.jpg",
            role: "Đội trưởng",
        },
        {
            name: "Hà Cảnh Hồng Phúc",
            description:
                "Là một phần của thế hệ GenZ, tôi tin rằng không có bất kỳ mục tiêu không thể nào không được công nhận. Nếu chúng ta đủ kiên định, tương lai là của chúng ta.",
            facebook: "https://www.facebook.com/hch.phusc.17",
            github: "https://github.com/LilPhusc ",
            instagram: "https://www.instagram.com/_.aliz.hngphc/",
            image: "/images/member-2.jpg",
            role: "Thành viên",
        },
        {
            name: "Võ Văn Tuấn",
            description:
                "Tôi là một người có tổ chức và luôn tập trung vào việc tạo ra kết quả. Trong khi đặt ra mục tiêu tôi luôn rất thực tế, tôi luôn nỗ lực phát triển các cách để hoàn thành được công việc một cách hiệu quả và thậm chí thường đạt được nhiều hơn những gì tôi mong đợi.",
            facebook: "https://www.facebook.com/profile.php?id=100013422558737",
            github: "",
            instagram: "",
            image: "/images/member-3.jpg",
            role: "Thành viên",
        },
        {
            name: "Trương Đình Dũng",
            description:
                "Tôi là người năng động, thân thiên. Lúc rãnh rỗi, tôi thường đọc báo và nghe nhạc.",
            facebook: " https://www.facebook.com/andrew.td2003/",
            github: "https://github.com/gitdung",
            instagram: "",
            image: "/images/member-4.jpg",
            role: "Thành viên",
        },
    ];

    function SampleNextArrow(props) {
        const { style, onClick } = props;
        return (
            <div
                className={`absolute bottom-5 left-0 my-0 mx-8 text-4xl `}
                style={{
                    ...style,
                    top: "initial",
                    color: "#555",
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
                className={`absolute bottom-5 right-0 my-0 mx-8 text-4xl `}
                style={{
                    ...style,
                    top: "initial",
                    color: "#555",
                }}
                onClick={onClick}
            >
                <CaretRight />
            </div>
        );
    }
    const settings = {
        customPaging: function (i) {
            return (
                <div className="dots">
                    <div className="relative h-full w-full">
                        <Image
                            layout="fill"
                            objectFit="cover"
                            src={members[i].image}
                            alt="logoMember"
                        />
                    </div>
                </div>
            );
        },
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SamplePrevArrow />,
        prevArrow: <SampleNextArrow />,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
    };
    return (
        <Layout className="max-w-screen-2xl p-0">
            <div className="min-h-[calc(100vh-80px)] w-full">
                <div
                    style={{
                        backgroundImage: `url(https://bwd2022.vercel.app/assets/aboutme.png)`,
                    }}
                    className="aboutme-wrap before:content[''] relative h-full w-full bg-cover bg-no-repeat
                                px-12 before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-[#ffffffbf]
                                "
                >
                    <Slider className="h-full" {...settings}>
                        {members.map((item, index) => (
                            <SliderAboutItem key={index} data={item} />
                        ))}
                    </Slider>
                </div>
            </div>
        </Layout>
    );
};
const SliderAboutItem = ({ data }) => {
    const { isMobile } = useViewport();
    const { name, role, description, facebook, github, instagram, image } =
        data;
    return (
        <div className="h-full w-full md:h-[calc(90vh-80px)]">
            <div className="flex h-full w-full flex-col md:flex-row">
                <div className="h-1/2 w-full md:h-full md:w-1/2 md:p-3">
                    <div className="flex h-full flex-col items-center justify-start text-center md:items-end md:justify-center md:text-end">
                        <h1 className="mb-6 text-5xl font-bold text-[#363636]">
                            {name}
                        </h1>
                        <p className="mb-6 text-[#7a7a7a] ">{role}</p>
                        <p className="mb-6 text-[17px]">{description}</p>
                        <div className="flex text-4xl">
                            <a target="_blank" href={facebook} rel="noreferrer">
                                <FacebookLogo
                                    color="#0096ff"
                                    className="mr-2"
                                />
                            </a>
                            <a target="_blank" href={github} rel="noreferrer">
                                <GithubLogo color="#161414" className="mr-2" />
                            </a>
                            <a
                                target="_blank"
                                href={instagram}
                                rel="noreferrer"
                            >
                                <InstagramLogo
                                    color="#c22867"
                                    className="mr-2"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="h-full w-full p-3 md:h-full md:w-1/2 md:p-3">
                    <div className="flex h-full w-full items-center">
                        <div
                            style={{ boxShadow: "#64646f33 0 7px 29px" }}
                            className="h-full w-full overflow-hidden rounded-2xl md:h-[90%] md:w-3/4"
                        >
                            <div className="relative h-full w-full">
                                <Image
                                    objectFit="cover"
                                    width={100}
                                    height={100}
                                    layout={isMobile ? "responsive" : "fill"}
                                    src={image}
                                    alt="members"
                                ></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
