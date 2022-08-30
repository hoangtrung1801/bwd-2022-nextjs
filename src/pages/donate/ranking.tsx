import React from "react";
import Image from "next/image";
import Layout from "@/components/layout/Layout";

export default function ranking() {
    const titleTable = ["STT", "HỌ TÊN", "EMAIL", "TRƯỜNG", "SỐ TIỀN"];
    const listUser = [
        {
            name: "VÕ VĂN TUẤN",
            email: "tuanvv.21it@vku.udn.vn",
            school: "VKU",
            money: 500,
        },
        {
            name: "VÕ VĂN TUẤN",
            email: "tuanvv.21it@vku.udn.vn",
            school: "VKU",
            money: 500,
        },
        {
            name: "VÕ VĂN TUẤN",
            email: "tuanvv.21it@vku.udn.vn",
            school: "VKU",
            money: 500,
        },
    ];
    return (
        <Layout className="max-w-screen-2xl p-0">
            <div className="min-h-screen bg-green-50 ">
                <div className="h-full px-0 py-8 md:px-8 lg:px-24">
                    <div className="relative mb-6  flex  flex-col items-center justify-center ">
                        <Image
                            src="/images/crownRanking.png"
                            height={128}
                            width={128}
                            alt="icon"
                        />
                        <p className="text-[40px] font-bold leading-[60px] text-black ">
                            Bảng Quyên Góp
                        </p>
                        <p className="max-w-3xl text-center">
                            Cảm ơn bạn đã quyên góp cho chúng tôi. Chúng tôi
                            không thể thực hiện hành động gây quỹ này nếu không
                            có sự ủng hộ của các bạn. Toàn bộ số tiền gây quỹ
                            đến từ các bạn sẽ được dùng cho hoạt động bảo vệ môi
                            trường.
                        </p>
                    </div>

                    {/* container */}
                    <div className="mx-auto my-0 w-auto flex-grow">
                        <div className="overflow-y-auto">
                            <table
                                style={{
                                    boxShadow: "#64646f33 0 7px 29px",
                                    borderRadius: "0.5rem",
                                    color: "#363636",
                                    overflow: "hidden",
                                }}
                                className="w-full table-auto bg-white "
                            >
                                <thead className="bg-[#333] text-white ">
                                    <tr>
                                        {titleTable.map((item, index) => (
                                            <th key={index}>
                                                <a
                                                    href=""
                                                    className="flex items-center justify-start py-1 px-3 text-white"
                                                >
                                                    <span className="mr-1">
                                                        {item}
                                                    </span>
                                                </a>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {listUser.map((item, index) => (
                                        <tr key={index}>
                                            <td className="py-4 pl-6">
                                                {index + 1}
                                            </td>
                                            <td className="py-4 pl-6">
                                                {item.name}
                                            </td>
                                            <td className="py-4 pl-6">
                                                {item.email}
                                            </td>
                                            <td className="py-4 pl-6">
                                                {item.school}
                                            </td>
                                            <td className="py-4 pl-6 font-bold">
                                                {item.money}K
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
