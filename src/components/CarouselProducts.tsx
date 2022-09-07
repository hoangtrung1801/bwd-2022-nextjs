import ProductCard from "@/components/ProductCard";
import { Product } from "@/lib/types";
import React from "react";

type CarouselProductsProps = {
    products: Product[];
} & React.ComponentProps<"div">;

const CarouselProducts: React.FC<CarouselProductsProps> = ({ products }) => {
    return (
        <div>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8">
                    <div>
                        <span className="inline-block h-1 w-12 bg-green-700"></span>

                        <h2 className="mt-1 text-2xl font-extrabold uppercase tracking-wide lg:text-3xl">
                            Phổ biến
                        </h2>
                        {/* <p className="mt-1 text-sm text-gray-400">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Possimus minima libero cumque perspiciatis
                            laudantium, quibusdam voluptatum maiores aliquid
                            deserunt quam eveniet error nulla nihil consequuntur
                            natus ullam obcaecati qui consectetur!
                        </p> */}
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
                        {products.map((product, id) => (
                            <ProductCard key={id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CarouselProducts;
