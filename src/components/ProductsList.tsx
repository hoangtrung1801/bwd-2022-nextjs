import ProductCard from "@/components/ProductCard";
import clsxm from "@/lib/clsxm";
import { Product } from "@/lib/types";

type ProductListProps = {
    title: string;
    desc?: string;
    products: Product[];
} & React.ComponentProps<"div">;

const ProductList: React.FC<ProductListProps> = ({
    title,
    desc,
    products,
    className,
}) => {
    return (
        <div className={clsxm("", className)}>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8">
                    <div>
                        <span className="inline-block h-1 w-12 bg-green-600"></span>

                        <h2 className="mt-1 text-2xl font-extrabold uppercase tracking-wide lg:text-3xl">
                            {title}
                        </h2>
                        {/* <p className="mt-1 text-sm text-gray-400">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Possimus minima libero cumque perspiciatis
                            laudantium, quibusdam voluptatum maiores aliquid
                            deserunt quam eveniet error nulla nihil consequuntur
                            natus ullam obcaecati qui consectetur!
                        </p> */}
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
                        {products.slice(0, 4).map((product, id) => (
                            <div key={id}>
                                <ProductCard
                                    product={product}
                                    className="mx-auto"
                                />
                            </div>
                        ))}
                        {/* <a href="" className="block">
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
                        </a> */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductList;
