import React, { memo } from "react";
import icon from "../../assets/icons/Icon.svg";

import "./lazyLoading.scss";

const LazyLoading = () => {
  return (
    <div className="lazyLoading">
      <img src={icon} alt="logo icon" />
    </div>
  );
};

export default memo(LazyLoading);
