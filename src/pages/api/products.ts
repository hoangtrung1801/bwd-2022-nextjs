import { Product } from "@/lib/types";
import { NextApiRequest, NextApiResponse } from "next";

export default function products(req: NextApiRequest, res: NextApiResponse) {
    const products: Product[] = [];

    if (req.method === "GET") {
        res.status(200).json({
            data: {
                products,
            },
        });
    }
}
