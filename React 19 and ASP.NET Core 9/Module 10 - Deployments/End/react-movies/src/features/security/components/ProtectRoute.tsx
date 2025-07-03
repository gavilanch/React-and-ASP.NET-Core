import { Outlet } from "react-router";
import Authorized from "./Authorized";

export default function ProtectRoute(props: ProtectRouteProps){
    return (
        <Authorized claims={props.claims} 
            authorized={<Outlet />}
            notAuthorized={<>You are not allowed to see this content</>}
        />
    )
}

interface ProtectRouteProps {
    claims: string[];
}