import {createBrowserRouter} from "react-router-dom";
import {behindRoutes} from "./behind";
import {frontRoutes} from "./front";
import Test2 from "../views/test_2";
import Test1 from "../views/test_1";
export const mainRoutes = createBrowserRouter([
    {
        path: "/",
        element :<h2>hello</h2>
    },
    {
        path: "/t1",
        element: <Test1/>
    },
    {
        path: "/t2",
        element: <Test2/>
    },
    behindRoutes,
    frontRoutes,
]);
