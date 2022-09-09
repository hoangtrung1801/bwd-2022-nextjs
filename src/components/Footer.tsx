import UnstyledLink from "@/components/links/UnstyledLink";
import NextImage from "@/components/NextImage";
import { FacebookLogo, GithubLogo, InstagramLogo } from "phosphor-react";
import React from "react";

const members = [
    {
        name: "Lê Kim Hoàng Trung",
        code: "21IT052",
        facebook: "https:/fb.com/trung181",
        github: "https://github.com/hoangtrung1801",
        instagram: "#",
    },
    {
        name: "Hà Cảnh Hồng Phúc",
        code: "21IT038",
        facebook: "https:/fb.com/trung181",
        github: "https://github.com/hoangtrung1801",
        instagram: "#",
    },
    {
        name: "Võ Văn Tuấn",
        code: "21IT055",
        facebook: "https:/fb.com/trung181",
        github: "https://github.com/hoangtrung1801",
        instagram: "#",
    },
    {
        name: "Trương Đình Dũng",
        code: "21IT013",
        facebook: "https:/fb.com/trung181",
        github: "https://github.com/hoangtrung1801",
        instagram: "#",
    },
];

const Footer = () => {
    return (
        <footer className="border-t border-gray-200">
            <div className="layout space-y-6 pt-16 pb-12 text-sm text-gray-600">
                <div className="hidden grid-cols-4 justify-items-center space-x-4 md:grid">
                    {members.map((member) => (
                        <div
                            key={member.name}
                            className="space-y-1 font-medium"
                        >
                            <p>{member.name}</p>
                            <p>MSV: {member.code}</p>
                            <div className="flex space-x-2">
                                <UnstyledLink href={member.facebook}>
                                    <FacebookLogo size={24} />
                                </UnstyledLink>
                                <UnstyledLink href={member.github}>
                                    <GithubLogo size={24} />
                                </UnstyledLink>
                                <UnstyledLink href={member.instagram}>
                                    <InstagramLogo size={24} />
                                </UnstyledLink>
                                {/* <FacebookLogo />
                                <GithubLogo />
                                <InstagramLogo /> */}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mx-auto w-full md:w-3/5">
                    <NextImage
                        alt="VKU Logo"
                        src={"/images/vku.png"}
                        width="100%"
                        height={10}
                        objectFit="cover"
                    />
                </div>
                <div className="text-center text-base">
                    <p className="font-bold">2022 - LAVIE</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
