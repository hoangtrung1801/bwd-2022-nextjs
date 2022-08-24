/* eslint-disable @next/next/no-img-element */
import Button from "@/components/buttons/Button";
import NextImage from "@/components/NextImage";
import clsxm from "@/lib/clsxm";
import { Product } from "@/lib/types";
import { Heart, ShoppingCart, ShoppingCartSimple, Star } from "phosphor-react";
import React from "react";

type ProductCardProps = {
    product: Product;
    className?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
    return (
        <div
            className={clsxm(
                "max-w-sm overflow-auto rounded-md bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
                className
            )}
        >
            <div className="mb-4">
                <NextImage
                    alt="image"
                    src="https://images.unsplash.com/photo-1491553895911-0055eca6402d"
                    // src={product.images[0]}
                    width="100%"
                    height={100}
                />
                {/* <img
                    className="rounded-t-lg p-8"
                    src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
                    alt="product image"
                /> */}
            </div>
            <div className="px-5 pb-5">
                <a href="#">
                    <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                        {product.name}
                        {/* Apple Watch Series 7 GPS, Aluminium Case, Starlight
                        Sport */}
                    </h3>
                </a>
                <div className="mt-2.5 mb-5 flex items-center">
                    {Array(5)
                        .fill(0)
                        .map((_, id) => (
                            <Star
                                className="h-4 w-4 text-yellow-300"
                                weight="fill"
                                key={id}
                            />
                        ))}
                    <span className="mr-2 ml-3 rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-200 dark:text-green-800">
                        5.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                        ${product.price}
                    </span>
                    <div className="space-x-1">
                        <Button variant="outline" className="px-3">
                            <Heart className="" weight="bold" />
                        </Button>
                        <Button variant="outline" className="px-3">
                            <ShoppingCartSimple className="" weight="bold" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;