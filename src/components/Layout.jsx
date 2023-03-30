import { Outlet, Link } from "react-router-dom"
import { useDetailsStore } from "../hooks/useDetailsStore";


const Layout = () => {
    const authDetails = useDetailsStore(((state) => state.authDetails))
    const setAuthDetails = useDetailsStore(((state) => state.setAuthDetails))
    const { id, userName, role, userFullName } = authDetails
    const checkId = id?.timestamp
    return (
        <>
            <div className="flex justify-end">
                {
                    checkId && <Link to="/auth" ><button className="border rounded-lg p-2 border-gray-400 mx-2">WELCOME PAGE</button></Link>
                } 
                {
                    checkId ?
                    <Link to="/" ><button className="border rounded-lg p-2 border-gray-400" onClick={() => setAuthDetails({})}>LOG OUT</button></Link> :
                    <Link to="/" ><button className="border rounded-lg p-2 border-gray-400">LOG IN</button></Link>
                } 
                              
                
            </div>
            <Outlet />
        </>
    )
}

export default Layout