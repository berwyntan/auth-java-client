import { Outlet } from "react-router-dom";
import { useDetailsStore } from "../hooks/useDetailsStore";

const CheckAuth = () => {
  const authDetails = useDetailsStore((state) => state.authDetails);
  const { id } = authDetails;
  const checkId = id?.timestamp;

  return <>{checkId ? <Outlet /> : <div>Access Denied</div>}</>;
};

export default CheckAuth;
