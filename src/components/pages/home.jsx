import React from "react";
import { Link } from "react-router-dom";
import Serves from "../inc/serves";
import Carousel from "../inc/carousel";
import ImageSlider from "../inc/slider";
import Footer from "../inc/footer";

const Home = () => {
  return (
    <React.Fragment>
      {/* carousel component */}
      <Carousel />

      {/* end of carousel component */}

      {/* service component */}
      <section className="section service-section container">
        <div className="service-heading">
          <span className="serviceSpan">Our</span>
          <span className="serviceSpan main">Services</span>
        </div>
        <Serves />
      </section>

      {/* end of service cmponent */}

      {/* section for slider list of properties */}
      <section className="container topProperty">
        <div className="row justify-content-between topPropertyHeaderContainer">
          <div className="col-md-6 col-sm-6 topPropertyHeader">
            <h2>Top Properties</h2>
          </div>
          <div className="col-md-6 col-sm-6 linkToAllProperty">
            <Link to="property.jsx">
              <span>All Property &#62;</span>
            </Link>
          </div>
        </div>
        <ImageSlider />
      </section>
      {/* end of slider list of properties */}

      {/* Footer of the landing page */}
      
      <Footer/>

      {/* End of footer of the landing page */}

    </React.Fragment>
  );
};

export default Home;
