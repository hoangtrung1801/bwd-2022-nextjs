import clsxm from "@/lib/clsxm";
import React from "react";

type InputProps = {} & React.ComponentProps<"input">;

const InputField: React.FC<InputProps> = ({ className, ...rest }) => {
    return (
        <input
            className={clsxm(
                "block w-full transform rounded-lg border border-transparent bg-gray-50 px-5 py-3 text-base text-gray-600 placeholder-gray-300 transition duration-500 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-300",
                className
            )}
            {...rest}
        />
    );
};

export default InputField;
