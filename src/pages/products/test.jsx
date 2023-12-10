import RecipeReviewCard from "./components/card";

const Test = () => {
  return (
    <div className="container mt-5 ">
      <div className="mb-5">
        {" "}
        <h1 className="mb-4">Paintings</h1>
        <div className="row">
          <div className="col">
            <RecipeReviewCard></RecipeReviewCard>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <h1 className="mb-4">Weave</h1>
      </div>
    </div>
  );
};

export default Test;
