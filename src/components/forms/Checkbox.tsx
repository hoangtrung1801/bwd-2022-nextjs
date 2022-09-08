import clsxm from "@/lib/clsxm";
import React from "react";

type CheckboxProps = {} & React.ComponentProps<"input">;

const Checkbox: React.FC<CheckboxProps> = ({ className, ...rest }) => {
    return (
        <input
            className={clsxm(
                "h-4 w-4 rounded border-gray-200 text-green-600 focus:ring-primary-500",
                className
            )}
            type="checkbox"
            {...rest}
        />
    );
};

export default Checkbox;
