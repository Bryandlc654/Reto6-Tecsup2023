import { createBrowserRouter } from "react-router-dom";

import LayoutPublic from "../layout/LayoutPublic";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Clients from "../pages/Clients";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/clients",
                element: <Clients />
            },
            {
                path: "/contact",
                element: <Contact />
            },
        ]
    },

]);