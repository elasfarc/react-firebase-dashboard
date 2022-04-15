import React from "react";
import { useForm } from "react-hook-form";
import { signin } from "../firbase/auth";
import { Link, useNavigate } from "react-router-dom";

function Signin() {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    let user;
    setIsLoading(true);
    try {
      user = await signin(data);
      reset();
    } catch (error) {
      console.log(error);
    }
    if (user) {
      navigate("/profile/" + user.uid);
    } else setIsLoading(false);
  };

  const formClass = isLoading ? "ui form loading" : "ui form";
  return (
    <div className="login-container">
      <div className="ui card login-card">
        <div className="content">
          <form className={formClass} onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  {...register("email")}
                />
              </label>
            </div>
            <div className="field">
              <label>
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  {...register("password")}
                />
              </label>
            </div>
            <button className="ui primary button login" type="submit">
              Sign In
            </button>
            <div>
              <Link to="/signup">don't have an account? Signup...</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
