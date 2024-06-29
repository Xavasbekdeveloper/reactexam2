import React, { memo } from "react";

import "./empty.scss";
import { useNavigate } from "react-router-dom";

const Empty = ({ img }) => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="empty">
        <img src={img} alt="empty img" />{" "}
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    </div>
  );
};

export default memo(Empty);
