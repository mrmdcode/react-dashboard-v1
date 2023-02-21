import {createContext,useContext ,useState } from "react";
const StateContext = createContext({
    user : null,
    token : null,
    notification :null,
    setcurrentUser : () =>{},
    setToken : () =>{},
    setNotfication : () =>{},
    Logout: ()=>{},
});
export const ContextProvider = ({children}) =>{
    const [user, _setcurrentUser] = useState('');
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
            user,
            token,
            notfication,
            setcurrentUser,
            setToken,
            setNotfication,
            Logout

        }}>
            {children}
        </StateContext.Provider>
    )

}
export const useStateContext = () => useContext(StateContext)