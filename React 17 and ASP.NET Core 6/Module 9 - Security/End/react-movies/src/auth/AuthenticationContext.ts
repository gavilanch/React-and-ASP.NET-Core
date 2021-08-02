import React from 'react';
import {claim} from './auth.models';

const AuthenticationContext = React.createContext<{
    claims: claim[];
    update(claims: claim[]): void
}>({claims: [], update: () => {}});

export default AuthenticationContext;