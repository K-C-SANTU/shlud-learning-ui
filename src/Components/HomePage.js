import { createContext, useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
export const UseContextProvider = createContext();
export const SideBarContextProvider = createContext();
function HomePage() {
    const [header] = useState(
        {
            logoTitle: "Santosh", 
            pages: ['Order', 'Cart'], 
            profile: {
                profileName: "KC",
                options: ['Profile', 'Account']
            },
            showHeader: true
        }
    )
    const [user, setUser] = useState("Miss. Shruti")

    return <>
        <UseContextProvider.Provider value={
            { header, user, setUser }
        }>
            <Header />
            <br />
            <SideBarContextProvider.Provider value={"Welcome SideBar"}>
                <br />
                <SideBar />
            </SideBarContextProvider.Provider>
        </UseContextProvider.Provider>
    </>;
}



export default HomePage; 