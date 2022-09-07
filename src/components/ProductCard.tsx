/* eslint-disable @next/next/no-img-element */
import Button from "@/components/buttons/Button";
import NextImage from "@/components/NextImage";
import clsxm from "@/lib/clsxm";
import useCartStore from "@/lib/stores/useCartStore";
import { Product } from "@/lib/types";
import { Heart, ShoppingCart, ShoppingCartSimple, Star } from "phosphor-react";
import React from "react";

type ProductCardProps = {
    product: Product;
    className?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
    const addItem = useCartStore((state) => state.addItem);

    const addItemIntoCart = () => {
        addItem(product);
    };

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
                    src={product.images[0]}
                    width="100%"
                    height={100}
                />
            </div>

            <div className="px-5 pb-5">
                <a href="#">
                    <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                        {product.name}
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
                        <Button
                            variant="outline"
                            className="px-3"
                            onClick={addItemIntoCart}
                        >
                            <ShoppingCartSimple className="" weight="bold" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
