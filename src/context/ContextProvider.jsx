import {createContext,useContext ,useState } from "react";
const StateContext = createContext({
    currentuser : null,
    token : null,
    notification :null,
    setcurrentUser : () =>{},
    setToken : () =>{},
    setNotfication : () =>{},
});
export const ContextProvider = ({children}) =>{
    const [currentuser, _setcurrentUser] = useState({});
    const [token, _setToken] = useState('');
    const [notfication, _setNotfication] = useState('');

    const setcurrentUser = (NUser) =>{
        _setcurrentUser(NUser);
        if (notfication){
            setNotfication("LoggedIn")
        }
    }
    const setToken = (token) => {
        _setToken(token);
        if (token){
            localStorage.setItem("AccessToken",token)
        }
        else {
            localStorage.removeItem("AccessToken");
        }
    }
    const Logout = () => {
        setToken();
        setcurrentUser();
        setNotfication("Loggedout");
    }

    const setNotfication = (message,t=3000) => {
        _setNotfication(`${message}`);

        setTimeout(()=>{
            _setNotfication('');
        },t);
    }

    return (
        <StateContext.Provider value={{
            currentuser,
            token,
            notfication,
            setcurrentUser,
            setToken,
            setNotfication,

        }}>
            {children}
        </StateContext.Provider>
    )

}
export const useStateContext = () => useContext(StateContext)