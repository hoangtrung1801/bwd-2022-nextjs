import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "@/components/buttons/Button";

type DrawerProps = {
    title?: string;
    description?: string;
    children: React.ReactNode;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Drawer: React.FC<DrawerProps> = ({
    title = "",
    description = "",
    children,
    isOpen,
    setIsOpen,
}: DrawerProps) => {
    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog
                unmount={false}
                onClose={() => setIsOpen(false)}
                className="fixed inset-0 z-[60] overflow-y-auto"
            >
                <div className="flex h-screen w-3/4">
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-in duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-30"
                        entered="opacity-30"
                        leave="transition-opacity ease-out duration-300"
                        leaveFrom="opacity-30"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 z-[70] bg-black" />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div
                            className={`z-[80] flex w-full max-w-sm flex-col
                          justify-between overflow-hidden rounded-r-2xl bg-gray-500 p-6
                          text-left align-middle shadow-xl`}
                        >
                            <div>
                                <Dialog.Title className="text-2xl font-bold text-blue-500 md:text-4xl">
                                    {title}
                                </Dialog.Title>
                                <Dialog.Description>
                                    {description}
                                </Dialog.Description>
                                {children}
                            </div>
                            <div className="mt-10 self-center">
                                <Button onClick={() => setIsOpen(!isOpen)}>
                                    Close
                                </Button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export default Drawer;
