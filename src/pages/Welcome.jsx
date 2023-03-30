import { useDetailsStore } from "../hooks/useDetailsStore";
import { Link } from "react-router-dom";

const Welcome = () => {
  const authDetails = useDetailsStore((state) => state.authDetails);
  const { userName, role, userFullName } = authDetails;
  return (
    <>
      <div className="font-medium my-2">Hello, {userFullName}</div>
      <div>User name: {userName}</div>
      <div>Role: {role}</div>
      {role === "manager" && (
        <Link to="/manager">
          <button className="border border-gray-400 rounded-lg p-2 my-3">
            For Managers Only
          </button>
        </Link>
      )}
    </>
  );
};

export default Welcome;
