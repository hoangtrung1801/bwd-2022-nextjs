import DonationCard from "@/components/DonationCard";
import { Donation } from "@/lib/types";

type DonationListProps = {
    donations: Donation[];
    onDonate: (donation: Donation) => void;
} & React.ComponentProps<"div">;

const DonationList: React.FC<DonationListProps> = ({ donations, onDonate }) => {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {donations.map((donation, id) => (
                <div key={donation.name}>
                    <DonationCard
                        donation={donation}
                        onDonate={() => onDonate(donation)}
                    />
                </div>
            ))}
        </div>
    );
};

export default DonationList;
