/* eslint-disable @next/next/no-img-element */
import ProductCard from "@/components/ProductCard";
import React from "react";

type CommonProductsProps = {
    products: any[];
} & React.ComponentProps<"div">;

const CommonProducts: React.FC<CommonProductsProps> = ({ products }) => {
    return (
        <div className="bg h-full w-full">
            <div className="px-4 py-8">
                <div className="mb-5 text-center text-gray-900">
                    <h2 className="mb-2 text-2xl font-extrabold uppercase tracking-wide">
                        Đặc biệt
                    </h2>
                    <div className="flex h-1 w-full flex-row justify-center">
                        <svg
                            className="h-1 w-32 text-green-600"
                            fill="currentColor"
                        >
                            <rect width="100%" height="100%"></rect>
                        </svg>
                    </div>
                    <p className="mt-1 text-sm text-gray-400">
                        This is a description
                    </p>
                </div>
                <div className="grid grid-cols-4 gap-x-4 gap-y-8">
                    {products.map((product, id) => (
                        <div key={id}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CommonProducts;
