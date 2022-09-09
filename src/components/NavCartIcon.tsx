import clsxm from "@/lib/clsxm";
import useCartStore from "@/lib/stores/useCartStore";
import { ShoppingCartSimple } from "phosphor-react";
import React, { Dispatch, SetStateAction } from "react";

type NavCartIconProps = {
    setNavCartIsOpen: Dispatch<SetStateAction<boolean>>;
} & React.ComponentProps<"div">;

const NavCartIcon: React.FC<NavCartIconProps> = ({
    className,
    setNavCartIsOpen,
}) => {
    const cart = useCartStore((state) => state.cart);
    return (
        <div
            className={clsxm("relative cursor-pointer", className)}
            onClick={() => setNavCartIsOpen(true)}
        >
            <ShoppingCartSimple
                weight="bold"
                size="1.75rem"
                className="transition-colors hover:text-white"
            />
            <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-[50%] bg-gray-100">
                <span className="text-sm font-semibold text-green-600">
                    {cart.length}
                </span>
            </div>
        </div>
    );
};

export default NavCartIcon;
