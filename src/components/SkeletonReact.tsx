import clsxm from "@/lib/clsxm";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const fakeData = [1, 2, 3, 4];

export const BannerSkeleton = () => {
    return (
        <Skeleton
            containerClassName="avatar-skeleton"
            className="h-[calc(100vh-80px)] w-full"
        />
    );
};
export const CarouselProductSkeleton = () => {
    return (
        <div>
            <div className="mx-auto max-w-screen-xl px-4 py-8">
                <div>
                    <span className="inline-block h-1 w-12 bg-green-700"></span>
                    <h2 className="mt-1 text-2xl font-extrabold uppercase tracking-wide lg:text-3xl">
                        Phổ biến
                    </h2>
                </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
                {fakeData.map((data, index) => (
                    <div
                        key={index}
                        className={clsxm(
                            "max-w-sm overflow-auto rounded-md bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"
                        )}
                    >
                        <div className="mb-4">
                            <Skeleton
                                width="100%"
                                height="300px"
                                containerClassName="avatar-skeleton"
                            />
                        </div>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <Skeleton count={3} />
                            </a>
                            <Skeleton count={1} inline width={120} />
                            <div className="flex items-center justify-between">
                                <Skeleton inline width={90} />

                                <Skeleton inline width={90} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const FeaturedProductSkeleton = () => {
    return (
        <div className="h-full w-full bg-white bg-cover bg-fixed bg-center bg-no-repeat text-green-400">
            <div className="px-4 py-8">
                <div className="mb-5 text-center text-black">
                    <h2 className="mb-2 text-2xl font-extrabold uppercase tracking-wide">
                        Nổi bật
                    </h2>
                    <div className="flex h-1 w-full flex-row justify-center">
                        <svg
                            className="h-1 w-32 text-green-600"
                            fill="currentColor"
                        >
                            <rect width="100%" height="100%"></rect>
                        </svg>
                    </div>
                    <p className="mt-1 text-sm text-gray-400">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Reiciendis, laborum pariatur! Officiis numquam
                        error necessitatibus nulla, impedit sapiente similique
                        omnis ipsam laboriosam deserunt harum! Temporibus
                        facilis optio vero natus commodi.
                    </p>
                </div>
                <div className="mt-8 grid grid-cols-4 gap-x-4 gap-y-8">
                    {fakeData.map((data, index) => (
                        <div
                            key={index}
                            className={clsxm(
                                "max-w-sm overflow-auto rounded-md bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"
                            )}
                        >
                            <div className="mb-4">
                                <Skeleton
                                    width="100%"
                                    height="300px"
                                    containerClassName="avatar-skeleton"
                                />
                            </div>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <Skeleton count={3} />
                                </a>
                                <Skeleton count={1} inline width={120} />
                                <div className="flex items-center justify-between">
                                    <Skeleton inline width={90} />

                                    <Skeleton inline width={90} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const CommonProductSkeleton = () => {
    return (
        <div className="bg h-full w-full">
            <div className="px-4 py-8">
                <div className="mb-5 text-center text-gray-900">
                    <h2 className="mb-2 text-2xl font-extrabold uppercase tracking-wide">
                        Đặc biệt
                    </h2>
                    <div className="flex h-1 w-full flex-row justify-center">
                        <svg
                            className="h-1 w-32 text-green-600"
                            fill="currentColor"
                        >
                            <rect width="100%" height="100%"></rect>
                        </svg>
                    </div>
                    <p className="mt-1 text-sm text-gray-400">
                        This is a description
                    </p>
                </div>
                <div className="grid grid-cols-4 gap-x-4 gap-y-8">
                    {fakeData.map((data, index) => (
                        <div
                            key={index}
                            className={clsxm(
                                "max-w-sm overflow-auto rounded-md bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"
                            )}
                        >
                            <div className="mb-4">
                                <Skeleton
                                    width="100%"
                                    height="300px"
                                    containerClassName="avatar-skeleton"
                                />
                            </div>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <Skeleton count={3} />
                                </a>
                                <Skeleton count={1} inline width={120} />
                                <div className="flex items-center justify-between">
                                    <Skeleton inline width={90} />

                                    <Skeleton inline width={90} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
