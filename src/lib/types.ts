export interface Route {
    label: string;
    href: string;
    subcategories?: Route[];
}

export interface Product {
    id: string;
    name: string;
    desc: string;
    price: number;
    stock?: number;
    category: string;
    size?: string[];
    images: string[];
    reviews?: {
        userID: string;
        reviewText: string;
        rating: number;
        createdAt: Date;
    }[];
}

export interface Category {
    id: string;
    name: string;
    products: Product[];
}

export interface User {
    id: string;
    email: string;
    // password: string;
    firstName: string;
    lastName: string;
    address?: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}
