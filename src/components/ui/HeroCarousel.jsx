import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation  } from 'swiper/modules';

import HeroCard from './HeroCard';

const HeroCarousel = ({ movies=[] }) => {
    return (
        <div className="relative h-[450px] w-full">
            <Swiper
                modules={[Autoplay, Pagination, Navigation ]}
                autoplay={{ delay: 3000 }}
                loop={true}
                pagination={{ clickable: true }}
                className="h-full"
            >
                {
                    movies.map( movie => (
                        <SwiperSlide key={movie.id}>
                            <HeroCard movie={movie} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default HeroCarousel;