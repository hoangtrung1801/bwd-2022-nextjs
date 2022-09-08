import React from "react";
import Image from "next/image";
import { Envelope } from "phosphor-react";
import Button from "@/components/buttons/Button";
import Layout from "@/components/layout/Layout";

const data = [
    {
        id: 1,
        name: "Ống hút tre",
        type: "Tre",
        image: "/images/HomeBanner02.png",
        state: "đã giao",
        quantity: 1,
        price: 36000,
    },
    {
        id: 2,
        name: "Ống hút tre",
        type: "Tre",
        image: "/images/HomeBanner02.png",
        state: "đã giao",
        quantity: 2,
        price: 72000,
    },
];
const customData = {
    name: "Văn Tuấn",
    address: "Ngũ Hoành Sơn",
    email: "tuanvanvo2003@gmail.com",
};
const purchaseHistory = () => {
    return (
        <Layout className="max-w-screen-2xl py-0">
            <div className="py-14 px-4 md:px-6 2xl:container 2xl:mx-auto 2xl:px-20">
                <div className="item-start flex flex-col justify-start space-y-2 ">
                    <h1 className=" text-3xl font-semibold leading-7 text-gray-800 lg:text-4xl  lg:leading-9">
                        Lịch sử mua hàng
                    </h1>
                    <p className="text-base font-medium leading-6 text-gray-600">
                        Các mặt hàng bạn đã mua được hiển thị tại đây
                    </p>
                </div>
                <div className="jusitfy-center mt-10 flex w-full flex-col items-stretch  space-y-4 md:space-y-6 xl:flex-row xl:space-x-8 xl:space-y-0">
                    <div className="flex w-full flex-col items-start justify-start space-y-4 md:space-y-6 xl:space-y-8">
                        <div className="flex w-full flex-col items-start justify-start bg-gray-50 px-4 py-4 md:p-6 md:py-6 xl:p-8">
                            <div className="hidden w-full items-start justify-between border-b-2 border-green-700 pb-5 md:flex">
                                <p className="mr-[40px] text-lg font-semibold leading-6 text-gray-800 md:text-xl xl:leading-5">
                                    Thông tin sản phẩm
                                </p>
                                {/* <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Số lượng</p> */}
                                {/* <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Giá</p> */}
                                {/* <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Giá</p> */}
                                {/* 1 item */}
                            </div>

                            {data.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="flex w-full flex-col items-start justify-start md:mt-6 md:flex-row md:items-center md:space-x-6 xl:space-x-8 "
                                >
                                    <div className="w-full pb-4 md:w-40 md:pb-8">
                                        <div className="relative h-[150px] w-full md:h-[130px] md:w-[145px]">
                                            <Image
                                                className="hidden w-full md:block"
                                                layout="fill"
                                                objectFit="cover"
                                                src={item.image}
                                                alt="dress"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex  w-full flex-col items-start justify-between space-y-4 border-b border-green-700 pb-8 md:flex-row md:space-y-0">
                                        <div className="flex w-full flex-col items-start justify-start space-y-8">
                                            <h3 className="text-xl font-semibold leading-6 text-gray-800 xl:text-2xl">
                                                {item.name}
                                            </h3>
                                            <div className="flex flex-col items-start justify-start space-y-2">
                                                <p className="text-sm leading-none text-gray-800">
                                                    <span className="font-bold text-gray-700">
                                                        Loại:{" "}
                                                    </span>{" "}
                                                    {item.type}
                                                </p>
                                                <p className="text-sm leading-none text-gray-800">
                                                    <span className="font-bold text-gray-700">
                                                        Số lượng:{" "}
                                                    </span>{" "}
                                                    {item.quantity}
                                                </p>
                                                <p className="text-sm leading-none text-gray-800">
                                                    <span className="font-bold text-gray-700">
                                                        Tình trạng:{" "}
                                                    </span>
                                                    <span className="font-base uppercase text-gray-700">
                                                        {item.state}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex w-full items-start justify-between space-x-8">
                                            {/* <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">{item.quantity}</p> */}
                                            <p className="text-base font-semibold leading-6 text-green-600 xl:text-lg">
                                                {item.price}VND
                                            </p>
                                            <Button variant="primary">
                                                MUA LẠI
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* custom information */}
                    <div className="flex w-full flex-col items-center justify-between bg-gray-50 px-4 py-6 md:items-start md:p-6 xl:w-96 xl:p-8 ">
                        <h3 className="text-xl font-semibold leading-5 text-gray-800">
                            Thông tin khách hàng
                        </h3>
                        <div className="flex  h-full w-full flex-col items-stretch justify-start md:flex-row md:space-x-6 lg:space-x-8 xl:flex-col xl:space-x-0 ">
                            <div className="flex flex-shrink-0 flex-col items-start justify-start">
                                <div className="flex w-full items-center justify-center space-x-4 border-b border-green-700 py-8 md:justify-start">
                                    <Image
                                        src="/images/HomeBanner02.png"
                                        width={80}
                                        height={80}
                                        alt="avatar"
                                    />
                                    <div className=" flex flex-col items-start justify-start space-y-2">
                                        <p className="text-left text-base font-semibold leading-4 text-gray-800">
                                            {customData.name}
                                        </p>
                                        <p className="text-sm leading-5 text-gray-600">
                                            {customData.address}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex w-full  items-center justify-center space-x-4 border-b border-green-700 py-4 md:justify-start">
                                    <Envelope size={24} weight="bold" />
                                    <p className="cursor-pointer text-sm leading-5 text-gray-800">
                                        {customData.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default purchaseHistory;
