import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./Counter";
import Login from "./Login";
import { createContext, useState } from "react";
import Header from "./Header";
export const UseContextProvider = createContext();

function RouterComponent() {
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

    return (
        <UseContextProvider.Provider value={
            { header }
        }>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/login" Component={Login} />
                    <Route path="/counter" Component={Counter} />
                </Routes>
            </BrowserRouter>
        </UseContextProvider.Provider>
    );
}

export default RouterComponent;
