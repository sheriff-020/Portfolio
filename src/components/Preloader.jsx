import React from "react";

const preloader = () => {
  return (
    <>
      <div className="preloader">
        <div className="wrapper">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <span>Loading</span>
        </div>
      </div>
    </>
  );
};

export default preloader;
