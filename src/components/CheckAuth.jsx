import { Outlet } from "react-router-dom";
import { useDetailsStore } from "../hooks/useDetailsStore";
import { useTranslation } from "react-i18next";

const CheckAuth = () => {
  const authDetails = useDetailsStore((state) => state.authDetails);
  const { id } = authDetails;
  const checkId = id?.timestamp;
  const { t } = useTranslation()

  return <>{checkId ? <Outlet /> : <div>{t("accessDenied")}</div>}</>;
};

export default CheckAuth;
