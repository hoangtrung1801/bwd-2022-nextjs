export interface Route {
    label: string;
    href: string;
    subcategories?: Route[];
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
    size?: string[];
    images: string[];
    reviews?: {
        userId: string;
        reviewText: string;
        rating: number;
        createdAt: string;
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
    password: string;
    username: string;
    address?: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}
