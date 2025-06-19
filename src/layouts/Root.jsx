import { Outlet } from "react-router";
const Root = () => {
    return (
        <div className="max-w-6xl mx-auto font-poppins">
            <Outlet></Outlet>
        </div>
    )
}

export default Root;