import Button from "@/components/buttons/Button";
import NextImage from "@/components/NextImage";
import NumberCounter from "@/components/NumberCounter";
import RatingStar from "@/components/RatingStar";
import clsxm from "@/lib/clsxm";
import CounterContext, {
    CounterContextType,
} from "@/lib/context/CounterContext";
import { currency, numberWithCommas } from "@/lib/helper";
import useModal from "@/lib/hooks/useModal";
import useCartStore from "@/lib/stores/useCartStore";
import { Product } from "@/lib/types";
import { Heart, ShoppingCart, Star } from "phosphor-react";
import React, { useContext } from "react";

type ProductViewProps = { product: Product } & React.ComponentProps<"div">;

const ProductView: React.FC<ProductViewProps> = ({ product }) => {
    return (
        <section>
            <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-6">
                <div>
                    <ProductImages product={product} />
                </div>
                <div>
                    <ProductDetail product={product} />
                </div>
            </div>
        </section>
    );
};

const ProductImages: React.FC<
    { product: Product } & React.ComponentProps<"div">
> = ({ product }) => {
    const [selectedImage, setSelectedImage] = React.useState(0);
    return (
        <div className="space-y-4">
            <div className="-ml-2 w-screen md:ml-0 md:w-full">
                <NextImage
                    alt={"Product image"}
                    src={product.images[selectedImage]}
                    width="100%"
                    height={80}
                    // objectFit="cover"
                    className="md:overflow-hidden md:rounded-md"
                />
            </div>
            <div className="hidden grid-cols-4 gap-x-3 md:grid">
                {product.images.map((image, id) => (
                    <NextImage
                        key={image}
                        alt={image}
                        src={image}
                        width="100%"
                        height={100}
                        objectFit="cover"
                        className={clsxm(
                            "overflow-hidden rounded-lg",
                            selectedImage === id && "outline outline-gray-200"
                        )}
                        onMouseEnter={() => setSelectedImage(id)}
                    />
                ))}
            </div>
        </div>
    );
};

const ProductDetail: React.FC<
    { product: Product } & React.ComponentProps<"div">
> = ({ product }) => {
    const amountItems = useContext<CounterContextType>(CounterContext);

    const addItem = useCartStore((state) => state.addItem);

    const { showModal } = useModal();

    const addItemIntoCart = () => {
        addItem(product, amountItems.count);
        showModal(
            "Thêm vào giỏ",
            "Bạn đã thêm sản phẩm vào giỏ hàng thành công!"
        );
    };

    return (
        <div className="flex flex-col space-y-7">
            <div className="space-y-2">
                <h1>{product.name}</h1>
                <h2 className="font-medium">
                    {numberWithCommas(product.price)}
                    {currency.vn}
                </h2>
                <div className="flex items-center space-x-3">
                    <RatingStar rating={4} />
                </div>
            </div>
            <div>
                <p className="text-sm font-medium">Số lượng</p>
                <NumberCounter
                    className="mt-2"
                    count={amountItems.count}
                    increase={amountItems.increase}
                    decrease={amountItems.decrease}
                />
            </div>
            <div className="w-ful flex items-center space-x-8 md:w-4/5">
                <Button
                    className="flex-1 space-x-2 rounded-md py-4 text-lg"
                    onClick={addItemIntoCart}
                >
                    <span>
                        <ShoppingCart size={24} weight="fill" />
                    </span>
                    <span>Thêm vào giỏ hàng</span>
                </Button>
                <span className="cursor-pointer">
                    <Heart size={28} className="text-gray-400" weight="bold" />
                </span>
            </div>
            <div>
                <p className="text-sm font-medium">Mô tả</p>
                <p className="mt-3 text-sm leading-6">{product.desc}</p>
            </div>
        </div>
    );
};

export default ProductView;
