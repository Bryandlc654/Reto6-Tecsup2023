import { NavLink } from 'react-router-dom'
import logoExpresso from '../assets/img/expresso_menu.png';
import Carousel from '../pages/Corousel';

const Navbar = () => {
    return (
        <>
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <img src={logoExpresso} alt="LogoExpresso" className="nav__logo" width="32" height="32" />

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" aria-current="page" href="#">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/products" className="nav-link">Products</NavLink>
                                {/* <NavLink to="/products" className="nav-link">Products</NavLink> */}
                            </li>
                            <li className="nav-item">
                                <NavLink to="/clients" className="nav-link">Clients</NavLink>
                                {/* <NavLink to="/products" className="nav-link">Products</NavLink> */}
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">Contact</NavLink>
                                {/* <NavLink to="/products" className="nav-link">Products</NavLink> */}
                            </li>
                        </ul>
                        <form className="d-flex" role="search" id="searchForm">
                            <input className="form-control me-2" type="search" name="name" placeholder="Buscar Product" aria-label="Buscar Product" id="name" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>

                </div>
            </nav>
        </header>
        <Carousel />
        </>
    )
};

export default Navbar;