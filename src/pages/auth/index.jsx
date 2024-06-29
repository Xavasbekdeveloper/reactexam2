import React, { memo } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Auth = () => {
  const isLogin = useSelector((state) => state.auth.token);
  return (
    <>
      <Header />
      {isLogin ? <Outlet /> : <Navigate replace to={"/login"} />}
      <Footer />
    </>
  );
};

export default memo(Auth);
