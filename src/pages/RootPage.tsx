import { Outlet } from "react-router-dom";

import Navbar from '../components/navbar/Navbar';

const RootPage = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default RootPage;