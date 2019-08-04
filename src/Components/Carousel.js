import React from "react";

const Carousel = () => {
	return (
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">

          <div className="first-slide blue"></div>
          <div className="container">
            <div className="carousel-caption text-left">
              <h1>Discovery alert! <small> Example headline</small></h1>
              <p>Recent queries and related ZHN hypothesis generator have found statistically meaningful anomalies in patient-age distribution when investigating functional gastrinoma with gastrin level greater than 500. Dr. NIH2 has agreed to take on this anomaly to further investigate this stark changes in disease pattern.</p>
              <a className="btn btn-lg btn-primary" href="#" role="button">Track our progress</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="second-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Second slide" />
          <div className="container">
            <div className="carousel-caption">
              <h1>Another example headline.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="third-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Third slide" />
          <div className="container">
            <div className="carousel-caption text-right">
              <h1>One more for good measure.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;