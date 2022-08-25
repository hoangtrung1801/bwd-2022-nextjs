import { Product } from "@/lib/types";
import { NextApiRequest, NextApiResponse } from "next";

export default function product(req: NextApiRequest, res: NextApiResponse) {
    const products: Product[] = [
        {
            id: "1",
            name: "Limited Edition Sports Trainer",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam optio cumque tenetur, accusantium officia distinctio consequuntur impedit nulla exercitationem velit.",
            category: "shoes",
            images: [
                "https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80",
            ],
            price: 100,
            stock: 10,
        },
        {
            id: "2",
            name: "Limited Edition Sports Trainer",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam optio cumque tenetur, accusantium officia distinctio consequuntur impedit nulla exercitationem velit.",
            category: "shoes",
            images: [
                "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
            ],
            price: 100,
            stock: 10,
        },
        {
            id: "3",
            name: "Limited Edition Sports Trainer",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam optio cumque tenetur, accusantium officia distinctio consequuntur impedit nulla exercitationem velit.",
            category: "shoes",
            images: [
                "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
            ],
            price: 100,
            stock: 10,
        },
        {
            id: "4",
            name: "Limited Edition Sports Trainer",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam optio cumque tenetur, accusantium officia distinctio consequuntur impedit nulla exercitationem velit.",
            category: "shoes",
            images: [
                "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            ],
            price: 100,
            stock: 10,
        },
    ];

    const id = req.query.id;
    const selectedProduct = products.find((product) => product.id === id);

    if (req.method === "GET") {
        res.status(200).json({
            data: {
                product: selectedProduct,
            },
        });
    }
}
