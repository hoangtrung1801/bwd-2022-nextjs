import * as React from "react";

import Layout from "@/components/layout/Layout";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
    ArrowDown,
    CaretDown,
    Funnel,
    GridFour,
    Minus,
    Plus,
    X,
} from "phosphor-react";
import clsxm from "@/lib/clsxm";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/lib/types";
import Drawer from "@/components/Drawer";
import useProducts from "@/lib/hooks/useProducts";

const sortOptions = [
    { name: "Most Popular", href: "#", current: true },
    { name: "Best Rating", href: "#", current: false },
    { name: "Newest", href: "#", current: false },
    { name: "Price: Low to High", href: "#", current: false },
    { name: "Price: High to Low", href: "#", current: false },
];
const subCategories = [
    { name: "Totes", href: "#" },
    { name: "Backpacks", href: "#" },
    { name: "Travel Bags", href: "#" },
    { name: "Hip Bags", href: "#" },
    { name: "Laptop Sleeves", href: "#" },
];
const filters = [
    {
        id: "category",
        name: "Loại",
        options: [
            { value: "beige", label: "Beige", checked: false },
            { value: "blue", label: "Blue", checked: true },
            { value: "brown", label: "Brown", checked: false },
            { value: "green", label: "Green", checked: false },
            { value: "purple", label: "Purple", checked: false },
        ],
    },
    {
        id: "brand",
        name: "Nhãn hàng",
        options: [
            { value: "white", label: "White", checked: false },
            { value: "beige", label: "Beige", checked: false },
            { value: "blue", label: "Blue", checked: true },
            { value: "brown", label: "Brown", checked: false },
            { value: "green", label: "Green", checked: false },
            { value: "purple", label: "Purple", checked: false },
        ],
    },
    // {
    //     id: "category",
    //     name: "Category",
    //     options: [
    //         { value: "new-arrivals", label: "New Arrivals", checked: false },
    //         { value: "sale", label: "Sale", checked: false },
    //         { value: "travel", label: "Travel", checked: true },
    //         { value: "organization", label: "Organization", checked: false },
    //         { value: "accessories", label: "Accessories", checked: false },
    //     ],
    // },
    // {
    //     id: "size",
    //     name: "Size",
    //     options: [
    //         { value: "2l", label: "2L", checked: false },
    //         { value: "6l", label: "6L", checked: false },
    //         { value: "12l", label: "12L", checked: false },
    //         { value: "18l", label: "18L", checked: false },
    //         { value: "20l", label: "20L", checked: false },
    //         { value: "40l", label: "40L", checked: true },
    //     ],
    // },
];

