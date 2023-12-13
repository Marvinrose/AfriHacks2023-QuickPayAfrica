import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyComponent = () => {
  return (
    <FontAwesomeIcon
      icon={faArrowRight}
      className="super-crazy-colors"
      size="1x"
      style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
    />
  );
};

export default MyComponent;
