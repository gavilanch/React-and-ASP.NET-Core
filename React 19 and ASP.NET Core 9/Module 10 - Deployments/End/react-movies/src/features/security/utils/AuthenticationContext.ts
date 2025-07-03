import React from "react";
import type Claim from "../models/Claim.model";

const AuthenticationContext = React.createContext<AuthenticationContextProps>({claims: [], update: () => {}})

export default AuthenticationContext;

interface AuthenticationContextProps {
    claims: Claim[];
    update(claims: Claim[]): void;
}