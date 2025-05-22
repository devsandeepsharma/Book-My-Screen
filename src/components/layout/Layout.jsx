import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "./Header";
import Footer from "./Footer";

import { CategoryService, MovieService } from "../../services/Database";
import { moviesActions } from "../../store/moviesSlice";

const Layout = () => {

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    const fetchAdminData = async () => {
        setLoading(true);
        try {
            const [categories, movies] = await Promise.all([
                CategoryService.fetchAll(),
                MovieService.fetchAll(),
            ]);

            dispatch(moviesActions.setCategories(categories));
            dispatch(moviesActions.setMovies(movies));
            console.log(categories);
            console.log(movies);
        } catch (error) {
            console.log("Error while fetching admin data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAdminData();
    }, []);

    return (
        <>
            <Header />
            {
                loading ? (
                    <div className="text-center p-4">Loading...</div>
                ) : (
                    <Outlet />
                )
            }
            <Footer />
        </>
    )
}

export default Layout;