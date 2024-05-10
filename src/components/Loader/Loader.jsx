import React from "react";
import { ThreeCircles } from "react-loader-spinner";
import { ContainerLoader } from "./LoaderStyles";

const Loader = () => {
  return (
    <ContainerLoader>
      <ThreeCircles
      visible={true}
      height="100%"
      width="100%"
      color="black"
      backgroundColor="red"
      ariaLabel="three-circles-loading"
      wrapperStyle={{}}
      wrapperClass={`color :`}
    />
    </ContainerLoader>
  );
};

export default Loader;
