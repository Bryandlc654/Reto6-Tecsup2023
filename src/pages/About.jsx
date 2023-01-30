import UserList from "../components/UserList";

const About = () => {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5 text-bg-dark">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://i.postimg.cc/rw1Grkgj/img-coffee-2.jpg"
              class="d-block mx-lg-auto img-fluid"
              alt=""
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Quienes somos
            </h1>
            <p className="lead">
              Expresso Café es una cafetería casual que ofrece una carta de
              deliciosa a precios razonables, todo esto en la mejor atmósfera,
              generada por su diseño arquitectónico y decoración, acompañado de
              un esmerado esfuerzo en calidad y servicio.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Contactanos
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Llamar
              </button>
            </div>
          </div>
        </div>
      </div>

      <UserList />
    </>
  );
};

export default About;
