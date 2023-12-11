import React from "react";

const Description = () => {
  return (
    <div className="container mt-5 ">
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block img-fluid"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRrmPwTmkoqytwhZNFk2AqNk2BqhRP0NBeWA&usqp=CAU"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100 img-fluid"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxyY3snuIn16tLjHE2whNsX9syIERVJ9Uj2g&usqp=CAU"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src=".../800x400?auto=yes&bg=555&fg=333&text=Third slide"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleFade"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleFade"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Description;
