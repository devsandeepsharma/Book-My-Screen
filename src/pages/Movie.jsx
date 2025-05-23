import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Button from "../components/ui/Button";
import BookTicket from "../components/form/BookTicket";

import { uiActions } from "../store/uiSlice";
import { findMovie } from "../utils/movieUtils";
import { formatDate } from "../utils/dateUtils";

const Movie = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const { movies } = useSelector((state) => state.movies);
    const { isModalOpen } = useSelector((state) => state.ui);

    const [selectedDate, setSelectedDate] = useState();

    const movie = findMovie(movies, id);

    const openModal = (movieName, date, time) => {
        setSelectedDate({ movieName, date, time })
        dispatch(uiActions.openModal());
    }

    if(!movie) return (
        <div className="w-full min-h-screen px-6 py-4">
            <div className="max-w-6xl pb-6 mx-auto w-full mt-auto">
                 <h1 class="text-xl text-center">Movie not found</h1>
            </div>
        </div>
    )

    return (
        <main>
            { isModalOpen && <BookTicket showDetails={selectedDate} /> }
            <div className="relative w-full h-[450px]">
                <img
                    src={movie.heroImageUrl || movie.poster}
                    alt={movie.name}
                    className="absolute w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute z-10 w-full h-full px-6 py-4 flex flex-col items-start justify-end">
                    <div className="max-w-6xl pb-6 mx-auto w-full mt-auto">
                        <h1 className="text-4xl md:text-5xl text-white font-bold">{movie.name}</h1>
                        <p className="mt-2 text-lg text-white">Directed by {movie.director} • {movie.language}</p>
                        <p className="text-sm text-gray-300 mt-1">Release Date: {formatDate(movie.releaseDate)}</p>
                        <p className="text-sm text-yellow-400 mt-1">IMDb: ⭐ {movie.imdbRating}</p>
                    </div>
                </div>
            </div>
            <div className="p-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-900">
                    <div className="hidden md:block md:col-span-1">
                        <img
                            src={movie.poster}
                            alt={`${movie.name} Poster`}
                            className="rounded shadow-lg w-full object-cover"
                        />
                    </div>
                    <div className="md:col-span-2 flex flex-col gap-8">
                        <div>
                            <h2 className="text-3xl font-semibold mb-4">About the Movie</h2>
                            <p className="leading-relaxed">{movie.description}</p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-semibold mb-4 -mt-2">Showtimes & Book Tickets</h2>
                            {
                                movie.showtime && Object.keys(movie.showtime).length > 0 ? (
                                    <div className="space-y-3">
                                    {
                                        Object.entries(movie.showtime).map(([date, timesObj]) => (
                                            <div key={date}>
                                                <p className="text-xl font-medium mb-1">{date}</p>
                                                <div className="flex gap-3 flex-wrap">
                                                    {
                                                        Object.values(timesObj).map((time) => (
                                                            <Button
                                                                key={time}
                                                                variant="link"
                                                                onClick={() => openModal(movie.name, date, time)}
                                                            >
                                                            {time}
                                                            </Button>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                ) : (
                                    <p  className="text-gray-500 col-span-full italic">
                                        No shows available for this movie currently.
                                    </p>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto md:mt-8">
                    <h2 className="text-3xl font-semibold my-4">Trailer</h2>
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            src={movie.trailer}
                            title={`${movie.name} Trailer`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-[300px] md:h-[500px] object-cover"
                        ></iframe>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Movie;