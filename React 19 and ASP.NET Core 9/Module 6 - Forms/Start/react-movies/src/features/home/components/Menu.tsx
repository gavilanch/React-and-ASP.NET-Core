import { NavLink } from "react-router";

export default function Menu() {
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
                    </ul>
                </div>
            </div>
        </nav>
    )
}