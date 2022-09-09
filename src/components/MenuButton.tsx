import clsxm from "@/lib/clsxm";
import React from "react";

type MenuButtonProps = {
    opened?: boolean;
    className?: string;
} & React.ComponentProps<"div">;

const MenuButton: React.FC<MenuButtonProps> = ({
    opened = false,
    className,
    ...rest
}) => {
    return (
        <div
            className={clsxm(
                "tham-e-squeeze tham tham-w-8",
                opened && "tham-active",
                className
            )}
            {...rest}
        >
            <div className="tham-box ">
                <div className="tham-inner bg-gray-100 hover:bg-white"></div>
            </div>
        </div>
    );
};

export default MenuButton;
