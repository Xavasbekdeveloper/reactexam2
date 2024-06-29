import React, { memo } from "react";
import notFound from "../../assets/images/not-found.jpg";
import Empty from "../../components/empty";

const NotFound = () => {
  return <Empty img={notFound} />;
};

export default memo(NotFound);
