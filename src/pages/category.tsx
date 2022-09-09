import {
    Filter,
    MobileFilter,
    SortFilter,
} from "@/components/CategoryComponents";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ProductCard";
import clsxm from "@/lib/clsxm";
import useProducts from "@/lib/hooks/useProducts";
import { Product } from "@/lib/types";
import { Funnel } from "phosphor-react";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CategoryPage = () => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false);
    const { products, isLoading: isProductsLoading } = useProducts();
    const [selectedProducts, setSelectedProducts] =
        React.useState<Product[]>(products);
    const [selectedCategories, setSelectedCategories] = React.useState<
        string[]
    >([]);
    const [sortOption, setSortOption] = React.useState<
        (products: Product[]) => Product[]
    >((products) => products);

    const onCheckCategory = (categoryName: string) => {
        setSelectedCategories([...selectedCategories, categoryName]);
    };

    const onUncheckCategory = (categoryName: string) => {
        const thatCategoryId = selectedCategories.indexOf(categoryName);
        setSelectedCategories([
            ...selectedCategories.slice(0, thatCategoryId),
            ...selectedCategories.slice(thatCategoryId + 1),
        ]);
    };

    const sortWithOption = (sort: (product: Product[]) => Product[]) => {
        console.log(sort);
        // setSortOption(sort);
        // console.log(sort(selectedProducts));
        // setSelectedProducts(sort(selectedProducts));
    };

    React.useEffect(() => {
        if (selectedCategories.length === 0) {
            setSelectedProducts(products);
        } else {
            setSelectedProducts(
                sortOption(
                    products.filter((product: Product) => {
                        let ok = false;
                        const categoryNamesProduct = product.categories.map(
                            (category) => category["name"]
                        );
                        selectedCategories.forEach((categoryName) => {
                            if (categoryNamesProduct.includes(categoryName))
                                ok = true;
                        });
                        return ok;
                    })
                )
            );
        }
    }, [products, selectedCategories, sortOption]);

    return (
        <Layout>
            <div className="bg-white">
                <div>
                    <MobileFilter
                        mobileFiltersOpen={mobileFiltersOpen}
                        setMobileFiltersOpen={setMobileFiltersOpen}
                    />

                    <main>
                        <div className="relative z-10 flex items-baseline justify-between border-b border-gray-200 pb-6">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                                Danh mục
                            </h1>

                            <div className="flex items-center">
                                <SortFilter sortWithOption={sortWithOption} />

                                {/* <button
                                    type="button"
                                    className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                                >
                                    <span className="sr-only">View grid</span>
                                    <GridFour
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                </button> */}

                                <button
                                    type="button"
                                    className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                    onClick={() => setMobileFiltersOpen(true)}
                                >
                                    <span className="sr-only">Filters</span>
                                    <Funnel
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                        </div>

                        <section
                            aria-labelledby="products-heading"
                            className="pt-6 pb-24"
                        >
                            <h2 id="products-heading" className="sr-only">
                                Category
                            </h2>

                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                                <div className="hidden lg:block">
                                    <Filter
                                        onCheckCategory={onCheckCategory}
                                        onUncheckCategory={onUncheckCategory}
                                    />
                                </div>

                                {/* Product grid */}
                                <div className="lg:col-span-3">
                                    <div className="grid w-full grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
                                        {isProductsLoading ? (
                                            Array(6)
                                                .fill(0)
                                                .map((data, index) => (
                                                    <div
                                                        key={index}
                                                        className={clsxm(
                                                            "max-w-sm overflow-auto rounded-md bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"
                                                        )}
                                                    >
                                                        <div className="mb-4">
                                                            <Skeleton
                                                                width="100%"
                                                                height="300px"
                                                                containerClassName="avatar-skeleton"
                                                            />
                                                        </div>
                                                        <div className="px-5 pb-5">
                                                            <a href="#">
                                                                <Skeleton
                                                                    count={3}
                                                                />
                                                            </a>
                                                            <Skeleton
                                                                count={1}
                                                                inline
                                                                width={120}
                                                            />
                                                            <div className="flex items-center justify-between">
                                                                <Skeleton
                                                                    inline
                                                                    width={90}
                                                                />

                                                                <Skeleton
                                                                    inline
                                                                    width={90}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                        ) : (
                                            <>
                                                {selectedProducts.map(
                                                    (product) => (
                                                        <div
                                                            key={product.id}
                                                            className=""
                                                        >
                                                            <ProductCard
                                                                className="mx-auto border border-gray-200 shadow-none"
                                                                product={
                                                                    product
                                                                }
                                                            />
                                                        </div>
                                                    )
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </Layout>
    );
};

export default CategoryPage;
