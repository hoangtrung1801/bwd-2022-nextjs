import ButtonLink from "@/components/links/ButtonLink";
import UnstyledLink from "@/components/links/UnstyledLink";
import MenuButton from "@/components/MenuButton";
import NavCart from "@/components/NavCart";
import NavCartIcon from "@/components/NavCartIcon";
import links from "@/constant/links";
import { logoutUser } from "@/lib/authorization";
import clsxm from "@/lib/clsxm";
import useUserStore from "@/lib/stores/useUserStore";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { CaretDown, SignOut, User } from "phosphor-react";
import { Fragment, useState } from "react";

export default function Header() {
    const router = useRouter();
    const [navCartIsOpen, setNavCartIsOpen] = useState(false);
    const user = useUserStore((state) => state.user);

    const handleLogout = () => {
        logoutUser().then((success) => {
            if (success) {
                router.reload();
            }
        });
    };

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
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

                {/* Nav menu mobile */}
                <div className="md:hidden">
                    <Popover>
                        <Popover.Button className="md:hidden">
                            {({ open }) => <MenuButton opened={open} />}
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
                            <Popover.Panel className="absolute inset-0 top-[80px] z-10 px-4 py-4">
                                <ul className="flex flex-col rounded-lg border border-gray-100 bg-green-100 p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-gray-900">
                                    {links.map((link) => (
                                        <li key={link.label}>
                                            <UnstyledLink
                                                href={link.href}
                                                className={clsxm(
                                                    "text-md block rounded py-2 pr-4 pl-3 font-semibold text-dark transition-colors hover:bg-green-300  dark:text-white md:bg-transparent",
                                                    router.pathname ===
                                                        link.href &&
                                                        "bg-green-500 text-white hover:bg-green-500"
                                                )}
                                                aria-current="page"
                                            >
                                                {link.label}
                                            </UnstyledLink>
                                        </li>
                                    ))}
                                </ul>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                </div>

                {/* Nav menu */}
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

                {/* Header menu right */}
                <div className="hidden flex-1 items-center justify-end space-x-6 md:flex">
                    {/* <div
                        className="relative cursor-pointer"
                        onClick={() => setNavCartIsOpen(true)}
                    >
                        <FaShoppingCart
                            size="1.5rem"
                            className="transition-colors hover:text-primary-500"
                        />
                        <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-[50%] bg-primary-500">
                            <span className="text-sm font-semibold text-white">
                                0
                            </span>
                        </div>
                    </div> */}
                    <NavCartIcon setNavCartIsOpen={setNavCartIsOpen} />
                    {user !== null ? (
                        <>
                            {/* <div className="duration-400 flex cursor-pointer items-center space-x-1 font-primary text-lg font-medium text-gray-700 transition-colors hover:text-gray-900">
                                <User />
                                <h4 className="">{`${user.lastName} ${user.firstName}`}</h4>
                                <CaretDown />
                            </div> */}
                            <Popover className="relative">
                                <Popover.Button className="duration-400 flex cursor-pointer items-center space-x-1 font-primary text-lg font-medium text-gray-700 transition-colors hover:text-gray-900">
                                    {({ open }) => (
                                        <>
                                            <User />
                                            <h4 className="">{`${user.lastName} ${user.firstName}`}</h4>
                                            <CaretDown />
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
                                    <Popover.Panel className="absolute top-[30px] z-10">
                                        <ul className="flex min-w-[60px] flex-col border border-gray-100 bg-green-100 p-2 shadow-lg dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-gray-900">
                                            {/* {links.map((link) => (
                                                <li key={link.label}>
                                                    <UnstyledLink
                                                        href={link.href}
                                                        className={clsxm(
                                                            "text-md block rounded py-2 pr-4 pl-3 font-semibold text-dark transition-colors hover:bg-green-300  dark:text-white md:bg-transparent",
                                                            router.pathname ===
                                                                link.href &&
                                                                "bg-green-500 text-white hover:bg-green-500"
                                                        )}
                                                        aria-current="page"
                                                    >
                                                        {link.label}
                                                    </UnstyledLink>
                                                </li>
                                            ))} */}
                                            <li>
                                                <p
                                                    className="text-md flex cursor-pointer items-center space-x-2 rounded py-2 pr-4 pl-3 font-primary font-semibold text-dark transition-colors  hover:bg-green-300 dark:text-white md:bg-transparent"
                                                    onClick={handleLogout}
                                                >
                                                    <span>Đăng xuất</span>
                                                    <SignOut />
                                                </p>
                                            </li>
                                        </ul>
                                    </Popover.Panel>
                                </Transition>
                            </Popover>
                        </>
                    ) : (
                        <>
                            <ButtonLink href="/login">Đăng nhập</ButtonLink>
                        </>
                    )}
                </div>
            </div>

            {/* <Drawer isOpen={navCartIsOpen} setIsOpen={setNavCartIsOpen}>
                <h1>This is a drawer</h1>
            </Drawer> */}
            <NavCart isOpen={navCartIsOpen} setIsOpen={setNavCartIsOpen} />
        </header>
    );
}
