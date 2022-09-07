import Button from "@/components/buttons/Button";
import NextImage from "@/components/NextImage";
import RatingStar from "@/components/RatingStar";
import { API_SERVER_URL } from "@/constant/env";
import fetcher from "@/lib/fetcher";
import useModal from "@/lib/hooks/useModal";
import { addReview } from "@/lib/service";
import useUserStore from "@/lib/stores/useUserStore";
import { Product } from "@/lib/types";
import products from "@/pages/api/products";
import moment from "moment";
import { useRouter } from "next/router";
import { Paperclip, Smiley } from "phosphor-react";
import React from "react";

type ProductReviewsProps = {
    product: Product;
};

const ProductReviews: React.FC<ProductReviewsProps> = ({ product }) => {
    // const reviews = [
    //     {
    //         username: "hoangtrung",
    //         reivewText:
    //             "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis reiciendis eum quidem nisi omnis accusamus commodi molestiae alias laudantium, saepe hic rem quaerat! Ex commodi minima nobis obcaecati ratione doloremque!",
    //         rating: 4,
    //     },
    //     {
    //         username: "hoangtrung",
    //         reivewText:
    //             "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis reiciendis eum quidem nisi omnis accusamus commodi molestiae alias laudantium, saepe hic rem quaerat! Ex commodi minima nobis obcaecati ratione doloremque!",
    //         rating: 4,
    //     },
    //     {
    //         username: "hoangtrung",
    //         reivewText:
    //             "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis reiciendis eum quidem nisi omnis accusamus commodi molestiae alias laudantium, saepe hic rem quaerat! Ex commodi minima nobis obcaecati ratione doloremque!",
    //         rating: 4,
    //     },
    // ];

    const user = useUserStore((state) => state.user);
    const [reviewUsers, setReviewUsers] = React.useState([]);
    const [reviewText, setReviewText] = React.useState("");
    const { showModal } = useModal();
    const router = useRouter();

    const onSubmitReivew = () => {
        console.log("submit review");
        addReview(product, user.id, reviewText, 5)
            .then((data) => {
                showModal("Đánh giá thành công", "");
            })
            .catch((error) => {});
    };

    React.useEffect(() => {
        Promise.all(
            product.reviews.map((review) => {
                return fetcher(
                    `${API_SERVER_URL}/api/users/${review.userID}`
                ).then((response) => response.data);
            })
        ).then((users) => {
            setReviewUsers(users);
        });
    }, [product.reviews]);

    return (
        <div className="divide-y">
            <div className="py-8">
                <h3 className="font-medium tracking-wide">Đánh giá</h3>
            </div>

            {user && (
                <div className="space-y-4 py-8 md:flex md:space-x-4 md:space-y-0">
                    <div className="flex flex-col space-y-4 md:flex-row">
                        <div className="flex flex-1 items-center space-x-2 space-y-1 md:block md:space-x-0 md:space-y-0">
                            <div className="inline-block overflow-hidden rounded-full">
                                <NextImage
                                    alt="User Avatar"
                                    // src={
                                    //     "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                                    // }
                                    src="/images/default-avatar.jpg"
                                    width={60}
                                    height={60}
                                    className=""
                                />
                            </div>
                            <p className="font-semibold">
                                {user?.firstName} {user?.lastName}
                            </p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="rounded-lg">
                            {/* <p className="text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ex aliquid voluptates quae magnam, labore
                            repudiandae soluta adipisci qui odit quisquam est
                            sit reiciendis voluptatibus animi maxime, facilis
                            eaque, quis fugit?
                        </p> */}
                            <textarea
                                className="h-[100px] w-full rounded-lg border-gray-200 p-2.5 text-sm text-gray-500 placeholder-gray-300 shadow-sm focus:border-transparent focus:ring-gray-300"
                                placeholder="Lời nhắn bạn muốn gửi đén..."
                                value={reviewText}
                                onChange={(e) => setReviewText(e.target.value)}
                            />
                            <div className="flex justify-between">
                                <div className="flex space-x-2 text-gray-500 ">
                                    <Smiley
                                        size={30}
                                        className="cursor-pointer"
                                    />
                                    <Paperclip
                                        size={30}
                                        className="cursor-pointer"
                                    />
                                </div>
                                <div>
                                    <Button
                                        variant="light"
                                        className="px-12"
                                        onClick={onSubmitReivew}
                                    >
                                        Đăng
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {product.reviews.map((review, id) => (
                <div
                    key={review.userID}
                    className="space-y-4 py-8 md:grid md:grid-cols-2"
                >
                    <div className="flex flex-col space-y-4 md:flex-row">
                        <div className="flex flex-1 items-center space-x-2 space-y-1 md:block md:space-x-0 md:space-y-0">
                            <div className="inline-block overflow-hidden rounded-full">
                                <NextImage
                                    alt="User Avatar"
                                    // src={
                                    //     "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                                    // }
                                    src="/images/default-avatar.jpg"
                                    width={60}
                                    height={60}
                                    className=""
                                />
                            </div>
                            <p className="font-semibold">
                                {reviewUsers[id]?.lastName}{" "}
                                {reviewUsers[id]?.firstName}
                            </p>
                            <p className="text-gray-500 md:text-base">
                                {moment(review.createdAt).format("L")}
                                {/* {review.createdAt.toLocaleTimeString()} */}
                            </p>
                        </div>
                        <div className="flex-1">
                            <RatingStar
                                rating={review.rating}
                                showNumber={true}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="text-gray-500">{review.reviewText}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductReviews;
