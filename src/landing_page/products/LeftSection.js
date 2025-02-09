import React from "react";
import { Link } from "react-router-dom";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} alt=""/>
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <Link to={tryDemo}>Try Demo</Link>
            <Link to={learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </Link>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="gogleplayBadge.svg"/>
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              alt="appstore.svg"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;