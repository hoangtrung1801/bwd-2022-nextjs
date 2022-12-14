import Button from "@/components/buttons/Button";
import InputField from "@/components/forms/InputField";
import Layout from "@/components/layout/Layout";
import NextImage from "@/components/NextImage";
import { currency, numberWithCommas } from "@/lib/helper";
import useCursorLoading from "@/lib/hooks/useCursorLoading";
import useModal from "@/lib/hooks/useModal";
import { createOrder } from "@/lib/service";
import useCartStore from "@/lib/stores/useCartStore";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";

type CheckoutInputs = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
    addressLine: string;
    note: string;
    fundraisingAmount: number;
};

const SHIPPING_AMOUNT = 20000;

const CheckoutPage = () => {
    return (
        <Layout className="py-0">
            <section>
                <h1 className="sr-only">Checkout</h1>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <CheckoutItemInfo />
                    <CheckoutUserInfo />
                </div>
            </section>
        </Layout>
    );
};

const CheckoutItemInfo = () => {
    const cart = useCartStore((state) => state.cart);
    const getTotal = useCartStore((state) => state.getTotal);
    const getItemsTotal = useCartStore((state) => state.getItemsAmount);

    return (
        <div className="my-8 rounded-xl bg-green-600 py-12 md:rounded-none">
            <div className="mx-auto max-w-lg space-y-2 px-4 text-white lg:px-8">
                <div className="">
                    <h5 className="font-semibold text-green-300">Thanh toán</h5>
                    <p className="text-3xl font-bold tracking-tight">
                        {numberWithCommas(getTotal(SHIPPING_AMOUNT))}
                        {currency.vn}
                    </p>
                </div>
                <div className="">
                    <div className="flow-root">
                        <div className="divide-y divide-white/25 text-base font-medium">
                            {cart.map(({ product, quantity }, id) => (
                                <div className="flex py-6" key={id}>
                                    {/* <img
                                        className="h-24 w-24 flex-shrink-0 rounded-lg object-cover"
                                        // src="https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                                        src={product.images[0]}
                                        alt=""
                                    /> */}
                                    <NextImage
                                        alt={product.name}
                                        // src="h-24 w-24 flex-shrink-0 rounded-lg object-cover"
                                        src={product.images[0]}
                                        width={100}
                                        height={100}
                                        className="h-24 w-24 overflow-hidden rounded-lg"
                                        objectFit="cover"
                                    />

                                    <div className="ml-4 flex flex-1">
                                        <div className="flex flex-1 flex-col">
                                            <p className="">{product.name}</p>
                                            <p className="text-green-300">
                                                SL: {quantity}
                                            </p>
                                        </div>
                                        <div>
                                            <p>${product.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="space-y-4 py-6 text-green-300">
                                <div className="flex justify-between">
                                    <p>Tổng đơn hàng</p>
                                    <p>
                                        {numberWithCommas(getItemsTotal())}
                                        {currency.vn}
                                    </p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Phí giao hàng</p>
                                    <p>
                                        {SHIPPING_AMOUNT}
                                        {currency.vn}
                                    </p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Thuế</p>
                                    <p>0{currency.vn}</p>
                                </div>
                            </div>
                            <div className="flex justify-between py-6 text-lg">
                                <p>Tổng</p>
                                <p>
                                    {numberWithCommas(
                                        getTotal(SHIPPING_AMOUNT)
                                    )}
                                    {currency.vn}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CheckoutUserInfo = () => {
    const { register, handleSubmit } = useForm<CheckoutInputs>();

    const cart = useCartStore((state) => state.cart);
    const getItemsTotal = useCartStore((state) => state.getTotal);
    const cleartCart = useCartStore((state) => state.clearCart);

    const { showModal } = useModal();
    const { setCursorLoadingShow, setCursorLoadingOff } = useCursorLoading();

    const router = useRouter();

    const onSubmit: SubmitHandler<CheckoutInputs> = (data) => {
        setCursorLoadingShow();
        createOrder({
            total: getItemsTotal(SHIPPING_AMOUNT),
            items: [
                ...cart.map((item) => ({
                    productID: item.product.id,
                    quantity: item.quantity,
                })),
            ],
        })
            .then((data) => {
                setCursorLoadingOff();
                showModal(
                    "Thanh toán thành công 🎉",
                    "Đơn hàng của bạn sẽ được chuẩn bị và giao hàng tới. Cảm ơn bạn đã mua hàng!"
                );
                cleartCart();
                setTimeout(() => {
                    router.push("/");
                }, 1000);
            })
            .catch((error) => {
                setCursorLoadingOff();
                showModal("Thanh toán không thành công ⚠", error.message);
            });
    };

    return (
        <div className="bg-white md:order-first md:py-12">
            <div className="mx-auto max-w-lg md:px-4 lg:px-8">
                <div>
                    <h4 className="font-semibold">Thông tin liên hệ</h4>
                </div>
                <form
                    className="my-6 grid grid-cols-6 gap-4"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="col-span-3">
                        <label
                            className="mb-1 block text-sm text-gray-600"
                            htmlFor="first_name"
                        >
                            Tên
                        </label>

                        {/* <input
                            className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                            type="text"
                            id="frst_name"
                        /> */}
                        <InputField
                            type="text"
                            id="first_name"
                            variant="outline"
                            {...register("firstName")}
                        />
                    </div>

                    <div className="col-span-3">
                        <label
                            className="mb-1 block text-sm text-gray-600"
                            htmlFor="last_name"
                        >
                            Họ
                        </label>

                        <InputField
                            type="text"
                            id="last_name"
                            variant="outline"
                            {...register("lastName")}
                        />
                    </div>

                    <div className="col-span-6">
                        <label
                            className="mb-1 block text-sm text-gray-600"
                            htmlFor="email"
                        >
                            Email
                        </label>

                        <InputField
                            type="email"
                            id="email"
                            variant="outline"
                            {...register("email")}
                        />
                    </div>

                    <div className="col-span-6">
                        <label
                            className="mb-1 block text-sm text-gray-600"
                            htmlFor="phone"
                        >
                            Số điện thoại
                        </label>

                        <InputField
                            type="text"
                            id="phone"
                            variant="outline"
                            {...register("phone")}
                        />
                    </div>

                    {/* <fieldset className="col-span-6">
                        <legend className="mb-1 block text-sm text-gray-600">
                            Card Details
                        </legend>

                        <div className="-space-y-px rounded-lg bg-white shadow-sm">
                            <div>
                                <label
                                    className="sr-only"
                                    htmlFor="card-number"
                                >
                                    Card Number
                                </label>

                                <InputField
                                    variant="outline"
                                    className="relative rounded-t-lg rounded-b-none placeholder-gray-400 focus:z-10"
                                    type="text"
                                    name="card-number"
                                    id="card-number"
                                    placeholder="Card number"
                                />
                            </div>

                            <div className="flex -space-x-px">
                                <div className="flex-1">
                                    <label
                                        className="sr-only"
                                        htmlFor="card-expiration-date"
                                    >
                                        Expiration Date
                                    </label>

                                    <input
                                        className="relative w-full rounded-bl-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                        type="text"
                                        name="card-expiration-date"
                                        id="card-expiration-date"
                                        placeholder="MM / YY"
                                    />
                                </div>

                                <div className="flex-1">
                                    <label
                                        className="sr-only"
                                        htmlFor="card-cvc"
                                    >
                                        CVC
                                    </label>

                                    <input
                                        className="relative w-full rounded-br-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                        type="text"
                                        name="card-cvc"
                                        id="card-cvc"
                                        placeholder="CVC"
                                    />
                                </div>
                            </div>
                        </div>
                    </fieldset>
 */}
                    <fieldset className="col-span-6">
                        <legend className="mb-1 block text-sm text-gray-600">
                            Địa chỉ giao hàng
                        </legend>

                        <div className="-space-y-px rounded-lg bg-white shadow-sm">
                            <div>
                                <label className="sr-only" htmlFor="country">
                                    Country
                                </label>

                                {/* <select
                                    className="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm focus:z-10"
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                >
                                    <option>England</option>
                                    <option>Wales</option>
                                    <option>Scotland</option>
                                    <option>France</option>
                                    <option>Belgium</option>
                                    <option>Japan</option>
                                </select> */}
                                <InputField
                                    type="text"
                                    id="country"
                                    variant="outline"
                                    className="rounded-t-lg rounded-b-none border-gray-200"
                                    placeholder="Thành phố"
                                    {...register("country")}
                                />
                                {/* <Select
                                    className="rounded-t-lg rounded-b-none border border-gray-200 "
                                    data={[
                                        { value: "string" },
                                        { value: "hoangtrung1801" },
                                    ]}
                                    placeholder="Thành phố"
                                    name="city"
                                /> */}
                            </div>

                            <div>
                                <label
                                    className="sr-only"
                                    htmlFor="postal-code"
                                >
                                    Số nhà
                                </label>

                                <InputField
                                    className="rounded-b-lg rounded-t-none border-gray-200"
                                    variant="outline"
                                    type="text"
                                    name="adddresss"
                                    id="adddresss"
                                    autoComplete="adddresss"
                                    placeholder="Số nhà"
                                    {...register("addressLine")}
                                />
                            </div>
                        </div>
                    </fieldset>

                    <div className="col-span-6">
                        <label
                            className="mb-1 block text-sm text-gray-600"
                            htmlFor="email"
                        >
                            Lời nhắn
                        </label>

                        <textarea
                            className="w-full resize-y rounded-lg border-gray-200 p-2.5 text-sm placeholder-gray-300 shadow-sm focus:border-transparent"
                            placeholder="Lời nhắn bạn muốn gửi đén..."
                            {...register("note")}
                        />
                        {/* <InputField type="email" id="email" variant="outline" /> */}
                    </div>

                    <div className="col-span-6">
                        <label
                            className="mb-1 block text-sm text-gray-600"
                            htmlFor="email"
                        >
                            Quyên góp
                            <span className="ml-1 text-xs italic text-gray-400">
                                (không bắt buộc)
                            </span>
                        </label>
                        <InputField
                            type="number"
                            id="donate_amount"
                            name="donate_amount"
                            variant="outline"
                            placeholder="100.000"
                            {...register("fundraisingAmount")}
                        />
                        <p className="mt-1 text-xs text-gray-400">
                            Số tiền bạn quyên góp sẽ chuyển trực tiếp tới quỹ từ
                            thiện bảo bệ môi trường.
                        </p>
                    </div>

                    <hr className="col-span-6 my-4 w-full" />

                    <div className="col-span-6 flex flex-row-reverse">
                        <Button
                            variant="primary"
                            className="text-md px-6"
                            type="submit"
                        >
                            Thanh toán
                        </Button>
                        {/* <button
                            className="block w-full rounded-lg bg-black p-2.5 text-sm text-white"
                            type="submit"
                        >
                            Pay Now
                        </button> */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckoutPage;
