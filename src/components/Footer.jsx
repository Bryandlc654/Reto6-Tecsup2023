const Footer = () => {
    return (
        <>
        <footer className="text-white text-center text-lg-start bg-dark">

            <div className="container p-4">

                <div className="row mt-4">

                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">Expresso Coffee House</h5>

                        <p>
                            Para los Expresso Lovers, tenemos programas fidelity. Descubre las ventajas para los verdaderos amantes del café con nosotros.
                        </p>

                        <p>
                            El primer paso par entra en un mundo de experiencias Expresso Coffee House.
                        </p>

                        <div className="mt-4">

                            <a type="button" className="text-primary btn btn-floating btn-light btn-lg mx-1"><i
                                    className="fab fa-facebook-f"></i></a>

                            <a type="button" className="text-primary btn btn-floating btn-light btn-lg mx-1"><i
                                    class="fab fa-dribbble"></i></a>

                            <a type="button" className="text-primary btn btn-floating btn-light btn-lg mx-1"><i
                                    className="fab fa-twitter"></i></a>

                            <a type="button" className=" text-primary btn btn-floating btn-light btn-lg mx-1"><i
                                    className="fab fa-google-plus-g"></i></a>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4 pb-1">Search Coffee's</h5>

                        <div className="form-outline form-white mb-4">
                            <input type="text" id="formControlLg" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="formControlLg">Search</label>
                        </div>

                        <ul class="fa-ul" style={{marginLeft: "1.65em"}}>
                            <li class="mb-3">
                                <span className="fa-li"><i className="text-primary fas fa-home"></i></span><span
                                    className="ms-2">Jr. Ponciano Vigil # 720,
                                    Chota - Cajamarca</span>
                            </li>
                            <li className="mb-3">
                                <span className="fa-li"><i className="text-primary fas fa-envelope"></i></span><span
                                    className="ms-2">expresso@expressoch.com</span>
                            </li>
                            <li className="mb-3">
                                <span className="fa-li"><i className="text-primary fas fa-phone"></i></span><span className="ms-2">+
                                    968 450 004</span>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">Opening hours</h5>

                        <table className="table text-center text-white">
                            <tbody className="fw-normal">
                                <tr>
                                    <td>Lun - Sab:</td>
                                    <td>8am - 10pm</td>
                                </tr>
                                <tr>
                                    <td>Lun - Sab:</td>
                                    <td>8am - 10pm</td>
                                </tr>
                                <tr>
                                    <td>Sunday:</td>
                                    <td> - </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-dark text-center p-3">
                © 2020 Copyright: 
                <h7 className="text-white" href="www.expressoch.com"> mposiul</h7>
            </div>
        </footer>
        </>
    )
};

export default Footer;

/*

const Footer = () => {
    return (
        <>
        <footer className="text-white text-center text-lg-start bg-dark">

            <div className="container p-4">

                <div className="row mt-4">

                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">About company</h5>

                        <p>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque corrupti.
                        </p>

                        <p>
                            Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                            molestias.
                        </p>

                        <div className="mt-4">

                            <a type="button" className="text-primary btn btn-floating btn-light btn-lg"><i
                                    className="fab fa-facebook-f"></i></a>

                            <a type="button" className=" text-primary btn btn-floating btn-light btn-lg"><i
                                    class="fab fa-dribbble"></i></a>

                            <a type="button" className=" text-primary btn btn-floating btn-light btn-lg"><i
                                    className="fab fa-twitter"></i></a>

                            <a type="button" className=" text-primary btn btn-floating btn-light btn-lg"><i
                                    className="fab fa-google-plus-g"></i></a>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4 pb-1">Search something</h5>

                        <div className="form-outline form-white mb-4">
                            <input type="text" id="formControlLg" className="form-control form-control-lg" />
                            <label className="form-label" for="formControlLg">Search</label>
                        </div>

                        <ul class="fa-ul" style="margin-left: 1.65em;">
                            <li class="mb-3">
                                <span className="fa-li"><i className="text-primary fas fa-home"></i></span><span
                                    className="ms-2">Warsaw, 00-967,
                                    Poland</span>
                            </li>
                            <li className="mb-3">
                                <span className="fa-li"><i className="text-primary fas fa-envelope"></i></span><span
                                    className="ms-2">contact@example.com</span>
                            </li>
                            <li className="mb-3">
                                <span className="fa-li"><i className="text-primary fas fa-phone"></i></span><span className="ms-2">+
                                    48 234 567
                                    88</span>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">Opening hours</h5>

                        <table className="table text-center text-white">
                            <tbody className="fw-normal">
                                <tr>
                                    <td>Mon - Thu:</td>
                                    <td>8am - 9pm</td>
                                </tr>
                                <tr>
                                    <td>Fri - Sat:</td>
                                    <td>8am - 1am</td>
                                </tr>
                                <tr>
                                    <td>Sunday:</td>
                                    <td>9am - 10pm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div className="bg-dark text-center p-3">
                © 2020 Copyright:
                <a className="text-white" href="https://mposiul.com/">mposiul</a>
            </div>
        </footer>
        </>
    )
};

export default Footer;

*/