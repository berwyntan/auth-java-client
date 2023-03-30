import { useDetailsStore } from "../hooks/useDetailsStore";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const Welcome = () => {
  const authDetails = useDetailsStore((state) => state.authDetails);
  const { userName, role, userFullName } = authDetails;
  const { t } = useTranslation()

  return (
    <>
      <div className="font-medium my-2">{t("hello")} {userFullName}</div>
      <div>{t("userName")} {userName}</div>
      <div>{t("role")} {role}</div>
      {role === "manager" && (
        <Link to="/manager">
          <button className="border border-gray-400 rounded-lg p-2 my-3">
            {t("forManagersOnly")}
          </button>
        </Link>
      )}
    </>
  );
};

export default Welcome;
