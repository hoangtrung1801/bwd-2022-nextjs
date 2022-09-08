import { Donation } from "@/lib/types";

type OpenGraphType = {
    siteName: string;
    description: string;
    templateTitle?: string;
    logo?: string;
};
// !STARTERCONF This OG is generated from https://github.com/theodorusclarence/og
// Please clone them and self-host if your site is going to be visited by many people.
// Then change the url and the default logo.
export function openGraph({
    siteName,
    templateTitle,
    description,
    // !STARTERCONF Or, you can use my server with your own logo.
    logo = "https://og.<your-domain>/images/logo.jpg",
}: OpenGraphType): string {
    const ogLogo = encodeURIComponent(logo);
    const ogSiteName = encodeURIComponent(siteName.trim());
    const ogTemplateTitle = templateTitle
        ? encodeURIComponent(templateTitle.trim())
        : undefined;
    const ogDesc = encodeURIComponent(description.trim());

    return `https://og.<your-domain>/api/general?siteName=${ogSiteName}&description=${ogDesc}&logo=${ogLogo}${
        ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}` : ""
    }`;
}

export const currency = {
    en: "$",
    vn: "₫",
};

export function numberWithCommas(x: number | undefined) {
    if (!x) return "0";
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function calculateProgressDonation(donation: Donation) {
    let current = 0;
    donation.donator.forEach((e) => (current += e.amount));

    return ((current / donation.target) * 100).toFixed(0);
}

export function dayLeftUntil(expiryDate: Date | string) {
    if (typeof expiryDate === "string") expiryDate = new Date(expiryDate);

    const oneDay = 1000 * 60 * 60 * 24;

    return Math.ceil(
        (expiryDate.getTime() - new Date(Date.now()).getTime()) / oneDay
    );
}
