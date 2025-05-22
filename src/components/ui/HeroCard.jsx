import Button from "./Button";

import { formatDate } from "../../utils/dateUtils";

const HeroCard = ({movie}) => {
    return (
        <div className="relative w-full h-full">
            <img
                src={movie.heroImageUrl || movie.poster}
                alt={movie.name}
                className="absolute w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute z-10 w-full h-full px-6 py-4 flex flex-col items-start justify-end">
                <div className="max-w-6xl pb-6 mx-auto w-full mt-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-2 font-bold">{movie.name}</h2>
                    <p className="text-sm sm:text-base text-gray-300 mb-3">{formatDate(movie.releaseDate)}</p>
                    <Button isLink to={`/${movie.id}`}>
                        Book Tickets
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroCard;