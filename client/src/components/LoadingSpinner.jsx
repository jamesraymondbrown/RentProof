import { RotatingTriangles } from "react-loader-spinner";
import "./LoadingSpinner.scss";

const LoadingSpinner = () => {
  return (
    <RotatingTriangles
      visible={true}
      height="400"
      width="400"
      ariaLabel="rotating-triangels-loading"
      wrapperStyle={{}}
      wrapperClass="loading-spinner"
      colors={["#59B9F8", "#A7DBB5", "#EA7979"]}
    />
  );
};

export default LoadingSpinner;
