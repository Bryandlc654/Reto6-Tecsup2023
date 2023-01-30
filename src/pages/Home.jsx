import "../style/home.css";

const Home = () => {
  return (
    <>
      <div className="container px-4 py-5 text-light">
        <h2 className="pb-2 border-bottom">Vive la experiencia</h2>
        <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
          <div className="d-flex flex-column align-items-start gap-2">
            <h3 className="fw-bold text-light">¿Quienes somos?</h3>
            <p className=" text-light">
              Expresso Café es una cafetería casual que ofrece una carta de
              deliciosa a precios razonables, todo esto en la mejor atmósfera,
              generada por su diseño arquitectónico y decoración, acompañado de
              un esmerado esfuerzo en calidad y servicio.
            </p>
            <a href="#" className="btn btn-primary btn-lg">
              Ver más
            </a>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 g-4 text-light">
            <div className="d-flex flex-column gap-2">
              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                <i className="bi bi-check-lg"></i>
              </div>
              <h4 className="fw-semibold mb-0">Calidad Garantizada</h4>
              <p className="text-light">
                Elaborados con ingredientes de alta calidad.
              </p>
            </div>
            <div className="d-flex flex-column gap-2 text-light">
              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                <i className="bi bi-cash-coin"></i>
              </div>
              <h4 className="fw-semibold mb-0">Precios competitivos</h4>
              <p className="text-light">
                Tenemos los mejores precios frente a la competencia.
              </p>
            </div>
            <div className="d-flex flex-column gap-2 text-light">
              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                <i className="bi bi-credit-card-2-front"></i>
              </div>
              <h4 className="fw-semibold mb-0">Medios de pago</h4>
              <p className="text-light">
                Contamos con medios de pago virtuales y efectivo.
              </p>
            </div>
            <div className="d-flex flex-column gap-2 text-light">
              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                <i className="bi bi-basket3-fill "></i>
              </div>
              <h4 className="fw-semibold mb-0">Delivery</h4>
              <p className="text-light">
                Servicio de envío de nuestros productos a domicilio.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 mb-4  rounded-3 text-light">
        <div className="container-fluid py-5 text-light">
          <h3 className="display-5 fw-bold">Servicio Catering</h3>
          <p className="col-md-8 fs-4 text-light">
            Contamos con un personal altamente capacitado para brindarte un
            servicio de calidad en todos tus eventos, Bodas, Eventos
            corporativos y más.
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Contactanos
          </button>
        </div>
      </div>

      <div className="row align-items-md-stretch text-light">
        <div className="col-md-6 text-light">
          <div className="h-100 p-5 text-bg-dark rounded-3">
            <h2>Nuestras promociones</h2>
            <p>
              Celebramos junto a ti los mejores momentos de tu vida por eso ven
              y celebra tu cumpleños en nuestra cafeteria y recibe un 30% de
              descuento
            </p>
            <button className="btn btn-outline-light" type="button">
              Ver mas
            </button>
          </div>
        </div>
        <div className="col-md-6  text-bg-dark">
          <div className="h-100 p-5  border rounded-3">
            <h2>Nuestros Beneficios</h2>
            <p>
              Ser un cliente fiel tiene sus recompensas, por eso únete al club cafetero y obten grandes decuentos en nuestros productos.
            </p>
            <button className="btn btn-outline-secondary" type="button">
              Ver mas
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
