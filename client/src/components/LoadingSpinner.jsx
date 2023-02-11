import { RotatingTriangles } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <RotatingTriangles
      visible={true}
      height="80"
      width="80"
      ariaLabel="rotating-triangels-loading"
      wrapperStyle={{}}
      wrapperClass="rotating-triangels-wrapper"
      colors={["#59B9F8", "#A7DBB5", "#EA7979"]}
      position: absolute;
    left: 50%;
    top: 35%;
    />
  );
};

export default LoadingSpinner;
