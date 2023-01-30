import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
//redux
import { Provider } from "react-redux";
import store from '../store';

const LayoutPublic = () => {
    return (
        <Provider store={store}>
        <div className="bg-dark text light">
            <Navbar/>
            <main className="container">
                <Outlet/>
            </main>
            <Footer />
        </div>
        </Provider>
    )
};

export default LayoutPublic;