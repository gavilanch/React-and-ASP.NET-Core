import { useContext, useEffect, useState } from "react";
import AuthenticationContext from "../utils/AuthenticationContext";

export default function Authorized(props: AuthorizedProps) {
    const [authorized, setAuthorized] = useState(false);
    const { claims } = useContext(AuthenticationContext);

    useEffect(() => {

        if (props.claims) {
            for (let i = 0; i < props.claims.length; i++){
                const claim = props.claims[i];
                const claimIndex = claims.findIndex(c => c.name === claim);
                if (claimIndex > -1){
                    setAuthorized(true);
                    return;
                }
            }

            setAuthorized(false);
        } else {
            setAuthorized(claims.length > 0);
        }

    }, [claims, props.claims])

    return (
        <>
            {authorized ? props.authorized : props.notAuthorized}
        </>
    )
}

interface AuthorizedProps {
    authorized: React.ReactNode;
    notAuthorized?: React.ReactNode;
    claims?: string[];
}