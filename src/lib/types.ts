export interface Route {
    label: string;
    href: string;
    subcategories?: Route[];
}
