import { Outlet } from "react-router-dom";
import { useDetailsStore } from "../hooks/useDetailsStore";
import { useTranslation } from "react-i18next";

const CheckManager = () => {
  const authDetails = useDetailsStore((state) => state.authDetails);
  const { role } = authDetails;
  const { t } = useTranslation()
  return <>{role === "manager" ? <Outlet /> : <div>{t("accessDenied")}</div>}</>;
};

export default CheckManager;
