import { CartItem, Product } from "@/lib/types";
import create from "zustand";

export interface CartStoreState {
    cart: CartItem[];
    addItem: (product: Product, quantity?: number) => void;
    removeItem: (product: Product, quantity?: number) => void;
    getItemsAmount: () => number;
    getTotal: (shippingAmount: number) => number;
    clearCart: () => void;
}

const useCartStore = create<CartStoreState>((set, get) => ({
    cart: [],
    addItem: (product, quantity = 1) => {
        if (quantity <= 0)
            throw new Error("Quantity need to be greater than 0");

        console.log("product added " + product.id);
        const cart = get().cart;
        const thisProductIndex = cart.findIndex(
            (item) => item.product.id === product.id
        );

        if (thisProductIndex === -1) {
            set((state) => ({
                cart: [
                    ...state.cart,
                    {
                        product,
                        quantity: quantity,
                    },
                ],
            }));
        } else {
            cart[thisProductIndex].quantity =
                cart[thisProductIndex].quantity + quantity;
            set((state) => ({
                cart: [...cart],
            }));
        }
    },
    removeItem: (product, quantity = 1) => {
        if (quantity <= 0)
            throw new Error("Quantity need to be greater than 0");

        console.log("product removed " + product.id);
        const cart = get().cart;
        const thisProductIndex = cart.findIndex(
            (item) => item.product.id === product.id
        );

        if (thisProductIndex === -1) {
            console.log(cart);
            console.log(product);
            throw new Error("Product was not in cart");
        } else {
            if (cart[thisProductIndex].quantity - quantity === 0) {
                set((state) => ({
                    cart: [
                        ...cart.slice(0, thisProductIndex),
                        ...cart.slice(thisProductIndex + 1),
                    ],
                }));
            } else {
                cart[thisProductIndex].quantity =
                    cart[thisProductIndex].quantity - quantity;
                set((state) => ({
                    cart: [...cart],
                }));
            }
        }
    },
    getItemsAmount: () => {
        const cart = get().cart;
        let amount = 0;
        cart.forEach(({ product, quantity }) => {
            amount += product.price * quantity;
        });
        return amount;
    },
    getTotal: (shippingAmount) => {
        const itemsAmount = get().getItemsAmount();
        return itemsAmount + shippingAmount;
    },
    clearCart: () => {
        set({
            cart: [],
        });
    },
}));

export default useCartStore;
