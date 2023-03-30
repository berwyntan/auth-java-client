import { useDetailsStore } from "../hooks/useDetailsStore";

const Manager = () => {
  const authDetails = useDetailsStore((state) => state.authDetails);
  const { userFullName } = authDetails;

  return (
    <>
      <div className="font-medium">For Managers Only</div>
      <div className="my-2">Hello, {userFullName}</div>
    </>
  );
};

export default Manager;
