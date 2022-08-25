import Button from "@/components/buttons/Button";
import Drawer from "@/components/Drawer";
import ButtonLink from "@/components/links/ButtonLink";
import UnderlineLink from "@/components/links/UnderlineLink";
import NextImage from "@/components/NextImage";
import NumberCounter from "@/components/NumberCounter";
import useCartStore from "@/lib/stores/useCartStore";
import { Product } from "@/lib/types";
import { ShoppingBagOpen } from "phosphor-react";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

type NavCartProps = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const NavCart: React.FC<NavCartProps> = ({ isOpen, setIsOpen }) => {
    const cart = useCartStore((state) => state.cart);
    const addItem = useCartStore((state) => state.addItem);
    const removeItem = useCartStore((state) => state.removeItem);

    const addItemIntoCart = (product: Product) => {
        addItem(product);
    };

    const removeIntoFromCart = (product: Product) => {
        removeItem(product);
    };

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
                    ({cart.length} sản phẩm)
                </span>
            </div>
        );
    };

    return (
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} title={<NavCartTitle />}>
            <div className="relative mt-6 flex h-full flex-col justify-between px-4 pb-4 sm:px-6">
                <div className="mt-4 grid grid-cols-1 divide-y">
                    {cart.map(({ product, quantity }, id) => (
                        <div
                            className="flex w-full space-x-4 py-4"
                            key={product.id + id}
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
                                    count={quantity}
                                    increase={() => addItemIntoCart(product)}
                                    decrease={() => removeIntoFromCart(product)}
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
                    <ButtonLink
                        href="/checkout"
                        variant="light"
                        onClick={() => setIsOpen(false)}
                    >
                        Thanh toán
                    </ButtonLink>
                </div>
            </div>
        </Drawer>
    );
};

export default NavCart;
