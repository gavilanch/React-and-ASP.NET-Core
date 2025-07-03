import { NavLink } from "react-router";
import Authorized from "../../security/components/Authorized";
import { useContext } from "react";
import AuthenticationContext from "../../security/utils/AuthenticationContext";
import Button from "../../../components/Button";
import { logout } from "../../security/utils/HandleJWT";

export default function Menu() {

    const {claims, update} = useContext(AuthenticationContext);

    function getUserName(){
        return claims.filter(x => x.name === 'email')[0]?.value;
    }   

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">React Movies</NavLink>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <NavLink to="/movies/filter" className="nav-link">
                                Filter Movies</NavLink>
                        </li>

                        <Authorized claims={['isadmin']}
                            authorized={<>
                                <li className="nav-item">
                                    <NavLink to="/genres" className="nav-link">Genres</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/actors" className="nav-link">Actors</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/theaters" className="nav-link">Theaters</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/movies/create" className="nav-link">Create Movie</NavLink>
                                </li>

                                 <li className="nav-item">
                                    <NavLink to="/users" className="nav-link">Users</NavLink>
                                </li>
                            </>}
                        />


                    </ul>

                    <div className="d-flex">
                            <Authorized 
                                authorized={<>
                                    <span className="nav-link">Hello, {getUserName()}</span>
                                    <Button 
                                        className="nav-link btn btn-link ms-2"
                                    onClick={() => {
                                        logout();
                                        update([]);
                                    }}>Log out</Button>
                                </>}

                                notAuthorized={
                                    <>
                                        <NavLink to="/register"
                                        className="nav-link btn btn-link">Register</NavLink>
                                        <NavLink to="/login"
                                        className="nav-link btn btn-link ms-2">Login</NavLink>
                                    </>
                                }
                            />
                    </div>
                </div>
            </div>
        </nav>
    )
}