import Footer from "../home/components/footer";
import Layout from "../layout";
import CustomArrows from "./components/slider";

const Test = () => {
  return (
    <>
      {" "}
      <Layout />
      <div className="container" style={{ marginTop: "100px" }}>
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
      <Footer />
    </>
  );
};

export default Test;
