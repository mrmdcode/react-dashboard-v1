import AuthalbeLayout from "../components/AuthalbeLayout";

export const behindRoutes = {
    path: '/dashboard',
    element : <AuthalbeLayout/>,
    children: [
        {
            path: '/dashboard/',
            element: <h2>dashboard</h2>,
        },
    ]
}