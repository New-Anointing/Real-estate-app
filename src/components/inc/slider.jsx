import Slider from "react-slick";
import img1 from "../images/property-1.jpg";
import img2 from "../images/property-2.jpg";
import img3 from "../images/property-3.jpg";
import img4 from "../images/property-4.jpg";
import img5 from '../images/property-5.jpg';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mainSliderDiv">
      <Slider {...settings}>
        <div>
          <div className="imageDiv">
            <img src={img1} alt="" className="imageDivImage" />
            <div className="overlayImageDiv">
              <h3>Self Con</h3>
              <span>Rent: &#8358;100K</span>
              <p>
                <i className="fa fa-map-marker"></i> Location: Isaba
              </p>
              <p>Agent: Obanla</p>
            </div>
          </div>
        </div>

        <div>
          <div className="imageDiv">
            <img src={img2} alt="" className="imageDivImage" />
            <div className="overlayImageDiv">
              <h3>Self Con</h3>
              <span>Rent: &#8358;100K</span>
              <p>
                <i className="fa fa-map-marker"></i> Location: Isaba
              </p>
              <p>Agent: Obanla</p>
            </div>
          </div>
        </div>

        <div>
          <div className="imageDiv">
            <img src={img3} alt="" className="imageDivImage" />
            <div className="overlayImageDiv">
              <h3>Self Con</h3>
              <span>Rent: &#8358;100K</span>
              <p>
                <i className="fa fa-map-marker"></i> Location: Isaba
              </p>
              <p>Agent: Obanla</p>
            </div>
          </div>
        </div>

        <div>
          <div className="imageDiv">
            <img src={img4} alt="" className="imageDivImage" />
            <div className="overlayImageDiv">
              <h3>Self Con</h3>
              <span>Rent: &#8358;100K</span>
              <p>
                <i className="fa fa-map-marker"></i> Location: Isaba
              </p>
              <p>Agent: Obanla</p>
            </div>
          </div>
        </div>

        <div>
          <div className="imageDiv">
            <img src={img5} alt="" className="imageDivImage" />
            <div className="overlayImageDiv">
              <h3>Self Con</h3>
              <span>Rent: &#8358;100K</span>
              <p>
                <i className="fa fa-map-marker"></i> Location: Isaba
              </p>
              <p>Agent: Obanla</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
