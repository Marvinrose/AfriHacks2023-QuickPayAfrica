import Layout from "../layout";
import CustomArrows from "./components/slider";

const Test = () => {
  return (
    <Layout>
      <div className="container mt-5 ">
        <div className="mb-5">
          {" "}
          <h1 className="mb-4">Paintings</h1>
          <CustomArrows />
        </div>
        <div className="mb-5">
          <h1 className="mb-4">Weave</h1>
          <CustomArrows />
        </div>
        <div className="mb-5">
          <h1 className="mb-4">Tye & Dye</h1>
          <CustomArrows />
        </div>
      </div>
    </Layout>
  );
};

export default Test;
