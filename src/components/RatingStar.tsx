import { Star } from "phosphor-react";
import React from "react";

type RatingStarProps = {
    rating: number;
    size?: number;
    showNumber?: boolean;
} & React.ComponentProps<"div">;

const RatingStar: React.FC<RatingStarProps> = ({
    rating,
    size = 20,
    showNumber = false,
}) => {
    return (
        <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-[2px]">
                {Array(rating)
                    .fill(0)
                    .map((_, id) => (
                        <Star
                            key={id}
                            weight="fill"
                            className="text-yellow-300"
                            size={size}
                        />
                    ))}
                {Array(5 - rating)
                    .fill(0)
                    .map((_, id) => (
                        <Star
                            key={id}
                            weight="fill"
                            className="text-gray-300"
                            size={size}
                        />
                    ))}
            </div>
            {showNumber && <span>{rating}</span>}
        </div>
    );
};

export default RatingStar;
