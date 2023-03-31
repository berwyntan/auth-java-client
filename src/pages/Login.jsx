import { useForm } from "react-hook-form";
import { apiLogin } from "../api/auth";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDetailsStore } from "../hooks/useDetailsStore";
import { useTranslation } from "react-i18next";

const Login = () => {
  const navigate = useNavigate();
  const setAuthDetails = useDetailsStore((state) => state.setAuthDetails);
  const [error, setError] = useState("");
  const { t } = useTranslation();
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
  const changeLng = (id) => {
    window.location.replace(`http://127.0.0.1:5173?lng=${id}`);
  };

  return (
    <>
      <div className="text-lg font-medium my-2">{t("login")}</div>

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

        <input
          type="submit"
          className="rounded p-2 bg-gray-400 my-2"
          value={t("submit")}
        />
      </form>
      {error}
      <div className="flex justify-center my-4">
        <div
          className="mx-3 underline cursor-pointer"
          onClick={() => changeLng("en")}
        >
          English
        </div>
        <div
          className="mx-3 underline cursor-pointer"
          onClick={() => changeLng("zh")}
        >
          中文
        </div>
      </div>
    </>
  );
};

export default Login;
