import { useSelector } from "react-redux";
import { filterMoviesByCategory } from "../components/utils/movieUtils";
import HeroCarousel from "../components/ui/HeroCarousel";
import CategorySlider from "../components/ui/CategorySlider";

const Home = () => {

    const { movies, categories } = useSelector((state) => state.movies);

    const heroSectionMovies = filterMoviesByCategory(movies, "Hero Section");

    return (
        <main className="mb-5">
            <HeroCarousel movies={heroSectionMovies} />
            <div className="px-6 py-4">
                <div className="max-w-6xl mx-auto flex flex-col gap-4 md:gap-8">
                    {
                        categories.map(({ category }) => {
                            // if (category === "Hero Section") return null;

                            const filteredMovies = filterMoviesByCategory(movies, category);

                            if (filteredMovies.length === 0) return null;

                            return (
                                <CategorySlider
                                    key={category}
                                    title={category}
                                    movies={filteredMovies}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </main>
    )
}

export default Home;