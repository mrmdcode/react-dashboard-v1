import {createBrowserRouter} from "react-router-dom";
import Test2 from "../views/test_2";
import Test1 from "../views/test_1";
import AuthalbeLayout from "../components/AuthalbeLayout";
import NotFound from "../views/outher/NotFound";
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
    {
        path: '/dashboard',
        element : <AuthalbeLayout/>,
        children: [
            {
                path: '/dashboard/',
                element: <h2>dashboard</h2>,
            },

        ]
    },
    {
        path: '/f',
        element : <h2>front</h2>
    },
    {
        path: "*",
        element: <NotFound/>
    }
]);
