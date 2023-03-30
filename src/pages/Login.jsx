import { useForm } from "react-hook-form";
import { apiLogin } from "../api/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDetailsStore } from "../hooks/useDetailsStore";

const Login = () => {
  const navigate = useNavigate();
  const setAuthDetails = useDetailsStore((state) => state.setAuthDetails);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    apiLogin(data).then((response) => {
      if (response?.status === 404) {
        setError("Invalid user id.");
      } else if (response?.status === 403) {
        setError("Invalid password.");
      } else if (response?.status === 200) {
        setError("");
        setAuthDetails(response.data);
        navigate("/auth");
      } else if (!response) {
        setError("Server error.");
      }
    });
  };

  return (
    <>
      <div className="text-lg font-medium my-2">LOG IN</div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center"
      >
        <input
          placeholder="user id"
          className="border-2 border-gray-400 my-2"
          autoComplete="false"
          {...register("userName", {
            required: true,
          })}
        />

        <input
          type="password"
          placeholder="password"
          className="border-2 border-gray-400 my-2"
          autoComplete="false"
          {...register("password", { required: true })}
        />

        {errors.userId && <span>User id is required</span>}
        {Boolean(errors.userId) ||
          (errors.password && <span>Password is required</span>)}

        <input type="submit" className="rounded p-2 bg-gray-400 my-2" />
      </form>
      {error}
    </>
  );
};

export default Login;
