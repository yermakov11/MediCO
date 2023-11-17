import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/StyleLogin.scss";
import axios from "axios";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
</style>;
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
 
  const handelSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data.status === "Success") {
          const userRole = result.data.role;
          if (userRole === 'manager') {
            navigation("/manager");
          } else if (userRole === 'packer') {
            navigation("/packer");
          } else {
            alert("Неверная роль пользователя");
          }
        } else {
          alert("Неверные данные");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="formFlexLogin">
      <h1>MediCO</h1>
      <div className="formLogin">
        <form onSubmit={handelSubmit}>
          <label>
            <input
              type="text"
              placeholder="електрона пошта"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label>
            <input
              type="password"
              placeholder="пароль"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <label>
            <button className="btnLogin">Увійти</button>
          </label>
        </form>
      </div>
      <div className="sign_up">
        <Link to="/sign_up">
          <button className="btnSingup">Зареєструватися</button>
        </Link>
      </div>
    </div>
  );
}
