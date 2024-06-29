import React, { memo, useEffect } from "react";
import { useGetValue } from "../../hooks/useGetValue";
import { useGetUsersQuery, useSignInMutation } from "../../context/api/userAPi";

import "./login.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../context/slice/authSlice";
import { toast } from "react-toastify";

let initialState = {
  username: "johnd",
  password: "m38rmF$",
};

const Login = () => {
  const { formData, handleChange } = useGetValue(initialState);
  const [signIn, { isLoading, isSuccess, isError, error, data }] =
    useSignInMutation();
  const { data: userData, isLoading: userLoading } = useGetUsersQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(formData);
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error("password or username is incorrect");
    }
    if (isSuccess) {
      dispatch(setToken(data.token));
      navigate("/admin");
    }
  }, [isSuccess, isError]);

  return (
    <section className="login">
      <div className="container">
        <form onSubmit={handleLogin} className="login__form" action="">
          <div className="login__input-group">
            <label htmlFor="Username">Username</label>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              type="text"
              id="Username"
            />
          </div>
          <div className="login__input-group">
            <label htmlFor="Password">Password</label>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              type="password"
              id="Password"
            />
          </div>
          <button>Login</button>
        </form>
      </div>
    </section>
  );
};

export default memo(Login);
