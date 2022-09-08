import ButtonLink from "@/components/links/ButtonLink";
import UnstyledLink from "@/components/links/UnstyledLink";
import MenuButton from "@/components/MenuButton";
import NavCart from "@/components/NavCart";
import NavCartIcon from "@/components/NavCartIcon";
import { motion } from "framer-motion";
import links from "@/constant/links";
import clsxm from "@/lib/clsxm";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
    CaretDown,
    ClipboardText,
    CreditCard,
    House,
    Info,
    List,
    ShoppingCartSimple,
    SignOut,
    X,
} from "phosphor-react";
import React, { Fragment, useRef, useState } from "react";

export default function Header() {
    const router = useRouter();
    const [hasUser] = useState(false);
    const [navCartIsOpen, setNavCartIsOpen] = useState(false);
    const [isOpenNarBar, setIsOpenNarBar] = useState(false);

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

    const onMouseEnter = (open) => {
        clearTimeout(timeout);
        if (open) return;
        return buttonRef.current?.click();
    };

    const onMouseLeave = (open) => {
        if (!open) return;
        timeout = setTimeout(() => closePopover(), timeoutDuration);
    };

    const handleOpenSubNavbar = () => {
        setIsOpenNarBar(true);
    };
    const handleCloseMobileMenu = () => {
        setIsOpenNarBar(false);
    };

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div>
                <div
                    className={`absolute inset-0 z-10 flex h-auto w-full flex-col bg-white dark:bg-gray-900 md:hidden`}
                >
                    <div className="flex h-[80px] items-center justify-between border-b border-gray-200 px-6 dark:border-gray-700">
                        {/* nav mobile menu */}
                        {isOpenNarBar ? (
                            <button
                                onClick={handleCloseMobileMenu}
                                aria-label="close menu"
                                className="rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                            >
                                <X size={32} weight="bold" />
                            </button>
                        ) : (
                            <button
                                onClick={handleOpenSubNavbar}
                                className="md-hidden"
                            >
                                <List size={32} weight="bold" />
                            </button>
                        )}

                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setNavCartIsOpen(true)}
                                className="flex items-center gap-2 rounded-md border-2 border-green-700 px-2 py-1 text-green-700"
                            >
                                <ShoppingCartSimple size={20} weight="bold" />
                            </button>
                            {hasUser ? (
                                <div className="w-full">
                                    <Popover className="relative">
                                        {({ open }) => {
                                            return (
                                                <>
                                                    <div
                                                        onMouseLeave={onMouseLeave.bind(
                                                            null,
                                                            open
                                                        )}
                                                    >
                                                        <Popover.Button
                                                            ref={buttonRef}
                                                            className={`
                                                    ${
                                                        open
                                                            ? ""
                                                            : "text-opacity-90"
                                                    }
                                                    group inline-flex items-center justify-center rounded-md border-2 border-solid border-green-700 bg-white px-2 py-1 text-base font-medium text-black hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                                                            onMouseEnter={onMouseEnter.bind(
                                                                null,
                                                                open
                                                            )}
                                                            onMouseLeave={onMouseLeave.bind(
                                                                null,
                                                                open
                                                            )}
                                                        >
                                                            <span
                                                                style={{
                                                                    color: "black",
                                                                }}
                                                            >
                                                                Tuan
                                                            </span>
                                                            <CaretDown
                                                                size={20}
                                                                weight="bold"
                                                            />
                                                        </Popover.Button>
                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-200"
                                                            enterFrom="opacity-0 translate-y-1"
                                                            enterTo="opacity-100 translate-y-0"
                                                            leave="transition ease-in duration-150"
                                                            leaveFrom="opacity-100 translate-y-0"
                                                            leaveTo="opacity-0 translate-y-1"
                                                        >
                                                            <Popover.Panel
                                                                style={{
                                                                    transform:
                                                                        "translate(-50%,50%)",
                                                                }}
                                                                className="absolute top-1/2 left-1/2 z-10 mt-0 w-auto px-4"
                                                            >
                                                                <div
                                                                    className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
                                                                    onMouseEnter={onMouseEnter.bind(
                                                                        null,
                                                                        open
                                                                    )}
                                                                    onMouseLeave={onMouseLeave.bind(
                                                                        null,
                                                                        open
                                                                    )}
                                                                >
                                                                    <div className="relative flex items-center justify-center bg-white">
                                                                        <Link
                                                                            href={
                                                                                "/signout"
                                                                            }
                                                                        >
                                                                            <a
                                                                                onClick={
                                                                                    handleCloseMobileMenu
                                                                                }
                                                                                className="flex items-center justify-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                                                            >
                                                                                <SignOut
                                                                                    size={
                                                                                        24
                                                                                    }
                                                                                    weight="bold"
                                                                                />

                                                                                <span className="ml-3 text-sm font-medium">
                                                                                    {" "}
                                                                                    Đăng
                                                                                    xuất{" "}
                                                                                </span>
                                                                            </a>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </Popover.Panel>
                                                        </Transition>
                                                    </div>
                                                </>
                                            );
                                        }}
                                    </Popover>
                                </div>
                            ) : (
                                <button className="text-base font-bold text-green-700 underline">
                                    <Link href={"/login"}>
                                        <a>Đăng nhập</a>
                                    </Link>
                                </button>
                            )}

                            <NavCart
                                isOpen={navCartIsOpen}
                                setIsOpen={setNavCartIsOpen}
                            />
                        </div>
                    </div>

                    {isOpenNarBar && (
                        <div
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                            className="fixed top-[80px] h-screen w-full"
                        >
                            <motion.div
                                initial={{ opacity: 0.5, y: -15, x: 0 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", duration: 0.5 }}
                                className=" absolute top-0 left-0 h-auto w-full bg-white p-4"
                            >
                                <nav className="flex flex-col space-y-1">
                                    <Link href={"/"}>
                                        <a
                                            onClick={handleCloseMobileMenu}
                                            className="flex items-center rounded-lg bg-gray-100 px-4 py-2 text-gray-700"
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
                                            className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            <ClipboardText
                                                size={24}
                                                weight="bold"
                                            />

                                            <span className="ml-3 text-sm font-medium">
                                                {" "}
                                                Phân loại{" "}
                                            </span>
                                        </a>
                                    </Link>

                                    <Link href={"/donate"}>
                                        <a
                                            onClick={handleCloseMobileMenu}
                                            className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            <CreditCard
                                                size={24}
                                                weight="bold"
                                            />

                                            <span className="ml-3 text-sm font-medium">
                                                {" "}
                                                Quyên góp{" "}
                                            </span>
                                        </a>
                                    </Link>

                                    <Link href={"/about-me"}>
                                        <a
                                            onClick={handleCloseMobileMenu}
                                            className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
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
            </div>

            {/* nav pc menu */}

            <div className="layout flex h-[80px] items-center justify-between">
                <UnstyledLink
                    href="/"
                    className="flex-1 font-bold hover:text-gray-600"
                >
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        layout="fixed"
                        width={"160"}
                        height={80}
                        objectFit="cover"
                    />
                </UnstyledLink>
                <nav className="hidden md:block">
                    <ul className="flex items-center justify-between space-x-8">
                        {links.map(({ href, label }) => (
                            <li key={`${href}${label}`}>
                                <UnstyledLink
                                    href={href}
                                    className="duration-400 text-lg font-medium text-gray-900 transition-colors hover:text-green-500"
                                >
                                    <span
                                        className={`border-green-500 py-1 ${clsxm(
                                            router.pathname === href &&
                                                "border-b-2"
                                        )}`}
                                    >
                                        {label}
                                    </span>
                                </UnstyledLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="hidden flex-1 items-center justify-end space-x-6 md:flex">
                    <NavCartIcon setNavCartIsOpen={setNavCartIsOpen} />
                    <ButtonLink href="/login">Đăng nhập</ButtonLink>
                </div>
            </div>
            <NavCart isOpen={navCartIsOpen} setIsOpen={setNavCartIsOpen} />
        </header>
    );
}
