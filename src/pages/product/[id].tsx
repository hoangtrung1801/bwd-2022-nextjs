import * as React from "react";

import Layout from "@/components/layout/Layout";
import useProduct from "@/lib/hooks/useProduct";
import { NextPage } from "next";
import { useRouter } from "next/router";
import ProductReviews from "@/components/ProductReviews";
import CounterContext from "@/lib/context/CounterContext";
import ProductView from "@/components/ProductView";

type ProductPageProps = {
    // product: Product;
};

const ProductPage: NextPage<ProductPageProps> = () => {
    const router = useRouter();
    const [amountItems, setAmountItems] = React.useState(0);
    const { product, isLoading, error } = useProduct(router.query.id);

    const incrementAmountItems = () => {
        setAmountItems(amountItems + 1);
    };
    const decreaseAmountItems = () => {
        setAmountItems(amountItems != 0 ? amountItems - 1 : 0);
    };

    // React.useEffect(() => {
    //     console.log(product);
    //     console.log("loading: " + isLoading);
    //     console.log("error: " + error);
    // }, [error, isLoading, product]);

    return (
        <Layout>
            {!isLoading && product && (
                <div className="">
                    <div className="">
                        <CounterContext.Provider
                            value={{
                                count: amountItems,
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
        </Layout>
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
