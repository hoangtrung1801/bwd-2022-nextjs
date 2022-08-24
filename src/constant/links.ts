import { Route } from "@/lib/types";

const links: Route[] = [
    {
        label: "Trang chủ",
        href: "/",
    },
    {
        label: "Danh mục",
        href: "/category",
        subcategories: [
            {
                label: "Vải",
                href: "/category?type=canvas",
            },
            {
                label: "Tre",
                href: "/category?type=bamboo",
            },
            {
                label: "Túi phân hủy",
                href: "/category?type=disposable-nilon",
            },
            {
                label: "Bàn chải",
                href: "/category?type=toothbrush",
            },
            {
                label: "Ống hút",
                href: "/category?type=straw",
            },
            {
                label: "Chai",
                href: "/category?type=bottle",
            },
            {
                label: "Ly",
                href: "/category?type=cup",
            },
            {
                label: "Khác",
                href: "/category?type=others",
            },
        ],
    },
    {
        label: "Quyên góp",
        href: "/donate",
    },
    {
        label: "Về chúng tôi",
        href: "/about-me",
    },
];

export default links;
