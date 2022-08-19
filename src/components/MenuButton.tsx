import clsxm from "@/lib/clsxm";
import React from "react";

type MenuButtonProps = {
    opened?: boolean;
    className?: string;
};

const MenuButton: React.FC<MenuButtonProps> = (
    { opened = false, className },
    ...rest
) => {
    return (
        <div
            className={clsxm(
                "tham-e-squeeze tham tham-w-8",
                opened && "tham-active",
                className
            )}
        >
            <div className="tham-box">
                <div className="tham-inner"></div>
            </div>
        </div>
    );
};

export default MenuButton;
