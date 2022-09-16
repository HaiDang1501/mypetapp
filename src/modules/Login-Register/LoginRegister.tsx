
import "../../sass/LoginRegister/LoginRegister.scss";
import {GoogleOutlined, LockOutlined, TwitterOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import {Register, Login} from "./components";
const LoginRegister = () => {
  return (
    <div className="login-register__wrapper container">
      <div className="login-register__navigate">
        <div className="navigate-item">login</div>
        <div className="navigate-item">register</div>
        <div className="active-nav">LOGIN</div>
      </div>
      <div className="login-register__OAuth2">
        <div className="circle">
        <i className="fa-brands fa-facebook-f"></i>
        </div>
        <div className="circle">
            <GoogleOutlined />
        </div>
        <div className="circle">
            <TwitterOutlined />
        </div>
      </div>
      <div className="login-register-line">
        <div className="line"></div>
        <div>OR</div>
        <div className="line"></div>
      </div>
      <Login />
      <Register />
    </div>
  );
};

export default LoginRegister;
