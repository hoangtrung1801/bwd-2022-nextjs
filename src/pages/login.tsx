import Button from "@/components/buttons/Button";
import Checkbox from "@/components/forms/Checkbox";
import InputField from "@/components/forms/InputField";
import Layout from "@/components/layout/Layout";
import PrimaryLink from "@/components/links/PrimaryLink";
import NextImage from "@/components/NextImage";

const LoginPage = () => {
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
                                        Đăng nhập
                                    </h2>
                                </div>

                                <div className="mt-8">
                                    <div className="mt-6">
                                        <form
                                            action="#"
                                            method="POST"
                                            className="space-y-6"
                                        >
                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="block text-sm font-medium text-gray-600"
                                                >
                                                    Địa chỉ email
                                                </label>
                                                <div className="mt-1">
                                                    <InputField
                                                        id="email"
                                                        name="email"
                                                        placeholder="Địa chỉ email của bạn"
                                                        type="email"
                                                    />
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
                                                        placeholder="Mật khẩu"
                                                        autoComplete="password"
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <Checkbox
                                                        id="remember-me"
                                                        name="remember-me"
                                                        type="checkbox"
                                                        placeholder="Your password"
                                                    />
                                                    <label
                                                        htmlFor="remember-me"
                                                        className="ml-2 block text-sm text-gray-600"
                                                    >
                                                        Nhớ đăng nhập
                                                    </label>
                                                </div>

                                                <div className="text-sm">
                                                    <PrimaryLink
                                                        href="#"
                                                        className="font-medium"
                                                    >
                                                        Quên mật khẩu?
                                                    </PrimaryLink>
                                                </div>
                                            </div>

                                            <div>
                                                <Button
                                                    className="w-full rounded-xl px-10 py-4 text-center"
                                                    type="submit"
                                                >
                                                    Đăng nhập
                                                </Button>
                                            </div>
                                        </form>
                                        <div className="relative my-4">
                                            <div className="absolute inset-0 flex items-center">
                                                <div className="w-full border-t border-gray-300"></div>
                                            </div>
                                            <div className="relative flex justify-center text-sm">
                                                <span className="bg-white px-2 text-gray-600">
                                                    Hoặc đăng nhập với
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <button
                                                type="submit"
                                                className="block w-full transform items-center rounded-xl border-2 border-white px-10 py-3.5 text-center text-base font-medium text-blue-600 shadow-md transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                            >
                                                <div className="flex items-center justify-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        className="h-6 w-6"
                                                        viewBox="0 0 48 48"
                                                    >
                                                        <defs>
                                                            <path
                                                                id="a"
                                                                d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                                                            ></path>
                                                        </defs>
                                                        <clipPath id="b">
                                                            <use
                                                                xlinkHref="#a"
                                                                overflow="visible"
                                                            ></use>
                                                        </clipPath>
                                                        <path
                                                            clipPath="url(#b)"
                                                            fill="#FBBC05"
                                                            d="M0 37V11l17 13z"
                                                        ></path>
                                                        <path
                                                            clipPath="url(#b)"
                                                            fill="#EA4335"
                                                            d="M0 11l17 13 7-6.1L48 14V0H0z"
                                                        ></path>
                                                        <path
                                                            clipPath="url(#b)"
                                                            fill="#34A853"
                                                            d="M0 37l30-23 7.9 1L48 0v48H0z"
                                                        ></path>
                                                        <path
                                                            clipPath="url(#b)"
                                                            fill="#4285F4"
                                                            d="M48 48L17 24l-4-3 35-10z"
                                                        ></path>
                                                    </svg>
                                                    <span className="ml-4">
                                                        {" "}
                                                        Log in with Google
                                                    </span>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
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

export default LoginPage;
