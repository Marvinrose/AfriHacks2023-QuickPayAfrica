import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img
              class=" img-fluid"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRrmPwTmkoqytwhZNFk2AqNk2BqhRP0NBeWA&usqp=CAU"
              alt="First slide"
            />
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

// import React from "react";

// const Description = () => {
//   return (
//     <div className="container mt-5 ">
//       <div
//         id="carouselExampleFade"
//         class="carousel slide carousel-fade"
//         data-ride="carousel"
//       >
//         <div class="carousel-inner">
//           <div class="carousel-item active">
//             <img
//               class="d-block img-fluid"
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRrmPwTmkoqytwhZNFk2AqNk2BqhRP0NBeWA&usqp=CAU"
//               alt="First slide"
//             />
//           </div>
//           <div class="carousel-item">
//             <img
//               class="d-block w-100 img-fluid"
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxyY3snuIn16tLjHE2whNsX9syIERVJ9Uj2g&usqp=CAU"
//               alt="Second slide"
//             />
//           </div>
//           <div class="carousel-item">
//             <img
//               class="d-block w-100"
//               src=".../800x400?auto=yes&bg=555&fg=333&text=Third slide"
//               alt="Third slide"
//             />
//           </div>
//         </div>
//         <a
//           class="carousel-control-prev"
//           href="#carouselExampleFade"
//           role="button"
//           data-slide="prev"
//         >
//           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span class="sr-only">Previous</span>
//         </a>
//         <a
//           class="carousel-control-next"
//           href="#carouselExampleFade"
//           role="button"
//           data-slide="next"
//         >
//           <span class="carousel-control-next-icon" aria-hidden="true"></span>
//           <span class="sr-only">Next</span>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Description;
