import clsxm from "@/lib/clsxm";

type SpinnerProps = {
    color?: string;
} & React.ComponentProps<"div">;

const Spinner: React.FC<SpinnerProps> = ({
    className,
    color = "green-500",
}) => {
    return (
        <div
            className={clsxm(
                "flex h-full w-full items-center justify-center",
                className
            )}
        >
            <div
                className={clsxm(
                    "h-16 w-16 animate-spin rounded-full border-b-2",
                    `border-${color}`
                )}
            ></div>
        </div>
    );
};

export default Spinner;
