import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import React from "react";

type FeaturedProductsProps = {
    products: any[];
} & React.ComponentProps<"div">;

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
    return (
        <div className="h-full w-full bg-[url(https://bwd2022.vercel.app/assets/donate-1.jpg)] bg-cover bg-fixed bg-center bg-no-repeat text-green-400">
            <div className="px-4 py-8">
                {/* <div>
                    <span className="inline-block h-1 w-12 bg-green-50"></span>

                    <h2 className="mt-1 text-2xl font-extrabold uppercase tracking-wide text-green-50 lg:text-3xl">
                        Nổi bật
                    </h2>
                </div> */}
                <div className="mb-5 text-center text-white">
                    <h2 className="mb-2 text-2xl font-extrabold uppercase tracking-wide">
                        Nổi bật
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
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Reiciendis, laborum pariatur! Officiis numquam
                        error necessitatibus nulla, impedit sapiente similique
                        omnis ipsam laboriosam deserunt harum! Temporibus
                        facilis optio vero natus commodi.
                    </p>
                </div>
                <div className="mt-8 grid grid-cols-4 gap-x-4 gap-y-8">
                    {products.map((product, id) => (
                        <div key={id} className="">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
                {/* <motion.div
                    ref={ref}
                    className="flex flex-row flex-wrap items-center justify-center md:justify-evenly"
                    variants={inViewScaleParentShow}
                    initial={"hidden"}
                    animate={inView && "visible"}
                    viewport={{ once: true }}
                >
                    {dataProduct.map((item) => (
                        <a href="" className="block">
                            <div className="flex justify-center">
                                <strong className="relative h-6 bg-black px-4 text-xs uppercase leading-6 text-white">
                                    {" "}
                                    New{" "}
                                </strong>
                            </div>

                            <img
                                alt="Trainer Product"
                                src="https://images.unsplash.com/photo-1491553895911-0055eca6402d"
                                className="-mt-3 h-96 w-full object-cover"
                            />

                            <h5 className="mt-4 text-sm text-black/90">
                                Limited Edition Sports Trainer
                            </h5>

                            <div className="mt-4 flex items-center justify-between font-bold">
                                <p className="text-lg">$189.99</p>

                                <p className="text-xs uppercase tracking-wide">
                                    6 Colors
                                </p>
                            </div>
                        </a>
                    ))}
                </motion.div> */}
            </div>
        </div>
    );
};

export default FeaturedProducts;
