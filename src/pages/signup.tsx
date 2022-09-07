import Button from "@/components/buttons/Button";
import Checkbox from "@/components/forms/Checkbox";
import InputField from "@/components/forms/InputField";
import Layout from "@/components/layout/Layout";
import PrimaryLink from "@/components/links/PrimaryLink";
import NextImage from "@/components/NextImage";
import { signupUser } from "@/lib/authorization";
import useModal from "@/lib/hooks/useModal";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";

type SignupInputs = {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    password2: string;
    phone: string;
    addressLine: string;
};

const SignupPage = () => {
    const { register, handleSubmit } = useForm();
    const { showModal } = useModal();
    const router = useRouter();

    const onSubmit: SubmitHandler<SignupInputs> = (data) => {
        const {
            email,
            password,
            firstName,
            lastName,
            addressLine,
            phone,
            password2,
        } = data;
        console.log(data);
        signupUser(email, firstName, lastName, password)
            .then((data) => {
                router.push("/");
            })
            .catch((error) => {
                showModal("Đăng ký thất bại", "Vui lòng thử lại!");
            });
    };

    return (
        <Layout className="py-0">
            <section className="min-h-main">
                <div className="grid h-full grid-cols-1 md:grid-cols-2">
                    <div className="">
                        <div className="flex h-full flex-1 flex-col justify-center overflow-hidden px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                            <div className="mx-auto w-full max-w-xl lg:w-96">
                                <div>
                                    <PrimaryLink href="/">LAVIE</PrimaryLink>
                                    <h2 className="mt-6 text-3xl font-extrabold text-gray-600">
                                        Đăng ký
                                    </h2>
                                </div>

                                <div className="mt-8">
                                    <div className="mt-6">
                                        <form
                                            className="space-y-4"
                                            onSubmit={handleSubmit(onSubmit)}
                                        >
                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="block text-sm font-medium text-gray-600"
                                                >
                                                    Email
                                                </label>
                                                <div className="mt-1">
                                                    <InputField
                                                        id="email"
                                                        name="email"
                                                        // placeholder="Địa chỉ email của bạn"
                                                        type="email"
                                                        {...register("email")}
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid w-full grid-cols-2 gap-x-4">
                                                <div>
                                                    <label
                                                        htmlFor="firstName"
                                                        className="block text-sm font-medium text-gray-600"
                                                    >
                                                        Tên
                                                    </label>
                                                    <div className="mt-1">
                                                        <InputField
                                                            id="firstName"
                                                            name="firstName"
                                                            // placeholder="Tên hiển thị"
                                                            type="text"
                                                            {...register(
                                                                "firstName"
                                                            )}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="lastName"
                                                        className="block text-sm font-medium text-gray-600"
                                                    >
                                                        Họ
                                                    </label>
                                                    <div className="mt-1">
                                                        <InputField
                                                            id="lastName"
                                                            name="lastName"
                                                            // placeholder="Tên hiển thị"
                                                            type="text"
                                                            {...register(
                                                                "lastName"
                                                            )}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-1">
                                                <label
                                                    htmlFor="password"
                                                    className="block text-sm font-medium text-gray-600"
                                                >
                                                    Mật khẩu
                                                </label>
                                                <div className="mt-1">
                                                    <InputField
                                                        id="password"
                                                        name="password"
                                                        type="password"
                                                        // placeholder="Mật khẩu"
                                                        autoComplete="password"
                                                        {...register(
                                                            "password"
                                                        )}
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-1">
                                                <label
                                                    htmlFor="password2"
                                                    className="block text-sm font-medium text-gray-600"
                                                >
                                                    Nhập lại mật khẩu
                                                </label>
                                                <div className="mt-1">
                                                    <InputField
                                                        id="password2"
                                                        name="password2"
                                                        type="password"
                                                        placeholder=""
                                                        autoComplete="password"
                                                    />
                                                </div>
                                            </div>

                                            {/* <div className="space-y-1">
                                                <label
                                                    htmlFor="phone"
                                                    className="block text-sm font-medium text-gray-600"
                                                >
                                                    Số điện thoại
                                                </label>
                                                <div className="mt-1">
                                                    <InputField
                                                        id="phone"
                                                        name="phone"
                                                        type="text"
                                                        placeholder=""
                                                    />
                                                </div>
                                            </div> */}

                                            <div>
                                                <Button
                                                    className="mt-2 w-full rounded-xl px-10 py-4 text-center"
                                                    type="submit"
                                                >
                                                    Đăng ký
                                                </Button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-first hidden md:block">
                        <div className="relative h-full w-full">
                            <NextImage
                                alt="login image"
                                src={
                                    "https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
                                }
                                layout="fill"
                                width={"100%"}
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default SignupPage;
