import Room from "../pages/Room";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line
export default [
    {
        path: '/room',
        element: <Room />,
    },
    {
        path: '/',
        element: <Navigate to='/room' />
    }
]