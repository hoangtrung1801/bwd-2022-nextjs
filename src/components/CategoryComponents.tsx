import Drawer from "@/components/Drawer";
import Checkbox from "@/components/forms/Checkbox";
import useCategories from "@/hooks/useCategories";
import clsxm from "@/lib/clsxm";
import { Category } from "@/lib/types";
import { Menu, Disclosure, Transition } from "@headlessui/react";
import { CaretDown, Minus, Plus } from "phosphor-react";
import { Fragment } from "react";
import Skeleton from "react-loading-skeleton";

const sortOptions = [
    { name: "Phổ biến", href: "#", current: true },
    { name: "Xếp hàng cao nhất", href: "#", current: false },
    { name: "Mới nhất", href: "#", current: false },
    { name: "Giá thấp đến cao", href: "#", current: false },
    { name: "Giá cao đến thấp", href: "#", current: false },
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
];

type SortFilterProps = {};
export const SortFilter: React.FC<SortFilterProps> = ({}) => {
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

type FilterProps = {
    onCheckCategory: (categoryName: string) => void;
    onUncheckCategory: (categoryName: string) => void;
};
export const Filter: React.FC<FilterProps> = ({
    onCheckCategory,
    onUncheckCategory,
}) => {
    const { categories, isLoading } = useCategories();

    return (
        <div>
            <h3 className="sr-only">Filter</h3>
            <div className="divide-y">
                <ul
                    role="list"
                    className="space-y-4 pb-6 text-sm text-gray-900"
                >
                    {isLoading &&
                        Array(6)
                            .fill(0)
                            .map((_, id) => (
                                <Skeleton key={id} width="100%" height="30px" />
                            ))}

                    {categories.slice(1).map((category: Category) => (
                        <li
                            key={category.name}
                            className="flex select-none items-center"
                        >
                            {/* <a href={category.label}>{category.label}</a> */}
                            <Checkbox
                                value={category.name}
                                id={category.name}
                                onChange={(e) =>
                                    e.target.checked
                                        ? onCheckCategory(category.name)
                                        : onUncheckCategory(category.name)
                                }
                            />
                            <label htmlFor={category.name} className="ml-3">
                                {category.label}
                            </label>
                        </li>
                    ))}
                </ul>

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
                                                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
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

export const MobileFilter = ({ mobileFiltersOpen, setMobileFiltersOpen }) => {
    const { categories, isLoading } = useCategories();

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
            <form className="mt-4 divide-y border-t border-gray-200 py-6">
                <ul
                    role="list"
                    className="space-y-4 px-4 pb-6 text-sm text-gray-900"
                >
                    {isLoading &&
                        Array(6)
                            .fill(0)
                            .map((_, id) => (
                                <Skeleton key={id} width="100%" height="30px" />
                            ))}

                    {categories.map((category: Category) => (
                        <li
                            key={category.name}
                            className="flex select-none items-center"
                        >
                            {/* <a href={category.label}>{category.label}</a> */}
                            <Checkbox
                                value={category.name}
                                id={category.name}
                            />
                            <label htmlFor={category.name} className="ml-3">
                                {category.label}
                            </label>
                        </li>
                    ))}
                </ul>

                {filters.map((section) => (
                    <Disclosure as="div" key={section.id} className="py-6 px-4">
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
                                                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
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
