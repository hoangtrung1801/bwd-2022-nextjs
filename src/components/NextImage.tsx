import Image, { ImageProps } from "next/image";
import * as React from "react";

import clsxm from "@/lib/clsxm";

type NextImageProps = {
    useSkeleton?: boolean;
    imgClassName?: string;
    blurClassName?: string;
    alt: string;
    width: string | number;
} & (
    | { width: string | number; height: string | number }
    | { layout: "fill"; width?: string | number; height?: string | number }
) &
    ImageProps;

/**
 *
 * @description Must set width using `w-` className
 * @param useSkeleton add background with pulse animation, don't use it if image is transparent
 */
export default function NextImage({
    useSkeleton = false,
    src,
    width,
    height,
    alt,
    className,
    imgClassName,
    blurClassName,
    ...rest
}: NextImageProps) {
    const [status, setStatus] = React.useState(
        useSkeleton ? "loading" : "complete"
    );
    const widthIsSet = className?.includes("w-") ?? false;

    return (
        <figure
            style={!widthIsSet ? { width: `${width}px` } : undefined}
            className={className}
        >
            <Image
                className={clsxm(
                    imgClassName,
                    status === "loading" &&
                        clsxm("animate-pulse", blurClassName)
                )}
                src={src}
                width={width}
                height={height}
                alt={alt}
                onLoadingComplete={() => setStatus("complete")}
                layout="responsive"
                placeholder="blur"
                blurDataURL={rgbDataURL(255, 255, 255)}
                {...rest}
            />
        </figure>
    );
}

// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1: number, e2: number, e3: number) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);

const rgbDataURL = (r: number, g: number, b: number) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${
        triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;
