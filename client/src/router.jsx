import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/blogs",
        element: <Blogs />,
    }
]);

export default router;