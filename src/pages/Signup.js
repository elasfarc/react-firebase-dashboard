import React from "react";
import { useForm } from "react-hook-form";
import signup from "../firbase/auth";
import { useNavigate } from "react-router-dom";

function Signup() {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    let newUser;
    setIsLoading(true);
    try {
      newUser = await signup(data);
      reset();
    } catch (error) {
      console.log(error);
    }
    if (newUser) {
      navigate("/profile/" + newUser.uid);
    } else setIsLoading(false);
  };

  const formClass = isLoading ? "ui form loading" : "ui form";
  return (
    <div className="login-container">
      <div className="ui card login-card">
        <div className="content">
          <form className={formClass} onSubmit={handleSubmit(onSubmit)}>
            <div className="two fields">
              <div className="field">
                <label>
                  First Name
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    {...register("firstName")}
                  />
                </label>
              </div>
              <div className="field">
                <label>
                  Last Name
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    {...register("lastName")}
                  />
                </label>
              </div>
            </div>
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
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
