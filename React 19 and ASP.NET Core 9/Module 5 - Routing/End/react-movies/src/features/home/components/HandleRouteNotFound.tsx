import { useEffect } from "react";
import { Navigate, useLocation } from "react-router";

export default function HandleRouteNotFound(){

    const location = useLocation();

    useEffect(() => {
        console.log(`Route not found: ${location.pathname}`)
    }, [location])

    return <Navigate to="/" />
}