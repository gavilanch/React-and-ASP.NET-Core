import type AuthenticationResponse from "../models/AuthenticationResponse.model";
import type Claim from "../models/Claim.model";

const tokenKey = 'token';
const expirationKey = 'token-expiration';

export function storeToken(authenticationResponse: AuthenticationResponse){
    localStorage.setItem(tokenKey, authenticationResponse.token);
    localStorage.setItem(expirationKey, authenticationResponse.expiration.toString());
}

export function getClaims(): Claim[]{
    const token = localStorage.getItem(tokenKey);
    const expiration = localStorage.getItem(expirationKey);

    if (!token || !expiration){
        return [];
    }

    const expirationDate = new Date(expiration);

    if (isNaN(expirationDate.getTime()) || expirationDate <= new Date()){
        logout();
        return [];
    }

    try {
        const payloadBase64 = token.split('.')[1];
        const payloadJson = atob(payloadBase64);
        const dataToken = JSON.parse(payloadJson);

        const claims: Claim[] = Object.entries(dataToken).map(([name, value]) => ({name, value: String(value)}));

        return claims;
    }
    catch(err){
        console.error(err);
        logout();
        return [];
    }
}

export function logout(){
    localStorage.removeItem(tokenKey);
    localStorage.removeItem(expirationKey);
}

export function getToken(){
    return localStorage.getItem(tokenKey);
}

export function userIsLoggedIn(){
    const claims = getClaims();
    return claims.length > 0;
}