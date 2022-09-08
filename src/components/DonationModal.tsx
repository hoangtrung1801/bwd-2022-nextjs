import Button from "@/components/buttons/Button";
import NextImage from "@/components/NextImage";
import clsxm from "@/lib/clsxm";
import { currency, numberWithCommas } from "@/lib/helper";
import { Donation } from "@/lib/types";
import { Dialog, Transition } from "@headlessui/react";
import { Clock, CreditCard, Heart } from "phosphor-react";
import React, { Fragment } from "react";

type DonationModalProps = {
    donation?: Donation;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
} & React.ComponentProps<"div">;

const donationAmounts = [50000, 100000, 200000, 500000];

const DonationModal: React.FC<DonationModalProps> = ({
    donation,
    isOpen,
    setIsOpen,
}) => {
    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    const onDonate = (amount) => {
        console.log(`${donation.name} is donated ${amount}`);
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-white text-center align-middle shadow-xl transition-all md:max-w-2xl">
                                <div className="flex w-full flex-col md:flex-row">
                                    <DonationView donation={donation} />
                                    <DonationAmount
                                        donation={donation}
                                        onDonate={onDonate}
                                    />
                                </div>
                                {/* <Dialog.Title
                                    as="h3"
                                    className="text-xl font-bold leading-6 text-gray-900"
                                >
                                    {donation?.name}
                                </Dialog.Title>
                                <div className="mt-2 text-sm text-gray-500">
                                    {donation?.desc}
                                </div>

                                <div className="mt-4">
                                    <Button
                                        variant="light"
                                        onClick={closeModal}
                                    >
                                        OK
                                    </Button>
                                </div> */}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

const DonationView: React.FC<{ donation: Donation }> = ({ donation }) => {
    return (
        <div className="overflow-hidden rounded-t-2xl md:basis-7/12 md:rounded-l-2xl md:rounded-tr-none">
            <NextImage
                src={donation?.image}
                alt="donation image"
                width="100%"
                height={50}
                objectFit="cover"
                objectPosition="center center"
            />
            <div className="space-y-4 bg-gray-50 p-4">
                <div className="space-y-1">
                    <div className="flex justify-between tracking-wide">
                        <span className="font-bold text-green-600">50%</span>
                        <span className="font-bold">
                            {numberWithCommas(donation.target)}
                            {currency.vn}
                        </span>
                    </div>
                    <div>
                        <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                            <div
                                className="h-2.5 rounded-full bg-green-600"
                                style={{
                                    width: "45%",
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Clock />
                            <p>16 days left</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="mb-1 cursor-pointer font-bold tracking-tight text-gray-900 dark:text-white">
                        {donation.name}
                    </h3>
                    <p className="text-sm text-gray-500">{donation.desc}</p>
                </div>
            </div>
        </div>
    );
};

const DonationAmount: React.FC<{
    donation: Donation;
    onDonate: (amount) => void;
}> = ({ donation, onDonate }) => {
    const [selectedAmount, setSelectedAmount] = React.useState(0);

    return (
        <div className="relative md:basis-5/12">
            <div className="absolute inset-0 -top-[10%] ">
                <div className="flex flex-col rounded-b-2xl bg-gray-50 p-4 shadow-md md:min-h-[120%] md:rounded-2xl">
                    <div className="flex flex-col items-center py-4 text-center">
                        <CreditCard size={48} />
                        <h3 className="font-bold tracking-wide">Thanh toán</h3>
                    </div>
                    <div className="mt-8 flex flex-1 flex-col space-y-6">
                        <div className="grid grid-cols-2 gap-2">
                            {donationAmounts.map((amount, id) => (
                                <div
                                    key={amount}
                                    className={clsxm(
                                        "cursor-pointer rounded-xl border border-gray-100 bg-white py-4 shadow-md transition-all",
                                        amount === selectedAmount &&
                                            "border-green-400 bg-green-400/20"
                                    )}
                                    onClick={() => setSelectedAmount(amount)}
                                >
                                    <span className="text-lg font-semibold text-gray-600">
                                        {`${numberWithCommas(amount)}${
                                            currency.vn
                                        }`}
                                    </span>
                                </div>
                            ))}
                            <div
                                className={clsxm(
                                    "col-span-2 cursor-pointer rounded-xl border border-gray-100 bg-white shadow-md transition-all transition",
                                    !donationAmounts.includes(selectedAmount) &&
                                        selectedAmount !== 0 &&
                                        "border-green-400 bg-green-400/20"
                                )}
                                onClick={() => setSelectedAmount(0)}
                            >
                                <input
                                    type="number"
                                    name="amount"
                                    id="amount"
                                    className="h-full w-full border-none bg-transparent py-4 focus:border-none focus:outline-none focus:ring-0"
                                    value={selectedAmount}
                                    onChange={(e) =>
                                        setSelectedAmount(
                                            Number(e.target.value)
                                        )
                                    }
                                />
                            </div>
                        </div>
                        <div>
                            <Button
                                variant="primary"
                                className="group w-full py-4 font-semibold"
                                onClick={() => onDonate(selectedAmount)}
                            >
                                <Heart
                                    weight="fill"
                                    className="mr-2 transform text-lg transition-transform group-hover:scale-125"
                                />
                                Quyên góp
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationModal;
