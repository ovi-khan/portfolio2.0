import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import PortfoliPage from "../pages/Portfolio/PortfoliPage";
import Blogdetails from "../pages/Blogdetails/Blogdetails";
import AboutUs from "../pages/AboutUs/AboutUs";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'services',
                element: <ServiceDetails/>
            },
            {
                path: '/about',
                element: <AboutUs />
            },
            {
                path: '/portfolio',
                element: <PortfoliPage />
            },
            {
                path:'/blog',
                element:<Blogdetails></Blogdetails>
            }
            // {
            //     path: 'services',
            //     element: <Ourservice/>
            // },
            // {
            //     path: 'ourteam',
            //     element: <OurTeam/>
            // },
            // {
            //     path: 'contact',
            //     element: <Contact/>
            // }

        ]
    }
])