import {createBrowserRouter} from "react-router-dom";
import {behindRoutes} from "./behind";
import {frontRoutes} from "./front";
export const mainRoutes = createBrowserRouter([
    {
        path: "/",
        element :<h2>hello</h2>
    },
    behindRoutes,
    frontRoutes,
]);
