import Button from "@/components/buttons/Button";
import NextImage from "@/components/NextImage";
import UnderlineLink from "@/components/links/UnderlineLink";
import {
    calculateProgressDonation,
    currency,
    dayLeftUntil,
    numberWithCommas,
} from "@/lib/helper";
import { Donation } from "@/lib/types";
import { Clock, Heart } from "phosphor-react";

type DonationCardProps = {
    donation?: Donation;
    onDonate?: () => void;
} & React.ComponentProps<"div">;

const DonationCard: React.FC<DonationCardProps> = ({ donation, onDonate }) => {
    return (
        <div className="h-full w-full overflow-hidden rounded-2xl bg-white  text-left text-gray-900  shadow-lg">
            <div className="w-full">
                <NextImage
                    src={donation.image}
                    alt="donation image"
                    width="100%"
                    height={50}
                    objectFit="cover"
                    objectPosition="center center"
                />
            </div>
            <div className="flex flex-col space-y-4 p-4">
                <p className="text-sm font-bold uppercase text-green-600">
                    Gây quỹ
                </p>
                <div>
                    <h3
                        className="mb-1 cursor-pointer font-bold tracking-tight text-gray-900 dark:text-white"
                        onClick={onDonate}
                    >
                        {donation.name}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">
                        {donation.desc}
                    </p>
                </div>
                <div className="space-y-1">
                    <div className="flex justify-between tracking-wide">
                        <span className="font-bold text-green-600">
                            {calculateProgressDonation(donation)}%
                        </span>
                        <span className="font-bold">
                            {numberWithCommas(donation.target)}
                            {currency.vn}
                        </span>
                    </div>
                    <div>
                        <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200  dark:bg-gray-700">
                            <div
                                className="h-2.5 rounded-full bg-green-600"
                                style={{
                                    width: `${calculateProgressDonation(
                                        donation
                                    )}%`,
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Clock />
                            <p>
                                {dayLeftUntil(donation.expiryDate)} ngày còn lại
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-auto flex items-center space-x-2">
                    <Button
                        variant="light"
                        className="group px-4 text-green-700"
                        onClick={onDonate}
                    >
                        <Heart
                            weight="fill"
                            className="mr-2 transform text-lg transition-transform group-hover:scale-125"
                        />
                        Quyên góp
                    </Button>
                    <span className="text-sm font-semibold text-green-500 ">
                        {donation.donator.length} người đã ủng hộ
                    </span>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;
