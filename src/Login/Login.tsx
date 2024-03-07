import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { json, useNavigate } from "react-router-dom";
import axios from "../api/axios";

const LOGIN_URL = "/auth";

export default function Login() {
  const { setAuth } = useContext(AuthContext);
  const userNameRef = useRef();
  const errRef = useRef();

  const [userName, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSucess] = useState(false);
  const [loginType, setLoginType] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    //userNameRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [userName, password]);

  const changeLoginType = () => {
    console.log("log");
    setLoginType(!loginType);
  };

  const login = () => {
    navigate("bidding");
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent reloading of the page.
    console.log(userName, password);

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ userName, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;

      setAuth({ userName, password, roles, accessToken });
      setUser("");
      setPassword("");
      setSucess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server response");
      } else if (err?.response.status == 400) {
        setErrMsg("Missing Username or Password");
      } else if (err?.response.status == 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }

      //errRef.current.focus();
    }
  };

  return (
    <>
      <div className="login-container">
        {success ? "You are logged in!" : "Failed"}
        {/* <form onSubmit={handleSubmit}> */}
        <form>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <div className="mb-3">
            <h3>{loginType ? "Login" : "Sign Up"}</h3>
          </div>
          <div className="mb-3 row">
            <label htmlFor="username" className="col-sm-2 col-form-label">
              Email:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="username"
                ref={userNameRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={userName}
                required
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="password" className="col-sm-2 col-form-label">
              Password:
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <button
              type="submit"
              className="col-sm-2 btn confirm-btn"
              onClick={login}
            >
              {loginType ? "Login" : "Sign up"}
            </button>
            <br />
            <button
              type="button"
              className="col-sm-3 btn sign-up-btn"
              onClick={changeLoginType}
            >
              {loginType ? "Sign up" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
