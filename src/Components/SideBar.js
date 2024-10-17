import { useContext } from "react";
import { SideBarContextProvider, UseContextProvider } from "./HomePage";

function SideBar() {
    const userdata = useContext(UseContextProvider);
    const headerdata = useContext(SideBarContextProvider);
    console.log("inside sidebar", userdata, headerdata);
    return <input
        value={userdata.user}
        onChange={(e) => userdata.setUser(e.target.value)}
    />;
}

export default SideBar;

