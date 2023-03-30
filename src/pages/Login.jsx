import { useForm } from "react-hook-form";
import { apiLogin } from "../api/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDetailsStore } from "../hooks/useDetailsStore";
import { useTranslation } from "react-i18next";


const Login = () => {
  const navigate = useNavigate();
  const setAuthDetails = useDetailsStore((state) => state.setAuthDetails);
  const [error, setError] = useState("");
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    apiLogin(data).then((response) => {
      if (response?.status === 404) {
        setError(t("invalidUserId"));
      } else if (response?.status === 403) {
        setError(t("invalidPassword"));
      } else if (response?.status === 200) {
        setError("");
        setAuthDetails(response.data);
        navigate("/auth");
      } else if (!response) {
        setError(t("serverError"));
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

        {errors.userId && <span>{t("userIdRequired")}</span>}
        {Boolean(errors.userId) ||
          (errors.password && <span>{t("passwordRequired")}</span>)}

        <input type="submit" className="rounded p-2 bg-gray-400 my-2" />
      </form>
      {error}
    </>
  );
};

export default Login;
