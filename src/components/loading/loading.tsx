// import {ReactComponent as ReactLogo} from './../../../public/';
import React from "react"

const Loading = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <img src="/Spinner-1s-200px.svg" alt="image" />
    </div>
  );
};

export default Loading;
