import {createBrowserRouter} from "react-router-dom";
import Test2 from "../views/test_2";
import Test1 from "../views/test_1";
import AuthalbeLayout from "../components/AuthalbeLayout";
import NotFound from "../views/outher/NotFound";
import MainPage from "../views/Dashboard/MainPage";
import ListUsers from "../views/Dashboard/ListUsers";
import NewUserAdmin from "../views/Dashboard/NewUserAdmin";
import NewUserShopManager from "../views/Dashboard/NewUserShopManager";
import NewUserWriter from "../views/Dashboard/NewUserWriter";
import NewUserSeoDev from "../views/Dashboard/NewUserSeoDev";
import NewUserNormal from "../views/Dashboard/NewUserNormal";
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
                element: <MainPage/>,
            },
            {
                path: "/dashboard/users/list-users",
                element: <ListUsers/>
            },
            {
                path : "/dashboard/create-user/admin",
                element : <NewUserAdmin/>,
            },
            {
                path : "/dashboard/create-user/shop-manager",
                element : <NewUserShopManager/>,
            },
            {
                path : "/dashboard/create-user/writer",
                element : <NewUserWriter/>,
            },
            {
                path : "/dashboard/create-user/SEO-Dev",
                element : <NewUserSeoDev/>,
            },
            {
                path : "/dashboard/create-user/normal",
                element : <NewUserNormal/>,
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
