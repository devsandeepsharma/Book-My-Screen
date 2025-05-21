import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <h1 className="text-teal-600 text-2xl">Book My Screen</h1>
            <Outlet />
        </>
    )
}

export default Layout;