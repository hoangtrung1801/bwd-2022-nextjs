import Spinner from "@/components/Spinner";
import useCursorLoadingStore from "@/lib/stores/useCursorLoadingStore";

type CursorLoadingProps = {} & React.ComponentProps<"div">;

const CursorLoading = ({}) => {
    const show = useCursorLoadingStore((state) => state.show);
    return (
        show && (
            <div className="fixed inset-0 z-[110] cursor-wait bg-black/20">
                <div className="relative h-full w-full items-center justify-center">
                    <Spinner color="gray-500" />
                </div>
            </div>
        )
    );
};

export default CursorLoading;
