import ArrowLink from "@/components/links/ArrowLink";
import UnstyledLink from "@/components/links/UnstyledLink";
import MenuButton from "@/components/MenuButton";
import NavCart from "@/components/NavCart";
import NavCartIcon from "@/components/NavCartIcon";
import links from "@/constant/links";
import { logoutUser } from "@/lib/authorization";
import clsxm from "@/lib/clsxm";
import useCursorLoading from "@/lib/hooks/useCursorLoading";
import useUserStore from "@/lib/stores/useUserStore";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
    Cardholder,
    CaretDown,
    CaretUp,
    ClipboardText,
    CreditCard,
    House,
    Info,
    SignOut,
    User,
} from "phosphor-react";
import React, { Fragment, SetStateAction, useRef, useState } from "react";

export default function Header() {
    const router = useRouter();
    const [navCartIsOpen, setNavCartIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-green-600 text-gray-100 shadow-sm">
            <div>
                <HeaderMobile setNavCartIsOpen={setNavCartIsOpen} />
            </div>

            {/* nav pc menu */}
            <div className="layout flex h-[80px] items-center justify-between">
                <UnstyledLink
                    href="/"
                    className="flex-1 font-bold hover:text-gray-600"
                >
                    <Image
                        src="/images/LAVIE.png"
                        alt="logo"
                        layout="fixed"
                        width={"120"}
                        height={80}
                        objectFit="cover"
                        quality={100}
                    />
                </UnstyledLink>

                {/* Nav menu */}
                <nav className="hidden h-full md:block">
                    <ul className="flex h-full items-center justify-between space-x-8">
                        {links.map(({ href, label }) => (
                            <li
                                key={`${href}${label}`}
                                className={clsxm(
                                    "flex h-full items-center px-4 ",
                                    "hover:text-white",
                                    router.pathname === href && ""
                                    // "bg-green-700/80"
                                )}
                            >
                                <UnstyledLink
                                    href={href}
                                    className="duration-400 text-lg font-medium transition-colors"
                                >
                                    <span
                                        className={clsxm(
                                            "relative py-1",
                                            "after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[3px] after:w-0 after:rounded-sm after:bg-white after:transition-all after:duration-300 after:content-[''] hover:text-white hover:after:w-full",
                                            router.pathname === href &&
                                                "text-white after:w-full"
                                        )}
                                    >
                                        {label}
                                    </span>
                                </UnstyledLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Header menu right */}
                <div className="hidden flex-1 items-center justify-end space-x-6 md:flex">
                    <NavCartIcon setNavCartIsOpen={setNavCartIsOpen} />
                    <HeaderAuthorization />
                </div>
            </div>
            <NavCart isOpen={navCartIsOpen} setIsOpen={setNavCartIsOpen} />
        </header>
    );
}

type HeaderMobileProps = {
    setNavCartIsOpen: React.Dispatch<SetStateAction<boolean>>;
};

const HeaderMobile: React.FC<HeaderMobileProps> = ({ setNavCartIsOpen }) => {
    const router = useRouter();
    const user = useUserStore((state) => state.user);
    const [hasUser] = useState(true);
    const [isOpenNavbar, setIsOpenNavbar] = useState(false);

    let timeout;
    const buttonRef = useRef(null);
    const timeoutDuration = 10000;

    const closePopover = () => {
        return buttonRef.current?.dispatchEvent(
            new KeyboardEvent("keydown", {
                key: "Escape",
                bubbles: true,
                cancelable: true,
            })
        );
    };

    const handleCloseMobileMenu = () => {
        setIsOpenNavbar(false);
    };

    return (
        <div
            className={`absolute inset-0 z-10 flex h-auto w-full flex-col bg-green-600 dark:bg-gray-900 md:hidden`}
        >
            <div className="flex h-[80px] items-center justify-between px-6">
                {/* nav mobile menu */}
                <MenuButton
                    opened={isOpenNavbar}
                    onClick={() => setIsOpenNavbar(!isOpenNavbar)}
                />

                <div className="flex items-center space-x-4">
                    <NavCartIcon setNavCartIsOpen={setNavCartIsOpen} />
                    <HeaderAuthorization />
                </div>
            </div>

            {isOpenNavbar && (
                <div
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    }}
                    className="fixed top-[80px] h-screen w-full"
                >
                    <motion.div
                        initial={{ opacity: 0.5, y: -15, x: 0 }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            duration: 0.5,
                        }}
                        className=" absolute top-0 left-0 h-auto w-full bg-white p-4"
                    >
                        <nav className="flex flex-col space-y-1">
                            <Link href={"/"}>
                                <a
                                    onClick={handleCloseMobileMenu}
                                    className={clsxm(
                                        "flex items-center rounded-lg  px-4 py-2 text-gray-700",
                                        router.pathname === "/" && "bg-gray-100"
                                    )}
                                >
                                    <House size={24} weight="bold" />

                                    <span className="ml-3 text-sm font-medium">
                                        {" "}
                                        Trang chủ{" "}
                                    </span>
                                </a>
                            </Link>

                            <Link href={"/category"}>
                                <a
                                    onClick={handleCloseMobileMenu}
                                    className={clsxm(
                                        "flex items-center rounded-lg  px-4 py-2 text-gray-700",
                                        router.pathname === "/category" &&
                                            "bg-gray-100"
                                    )}
                                >
                                    <ClipboardText size={24} weight="bold" />

                                    <span className="ml-3 text-sm font-medium">
                                        {" "}
                                        Phân loại{" "}
                                    </span>
                                </a>
                            </Link>

                            <Link href={"/donate"}>
                                <a
                                    onClick={handleCloseMobileMenu}
                                    className={clsxm(
                                        "flex items-center rounded-lg  px-4 py-2 text-gray-700",
                                        router.pathname === "/donate" &&
                                            "bg-gray-100"
                                    )}
                                >
                                    <CreditCard size={24} weight="bold" />

                                    <span className="ml-3 text-sm font-medium">
                                        {" "}
                                        Quyên góp{" "}
                                    </span>
                                </a>
                            </Link>

                            <Link href={"/about-me"}>
                                <a
                                    onClick={handleCloseMobileMenu}
                                    className={clsxm(
                                        "flex items-center rounded-lg  px-4 py-2 text-gray-700",
                                        router.pathname === "/about-me" &&
                                            "bg-gray-100"
                                    )}
                                >
                                    <Info size={24} weight="bold" />

                                    <span className="ml-3 text-sm font-medium">
                                        {" "}
                                        Về chúng tôi{" "}
                                    </span>
                                </a>
                            </Link>
                        </nav>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

const HeaderAuthorization = () => {
    const router = useRouter();

    const user = useUserStore((state) => state.user);
    const fetchUser = useUserStore((state) => state.fetch);
    const { setCursorLoadingOff, setCursorLoadingShow } = useCursorLoading();

    const handleLogout = () => {
        setCursorLoadingShow();
        logoutUser().then((success) => {
            setCursorLoadingOff();
            if (success) {
                fetchUser();
                // router.reload();
            }
        });
    };

    return (
        <>
            {user !== null ? (
                <Popover className="relative">
                    <Popover.Button className="duration-400 flex cursor-pointer items-center space-x-1 font-primary text-lg font-medium text-gray-100 transition-colors hover:text-white">
                        {({ open }) => (
                            <>
                                {/* <User />     */}
                                <h4 className="">{`${user.lastName} ${user.firstName}`}</h4>
                                {open ? <CaretUp /> : <CaretDown />}
                            </>
                        )}
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Popover.Panel className="absolute top-[30px] right-0 z-10">
                            <ul className="flex min-w-[200px] flex-col rounded-lg border border-gray-100 bg-green-50 p-2 shadow-lg dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-gray-900">
                                <li className="w-full flex-1">
                                    <UnstyledLink
                                        href="/users/purchase"
                                        className="text-md flex cursor-pointer items-center space-x-2 rounded py-2 px-4 font-primary font-semibold text-dark transition-colors hover:bg-green-300 dark:text-white md:bg-transparent "
                                    >
                                        <span className="flex-1">
                                            Đơn hàng đã mua
                                        </span>
                                        <Cardholder />
                                    </UnstyledLink>
                                </li>
                                <li className="w-full flex-1">
                                    <p
                                        className="text-md flex cursor-pointer items-center space-x-2 rounded py-2 px-4 font-primary font-semibold text-dark transition-colors hover:bg-green-300 dark:text-white md:bg-transparent "
                                        onClick={handleLogout}
                                    >
                                        <span className="flex-1">
                                            Đăng xuất
                                        </span>
                                        <SignOut />
                                    </p>
                                </li>
                            </ul>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            ) : (
                <div>
                    {/* <ButtonLink href="/login">Đăng nhập</ButtonLink> */}
                    <ArrowLink className="text-gray-100" href="/login">
                        Đăng nhập
                    </ArrowLink>
                </div>
            )}
        </>
    );
};
