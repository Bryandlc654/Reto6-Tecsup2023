

const Carousel = () => {
    return (
        <section className="">
        <id id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="9000">
                    <img src="https://i.postimg.cc/Dwkd0ZQm/img-coffee-1.jpg" className="d-block" alt="coffee_1"
                        style={{width: "100%", height: "calc(100vh - 55px)", objectFit: "cover"}} />
                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50">
                        <h5 className="text-light">El mejor Café del Perú</h5>

                        <p className="text-light">Solo lo podrás encontrar aquí</p>
                        <button className="btn btn-primary">Ver mas</button>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="9000">
                    <img src="https://i.postimg.cc/rw1Grkgj/img-coffee-2.jpg" className="d-block img-fluid" alt="coffee_2"
                        style={{width: "100%", height: "calc(100vh - 55px)", objectFit: "cover"}} />
                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50">
                        <h5 className="text-light">Los mejores precios</h5>
                        <p className="text-light">Descuentos y promociones siempre</p>
                        <button className="btn btn-primary">Ver mas</button>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="9000">
                    <img src="https://i.postimg.cc/4dLQxQwT/img-coffee-3.jpg" className="d-block" alt="coffee_3"
                        style={{width: "100%", height: "calc(100vh - 55px)", objectFit: "cover"}} />
                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50">
                        <h5 className="text-light">El mejor servicio</h5>
                        <p className="text-light">Para que te sientas como en casa</p>
                        <button className="btn btn-primary">Ver mas</button>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev text-light" type="button" data-bs-target="#carouselExampleDark"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next text-light" type="button" data-bs-target="#carouselExampleDark"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </id>
    </section>
    )
};

export default Carousel;