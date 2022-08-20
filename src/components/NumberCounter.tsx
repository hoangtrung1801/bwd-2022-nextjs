import clsxm from "@/lib/clsxm";
import React from "react";

type NumberCounterProps = {
    count: number;
    increase: () => void;
    decrease: () => void;
} & React.ComponentProps<"div">;

const NumberCounter: React.FC<NumberCounterProps> = ({
    count,
    increase,
    decrease,
    className,
    ...rest
}) => {
    return (
        <div
            className={clsxm(
                "relative mt-1 flex h-10 w-fit flex-row rounded-lg border border-gray-300 bg-transparent",
                className
            )}
        >
            <button
                data-action="decrement"
                className=" h-full w-10 cursor-pointer rounded-l border-r border-gray-300 bg-transparent text-gray-600 outline-none hover:bg-gray-300 hover:text-gray-600"
                onClick={() => decrease()}
            >
                <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <span className="text-md flex w-10 items-center justify-center bg-transparent text-center font-semibold text-gray-700  outline-none hover:text-black focus:text-black focus:outline-none ">
                {count}
            </span>
            <button
                data-action="increment"
                className="h-full w-10 cursor-pointer rounded-r border-l border-gray-300 bg-transparent text-gray-600 hover:bg-gray-300 hover:text-gray-600"
                onClick={() => increase()}
            >
                <span className="m-auto text-2xl font-thin">+</span>
            </button>
        </div>
    );
};

export default NumberCounter;
