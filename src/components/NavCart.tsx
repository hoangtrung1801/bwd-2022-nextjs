import Button from "@/components/buttons/Button";
import UnderlineLink from "@/components/links/UnderlineLink";
import NextImage from "@/components/NextImage";
import NumberCounter from "@/components/NumberCounter";
import CounterContext from "@/lib/context/CounterContext";
import { Product } from "@/lib/types";
import { Dialog, Transition } from "@headlessui/react";
import { ShoppingBagOpen } from "phosphor-react";
import React, { Dispatch, Fragment, SetStateAction } from "react";

type NavCartProps = {
    listProducts: Product[];
    open: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const NavCart: React.FC<NavCartProps> = ({ listProducts, open, setIsOpen }) => {
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
    return (
        <Transition show={open} as={Fragment}>
            <Dialog onClose={() => setIsOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 z-[60] bg-black/30" />
                </Transition.Child>

                <div className="fixed inset-0 z-[70] overflow-y-auto">
                    <div className="relative flex min-h-full items-center justify-end text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-500"
                            enterFrom="-right-full "
                            enterTo="right-0"
                            leave="ease-out duration-300"
                            leaveFrom="right-0"
                            leaveTo="-right-full "
                        >
                            <Dialog.Panel className="absolute top-0 bottom-0 flex w-full max-w-md transform flex-col overflow-hidden rounded-l-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="div"
                                    className="flex flex-col"
                                >
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
                                </Dialog.Title>
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
                                                <h4 className="">
                                                    {product.name}
                                                </h4>
                                                <NumberCounter
                                                    count={0}
                                                    increase={() => null}
                                                    decrease={() => null}
                                                />
                                                <UnderlineLink href="#">
                                                    Xóa
                                                </UnderlineLink>
                                            </div>
                                            <div className="h-full">
                                                <p className="text-base font-semibold text-gray-500">
                                                    ${product.price}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto">
                                    <Button
                                        variant="light"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Thanh toán
                                    </Button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default NavCart;