const fakeData = [1, 2, 3, 4, 5];
const CategoryPage = () => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        const timeoutID = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        return () => clearTimeout(timeoutID);
    }, []);

    const { products } = useProducts();

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
                                <SortFilter />

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
                                    <Filter />
                                </div>

                                {/* Product grid */}
                                <div className="lg:col-span-3">
                                    <div className="grid w-full grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-3 xl:grid-cols-3">
                                        {isLoading ? (
                                            fakeData.map((data, index) => (
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
                                            <React.Fragment>
                                                {products.map((product) => (
                                                    <ProductCard
                                                        className="border border-gray-200 shadow-none"
                                                        product={product}
                                                        key={product.id}
                                                    />
                                                ))}
                                            </React.Fragment>
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

const SortFilter = () => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sắp xếp
                    <CaretDown
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                    />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {sortOptions.map((option) => (
                            <Menu.Item key={option.name}>
                                {({ active }) => (
                                    <a
                                        href={option.href}
                                        className={clsxm(
                                            option.current
                                                ? "font-medium text-gray-900"
                                                : "text-gray-500",
                                            active ? "bg-gray-100" : "",
                                            "block px-4 py-2 text-sm"
                                        )}
                                    >
                                        {option.name}
                                    </a>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

const Filter = () => {
    return (
        <div>
            <h3 className="sr-only">Filter</h3>
            <div className="divide-y">
                {/* <ul
                    role="list"
                    className="space-y-4 pb-6 text-sm font-medium text-gray-900"
                >
                    {subCategories.map((category) => (
                        <li key={category.name}>
                            <a href={category.href}>{category.name}</a>
                        </li>
                    ))}
                </ul> */}

                {filters.map((section) => (
                    <Disclosure as="div" key={section.id} className="py-6">
                        {({ open }) => (
                            <>
                                <h3 className="-my-3 flow-root">
                                    <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                        <span className="font-medium text-gray-900">
                                            {section.name}
                                        </span>
                                        <span className="ml-6 flex items-center">
                                            {open ? (
                                                <Minus
                                                    className="h-5 w-5"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <Plus
                                                    className="h-5 w-5"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </span>
                                    </Disclosure.Button>
                                </h3>
                                <Disclosure.Panel className="pt-6">
                                    <div className="space-y-4">
                                        {section.options.map(
                                            (option, optionIdx) => (
                                                <div
                                                    key={option.value}
                                                    className="flex items-center"
                                                >
                                                    <input
                                                        id={`filter-${section.id}-${optionIdx}`}
                                                        name={`${section.id}[]`}
                                                        defaultValue={
                                                            option.value
                                                        }
                                                        type="checkbox"
                                                        defaultChecked={
                                                            option.checked
                                                        }
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                    <label
                                                        htmlFor={`filter-${section.id}-${optionIdx}`}
                                                        className="ml-3 text-sm text-gray-600"
                                                    >
                                                        {option.label}
                                                    </label>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                ))}
            </div>
        </div>
    );
};

const MobileFilter = ({ mobileFiltersOpen, setMobileFiltersOpen }) => {
    const MobileFilterTitle = () => (
        <div>
            <h2 className="text-lg font-extrabold text-gray-900">Bộ lọc</h2>
        </div>
    );

    return (
        <Drawer
            isOpen={mobileFiltersOpen}
            setIsOpen={setMobileFiltersOpen}
            title={<MobileFilterTitle />}
        >
            <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only">Categories</h3>
                {/* <ul
                                    role="list"
                                    className="px-2 py-3 font-medium text-gray-900"
                                >
                                    {subCategories.map((category) => (
                                        <li key={category.name}>
                                            <a
                                                href={category.href}
                                                className="block px-2 py-3"
                                            >
                                                {category.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul> */}

                {filters.map((section) => (
                    <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                    >
                        {({ open }) => (
                            <>
                                <h3 className="-mx-2 -my-3 flow-root">
                                    <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                        <span className="font-medium text-gray-900">
                                            {section.name}
                                        </span>
                                        <span className="ml-6 flex items-center">
                                            {open ? (
                                                <Minus
                                                    className="h-5 w-5"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <Plus
                                                    className="h-5 w-5"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </span>
                                    </Disclosure.Button>
                                </h3>
                                <Disclosure.Panel className="pt-6">
                                    <div className="space-y-6">
                                        {section.options.map(
                                            (option, optionIdx) => (
                                                <div
                                                    key={option.value}
                                                    className="flex items-center"
                                                >
                                                    <input
                                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                                        name={`${section.id}[]`}
                                                        defaultValue={
                                                            option.value
                                                        }
                                                        type="checkbox"
                                                        defaultChecked={
                                                            option.checked
                                                        }
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                    <label
                                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                        className="ml-3 min-w-0 flex-1 text-gray-500"
                                                    >
                                                        {option.label}
                                                    </label>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                ))}
            </form>
        </Drawer>
    );
    // <Transition.Root show={mobileFiltersOpen} as={Fragment}>
    //     <Dialog
    //         as="div"
    //         className="relative z-[60] lg:hidden"
    //         onClose={setMobileFiltersOpen}
    //     >
    //         <Transition.Child
    //             as={Fragment}
    //             enter="transition-opacity ease-linear duration-300"
    //             enterFrom="opacity-0"
    //             enterTo="opacity-100"
    //             leave="transition-opacity ease-linear duration-300"
    //             leaveFrom="opacity-100"
    //             leaveTo="opacity-0"
    //         >
    //             <div className="fixed inset-0 bg-black bg-opacity-25" />
    //         </Transition.Child>

    //         <div className="fixed inset-0 z-40 flex">
    //             <Transition.Child
    //                 as={Fragment}
    //                 enter="transition ease-in-out duration-300 transform"
    //                 enterFrom="translate-x-full"
    //                 enterTo="translate-x-0"
    //                 leave="transition ease-in-out duration-300 transform"
    //                 leaveFrom="translate-x-0"
    //                 leaveTo="translate-x-full"
    //             >
    //                 <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
    //                     <div className="flex items-center justify-between px-4">
    //                         <h2 className="text-lg font-medium text-gray-900">
    //                             Bộ lọc
    //                         </h2>
    //                         <button
    //                             type="button"
    //                             className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
    //                             onClick={() => setMobileFiltersOpen(false)}
    //                         >
    //                             <span className="sr-only">Close menu</span>
    //                             <X className="h-6 w-6" aria-hidden="true" />
    //                         </button>
    //                     </div>

    //                     {/* Filters */}
    // <form className="mt-4 border-t border-gray-200">
    //     <h3 className="sr-only">Categories</h3>
    //     {/* <ul
    //         role="list"
    //         className="px-2 py-3 font-medium text-gray-900"
    //     >
    //         {subCategories.map((category) => (
    //             <li key={category.name}>
    //                 <a
    //                     href={category.href}
    //                     className="block px-2 py-3"
    //                 >
    //                     {category.name}
    //                 </a>
    //             </li>
    //         ))}
    //     </ul> */}

    //     {filters.map((section) => (
    //         <Disclosure
    //             as="div"
    //             key={section.id}
    //             className="border-t border-gray-200 px-4 py-6"
    //         >
    //             {({ open }) => (
    //                 <>
    //                     <h3 className="-mx-2 -my-3 flow-root">
    //                         <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
    //                             <span className="font-medium text-gray-900">
    //                                 {section.name}
    //                             </span>
    //                             <span className="ml-6 flex items-center">
    //                                 {open ? (
    //                                     <Minus
    //                                         className="h-5 w-5"
    //                                         aria-hidden="true"
    //                                     />
    //                                 ) : (
    //                                     <Plus
    //                                         className="h-5 w-5"
    //                                         aria-hidden="true"
    //                                     />
    //                                 )}
    //                             </span>
    //                         </Disclosure.Button>
    //                     </h3>
    //                     <Disclosure.Panel className="pt-6">
    //                         <div className="space-y-6">
    //                             {section.options.map(
    //                                 (
    //                                     option,
    //                                     optionIdx
    //                                 ) => (
    //                                     <div
    //                                         key={
    //                                             option.value
    //                                         }
    //                                         className="flex items-center"
    //                                     >
    //                                         <input
    //                                             id={`filter-mobile-${section.id}-${optionIdx}`}
    //                                             name={`${section.id}[]`}
    //                                             defaultValue={
    //                                                 option.value
    //                                             }
    //                                             type="checkbox"
    //                                             defaultChecked={
    //                                                 option.checked
    //                                             }
    //                                             className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
    //                                         />
    //                                         <label
    //                                             htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
    //                                             className="ml-3 min-w-0 flex-1 text-gray-500"
    //                                         >
    //                                             {
    //                                                 option.label
    //                                             }
    //                                         </label>
    //                                     </div>
    //                                 )
    //                             )}
    //                         </div>
    //                     </Disclosure.Panel>
    //                 </>
    //             )}
    //         </Disclosure>
    //     ))}
    // </form>
    //                 </Dialog.Panel>
    //             </Transition.Child>
    //         </div>
    //     </Dialog>
    // </Transition.Root>
};

export default CategoryPage;
