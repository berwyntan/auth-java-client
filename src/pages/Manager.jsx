import { useDetailsStore } from "../hooks/useDetailsStore";
import { useTranslation } from "react-i18next";


const Manager = () => {
  const authDetails = useDetailsStore((state) => state.authDetails);
  const { userFullName } = authDetails;
  const { t } = useTranslation()

  return (
    <>
      <div className="font-medium">{t("forManagersOnly")}</div>
      <div className="my-2">{t(hello)} {userFullName}</div>
    </>
  );
};

export default Manager;
