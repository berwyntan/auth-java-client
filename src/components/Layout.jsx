import { Outlet, Link } from "react-router-dom";
import { useDetailsStore } from "../hooks/useDetailsStore";
import { useTranslation } from "react-i18next";

const Layout = () => {
  const { t } = useTranslation()
  const authDetails = useDetailsStore((state) => state.authDetails);
  const setAuthDetails = useDetailsStore((state) => state.setAuthDetails);
  const { id } = authDetails;
  const checkId = id?.timestamp;
  
  return (
    <>
      <div className="flex justify-end items-center">
        {checkId && (
          <Link to="/auth">
            <button className="border rounded-lg p-2 border-gray-400 mx-2">
              {t("welcomePage")}
            </button>
          </Link>
        )}
        {checkId ? (
          <Link to="/">
            <button
              className="border rounded-lg p-2 border-gray-400"
              onClick={() => setAuthDetails({})}
            >
              {t("logout")}
            </button>
          </Link>
        ) : (
          <Link to="/">
            <button className="border rounded-lg p-2 border-gray-400">
            {t("login")}
            </button>
          </Link>
        )}
        <div className="mx-3">{t("switchLang")}</div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
