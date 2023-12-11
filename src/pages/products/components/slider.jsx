import React, { Component } from "react";
import Slider from "react-slick";
import RecipeReviewCard from "./card";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#703A32",
        width: "50px",
        height: "50px",
        paddingTop: "15px",
        paddingLeft: "15px",
        borderRadius: "50%",
      }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        width: "50px",
        background: "#703A32",
        height: "50px",
        paddingTop: "15px",
        paddingLeft: "15px",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <RecipeReviewCard />
          </div>
          <div>
            <RecipeReviewCard />
          </div>
          <div>
            <RecipeReviewCard />
          </div>
          <div>
            <RecipeReviewCard />
          </div>
          <div>
            <RecipeReviewCard />
          </div>
          <div>
            <RecipeReviewCard />
          </div>
        </Slider>
      </div>
    );
  }
}
