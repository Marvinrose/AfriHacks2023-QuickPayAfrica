// import React from "react";

// const Description = () => {
//   return (
//     <>
//       <div
//         id="carouselExampleIndicators"
//         className="carousel slide"
//         data-coreui-ride="true"
//       >
//         <div className="carousel-indicators">
//           <button
//             type="button"
//             data-coreui-target="#carouselExampleIndicators"
//             data-coreui-slide-to="0"
//             class="active"
//             aria-current="true"
//             aria-label="Slide 1"
//           ></button>
//           <button
//             type="button"
//             data-coreui-target="#carouselExampleIndicators"
//             data-coreui-slide-to="1"
//             aria-label="Slide 2"
//           ></button>
//           <button
//             type="button"
//             data-coreui-target="#carouselExampleIndicators"
//             data-coreui-slide-to="2"
//             aria-label="Slide 3"
//           ></button>
//         </div>
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ2qs_bhOeNFa1ZMO2NFYXrd9jvcuFxEaGcw&usqp=CAU"
//               className="d-block w-100"
//               alt="..."
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ2qs_bhOeNFa1ZMO2NFYXrd9jvcuFxEaGcw&usqp=CAU"
//               className="d-block w-100"
//               alt="..."
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ2qs_bhOeNFa1ZMO2NFYXrd9jvcuFxEaGcw&usqp=CAU"
//               className="d-block w-100"
//               alt="..."
//             />
//           </div>
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-coreui-target="#carouselExampleIndicators"
//           data-coreui-slide="prev"
//         >
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-coreui-target="#carouselExampleIndicators"
//           data-coreui-slide="next"
//         >
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </>
//   );
// };
// export default Description;

import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "components/ExampleCarouselImage";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
