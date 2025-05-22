import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import MovieCard from "./MovieCard";

const CategorySlider = ({ title, movies }) => {
    return (
        <div>
            <h3 id={movies[0].category.replace(" ", "-")} className="text-2xl font-bold mb-4">{title}</h3>
            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={12}
                slidesPerView={'auto'}
                grabCursor={true}
            >
                {
                    movies.map((movie) => (
                        <SwiperSlide key={movie.id} className="!w-[220px]">
                            <MovieCard movie={movie} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default CategorySlider;