type SpinnerProps = {} & React.ComponentProps<"div">;

const Spinner: React.FC<SpinnerProps> = ({}) => {
    return (
        <div className="flex items-center justify-center ">
            <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-green-500"></div>
        </div>
    );
};

export default Spinner;
