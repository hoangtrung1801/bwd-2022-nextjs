import Button from "@/components/buttons/Button";
import Drawer from "@/components/Drawer";
import UnderlineLink from "@/components/links/UnderlineLink";
import NextImage from "@/components/NextImage";
import NumberCounter from "@/components/NumberCounter";
import { Product } from "@/lib/types";
import { Dialog, Transition } from "@headlessui/react";
import { ShoppingBagOpen, X } from "phosphor-react";
import React, { Dispatch, Fragment, SetStateAction } from "react";

type NavCartProps = {
    listProducts: Product[];
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const NavCart: React.FC<NavCartProps> = ({
    listProducts,
    isOpen,
    setIsOpen,
}) => {
    const products: Product[] = [
        {
            id: "1",
            name: "Product",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto natus est rem velit minima quas illum accusamus modi temporibus aut. Nisi, quod illum ipsa pariatur ratione voluptatum repellat eum blanditiis.",
            price: 100,
            stock: 100,
            categories: ["hot", "canvas"],
            images: [
                "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80",
                "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            ],
        },
        {
            id: "1",
            name: "Product",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto natus est rem velit minima quas illum accusamus modi temporibus aut. Nisi, quod illum ipsa pariatur ratione voluptatum repellat eum blanditiis.",
            price: 100,
            stock: 100,
            categories: ["hot", "canvas"],
            images: [
                "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80",
                "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            ],
        },
    ];

    const NavCartTitle = () => {
        return (
            <div className="flex flex-col">
                <div>
                    <ShoppingBagOpen
                        size={48}
                        weight="fill"
                        className="text-green-500"
                    />
                </div>
                <h3 className="text-xl font-semibold leading-6 text-green-500">
                    Giỏ hàng của bạn
                </h3>
                <span className="text-xs font-medium leading-5 text-gray-500">
                    ({products.length} sản phẩm)
                </span>
            </div>
        );
    };

    return (
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} title={<NavCartTitle />}>
            <div className="relative mt-6 flex h-full flex-col justify-between px-4 pb-4 sm:px-6">
                <div className="mt-4 grid grid-cols-1 divide-y">
                    {products.map((product) => (
                        <div
                            className="flex w-full items-center space-x-4 py-4"
                            key={product.id}
                        >
                            <div>
                                <NextImage
                                    alt={product.name}
                                    src={product.images[0]}
                                    width={100}
                                    height="100%"
                                />
                            </div>
                            <div className="flex-1">
                                <h4 className="">{product.name}</h4>
                                <NumberCounter
                                    count={0}
                                    increase={() => null}
                                    decrease={() => null}
                                />
                                <UnderlineLink href="#">Xóa</UnderlineLink>
                            </div>
                            <div className="h-full">
                                <p className="text-base font-semibold text-gray-500">
                                    ${product.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="">
                    <Button variant="light" onClick={() => setIsOpen(false)}>
                        Thanh toán
                    </Button>
                </div>
            </div>
        </Drawer>
    );
};

export default NavCart;
