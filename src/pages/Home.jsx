import { useSelector } from "react-redux";
import { filterMoviesByCategory } from "../components/utils/movieUtils";
import HeroCarousel from "../components/ui/HeroCarousel";

const Home = () => {

    const { movies, categories } = useSelector((state) => state.movies);

    const heroSectionMovies = filterMoviesByCategory(movies, "Hero Section");

    return (
        <main className="mb-5">
            <HeroCarousel movies={heroSectionMovies} />
        </main>
    )
}

export default Home;