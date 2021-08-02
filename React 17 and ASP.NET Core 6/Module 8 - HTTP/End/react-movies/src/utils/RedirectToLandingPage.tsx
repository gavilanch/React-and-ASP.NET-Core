import { Redirect } from "react-router-dom";

export default function RedirectToLandingPage(){
    return <Redirect to={{pathname: '/'}} />
}