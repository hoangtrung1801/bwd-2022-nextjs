import * as React from "react";

import Layout from "@/components/layout/Layout";
import ProductReviews from "@/components/ProductReviews";
import ProductView from "@/components/ProductView";
import CounterContext from "@/lib/context/CounterContext";
import useProduct from "@/lib/hooks/useProduct";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";

type ProductPageProps = {
    // product: Product;
};

const ProductPage: NextPage<ProductPageProps> = () => {
    const router = useRouter();

    const { product, isLoading, error } = useProduct(router.query.id);
    const [quantityItem, setQuantityItems] = React.useState(1);

    const incrementAmountItems = () => {
        setQuantityItems(quantityItem + 1);
    };
    const decreaseAmountItems = () => {
        setQuantityItems(quantityItem != 1 ? quantityItem - 1 : 1);
    };

    return (
        <Layout>
            {!isLoading && (
                <div className="">
                    <div className="">
                        <CounterContext.Provider
                            value={{
                                count: quantityItem,
                                increase: incrementAmountItems,
                                decrease: decreaseAmountItems,
                            }}
                        >
                            <ProductView product={product} />
                        </CounterContext.Provider>
                    </div>
                    <div>
                        <ProductReviews product={product} />
                    </div>
                </div>
            )}

            {isLoading && <PageSkeleton />}
        </Layout>
    );
};

const PageSkeleton = () => {
    return (
        <div>
            <div>
                <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-6">
                    <div>
                        <div className="space-y-4">
                            <div className="-ml-2 w-screen md:ml-0 md:w-full">
                                <Skeleton width="100%" height="500px" />
                            </div>
                            <div className="hidden grid-cols-4 gap-x-3 md:grid">
                                {Array(4)
                                    .fill(0)
                                    .map((_, id) => (
                                        <Skeleton
                                            width="100%"
                                            height="120px"
                                            key={id}
                                        />
                                    ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col space-y-7">
                            <div className="space-y-2">
                                <Skeleton
                                    width="100%"
                                    height="2rem"
                                    count={3}
                                />
                            </div>
                            <div>
                                <Skeleton width="25%" height="2rem" count={2} />
                            </div>
                            <div className="w-ful flex items-center space-x-8 md:w-4/5">
                                <Skeleton width="200px" height="2rem" />
                            </div>
                            <div>
                                <Skeleton width="100px" height="2rem" />
                                <Skeleton width="100%" height="8rem" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divide-y">
                <div className="py-8">
                    <h3 className="font-medium tracking-wide">Đánh giá</h3>
                </div>
                <div>
                    <div className="space-y-4 py-8 md:grid md:grid-cols-2">
                        <div className="flex flex-col space-y-4 md:flex-row">
                            <div className="flex flex-1 items-center space-x-2 space-y-1 md:block md:space-x-0 md:space-y-0">
                                <div className="inline-block overflow-hidden rounded-full">
                                    <Skeleton width={60} height={60} />
                                </div>
                                <p className="font-semibold">
                                    <Skeleton width="100px" height="2rem" />
                                    <Skeleton width="100px" height="2rem" />
                                </p>
                                <p className="text-gray-500 md:text-base">
                                    <Skeleton width="50px" height="2rem" />
                                    {/* {review.createdAt.toLocaleTimeString()} */}
                                </p>
                            </div>
                            <div className="flex-1">
                                <Skeleton width="100px" height="2rem" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <Skeleton width="100%" height="10rem" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// export const getStaticPaths: GetStaticPaths = async () => {
//     return {
//         paths: [{ params: { slug: "test" } }],
//         fallback: true,
//     };
// };

// export const getStaticProps: GetStaticProps<ProductPageProps> = async () => {
//     const product: Product = {
//         id: "1",
//         name: "Product",
//         description:
//             "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto natus est rem velit minima quas illum accusamus modi temporibus aut. Nisi, quod illum ipsa pariatur ratione voluptatum repellat eum blanditiis.",
//         price: 100,
//         stock: 100,
//         category: "canvas",
//         images: [
//             "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
//             "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80",
//             "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//         ],
//     };

//     return {
//         props: { product },
//     };
// };

export default ProductPage;
