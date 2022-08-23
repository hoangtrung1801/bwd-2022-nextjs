import clsxm from "@/lib/clsxm";
import React from "react";

enum InputFieldVariant {
    "primary",
    "outline",
}

type InputFieldProps = {
    variant?: keyof typeof InputFieldVariant;
} & React.ComponentProps<"input">;

const InputField: React.FC<InputFieldProps> = ({
    className,
    variant = "primary",
    ...rest
}) => {
    return (
        <input
            className={clsxm(
                // "block w-full transform rounded-lg border border-transparent bg-gray-50 px-5 py-3 text-base text-gray-600 placeholder-gray-300 transition duration-500 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-300",
                [
                    variant === "primary" && [
                        "block w-full transform rounded-lg border border-transparent bg-gray-50 px-5 py-3 text-base text-gray-600 placeholder-gray-300 transition duration-500 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-300",
                    ],
                    variant === "outline" && [
                        "w-full rounded-lg border-gray-200 p-2.5 text-sm placeholder-gray-300 shadow-sm focus:border-transparent",
                    ],
                ],
                className
            )}
            {...rest}
        />
    );
};

export default InputField;
