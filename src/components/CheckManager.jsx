import { Outlet } from "react-router-dom";
import { useDetailsStore } from "../hooks/useDetailsStore";

const CheckManager = () => {
  const authDetails = useDetailsStore((state) => state.authDetails);
  const { role } = authDetails;
  return <>{role === "manager" ? <Outlet /> : <div>Access Denied</div>}</>;
};

export default CheckManager;
