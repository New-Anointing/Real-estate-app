import { useState } from "react";
import { Link } from "react-router-dom";

const Serves = () => {
  const [serviceContainers, useServiceContainers] = useState([
    {
      id: 1,
      title1: "We",
      title2: "Sell",
      body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consectetur, itaque molestias id sapiente doloribus vero velit impedit quibusdam adipisci fugiat nam eum rem",
      uri: "about.jsx",
    },
    {
      id: 2,
      title1: "We",
      title2: "Buy",
      body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consectetur, itaque molestias id sapiente doloribus vero velit impedit quibusdam adipisci fugiat nam eum rem",
      uri: "about.jsx",
    },
    {
      id: 3,
      title1: "We",
      title2: "Sell",
      body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consectetur, itaque molestias id sapiente doloribus vero velit impedit quibusdam adipisci fugiat nam eum rem",
      uri: "about.jsx",
    },
  ]);

  return (
    <div>
      <div className="row">
        {serviceContainers.map((serviceContainer) => (
          <div className="col-md-4 for-card" key={serviceContainer.id}>
            <div className="card-head-box card-title">
              <span className="">{serviceContainer.title1}</span>
              <span className="main">{serviceContainer.title2}</span>
            </div>
            <div className="card-body card-content">
              <p>{serviceContainer.body}</p>
            </div>
            <div className="card-fotter">
              <p className="service-link">
                <Link to={serviceContainer.uri}>Read more &#62;</Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Serves;
