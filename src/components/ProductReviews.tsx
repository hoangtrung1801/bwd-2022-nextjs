import NextImage from "@/components/NextImage";
import RatingStar from "@/components/RatingStar";
import { Product } from "@/lib/types";
import React from "react";

type ProductReviewsProps = {
    product: Product;
};

const ProductReviews: React.FC<ProductReviewsProps> = ({ product }) => {
    const reviews = [
        {
            username: "hoangtrung",
            reivewText:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis reiciendis eum quidem nisi omnis accusamus commodi molestiae alias laudantium, saepe hic rem quaerat! Ex commodi minima nobis obcaecati ratione doloremque!",
            rating: 4,
        },
        {
            username: "hoangtrung",
            reivewText:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis reiciendis eum quidem nisi omnis accusamus commodi molestiae alias laudantium, saepe hic rem quaerat! Ex commodi minima nobis obcaecati ratione doloremque!",
            rating: 4,
        },
        {
            username: "hoangtrung",
            reivewText:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis reiciendis eum quidem nisi omnis accusamus commodi molestiae alias laudantium, saepe hic rem quaerat! Ex commodi minima nobis obcaecati ratione doloremque!",
            rating: 4,
        },
    ];

    return (
        <div className="divide-y">
            <div className="py-8">
                <h3 className="font-medium tracking-wide">Đánh giá</h3>
            </div>
            {reviews.map((review, id) => (
                <div
                    key={review.username + id}
                    className="space-y-4 py-8 md:grid md:grid-cols-2"
                >
                    <div className="flex flex-col space-y-4 md:flex-row">
                        <div className="flex flex-1 items-center space-x-2 space-y-1 md:block md:space-x-0 md:space-y-0">
                            <div className="inline-block overflow-hidden rounded-full">
                                <NextImage
                                    alt="User Avatar"
                                    src={
                                        "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                                    }
                                    width={60}
                                    height={60}
                                    className=""
                                />
                            </div>
                            <p className="font-semibold">{review.username}</p>
                            <p className="text-gray-500 md:text-base">
                                18/1/2003
                            </p>
                        </div>
                        <div className="flex-1">
                            <RatingStar rating={4} showNumber={true} />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="text-gray-500">{review.reivewText}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductReviews;
