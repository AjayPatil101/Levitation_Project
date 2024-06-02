import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const { Component } = props;
  const navigator = useNavigate();

  useEffect(() => {
    const isLogin = localStorage.getItem('login') && JSON.parse(localStorage.getItem('login')).login;
    if (!isLogin) {
      navigator("/signin");
    }
  }, []); // Make sure to add an empty dependency array to run the effect only once

  return (
    <div>
      <Component />
    </div>
  );
};

export default Protected;
