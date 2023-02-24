import {createContext,useContext ,useState } from "react";
const StateContext = createContext({
    user : null,
    token : null,
    notification :null,
    dashboardHeaderSearchAppShow:null,
    dashboardHeaderNotficationAppShow:null,
    dashboardHeaderAccountAppShow:null,
    dashboardAsideUsersSubset:null,
    AppUrl:null,
    setcurrentUser : () =>{},
    setToken : () =>{},
    setNotfication : () =>{},
    Logout: ()=>{},
    setDashboardHeaderSearchAppShow: ()=>{},
    setDashboardHeaderNotficationAppShow: ()=>{},
    setDashboardHeaderAccountAppShow: ()=>{},
    setDashboardAsideUsersSubset: ()=>{},
    setAppUrl: ()=>{},



});
export const ContextProvider = ({children}) =>{
    const [appUrl, setAppUrl] = useState("http://localhost:3000");
    const [user, _setcurrentUser] = useState('');
    const [token, _setToken] = useState('');
    const [notfication, _setNotfication] = useState('');
    const [dashboardHeaderSearchAppShow, _setDashboardHeaderSearchAppShow] = useState(false);
    const [dashboardHeaderNotficationAppShow, _setDashboardHeaderNotficationAppShow] = useState(false);
    const [dashboardHeaderAccountAppShow, _setDashboardHeaderAccountAppShow] = useState(false);
    const [dashboardAsideUsersSubset, _setDashboardAsideUsersSubset] = useState(false);

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

    const setDashboardHeaderNotficationAppShow = () => {
        _setDashboardHeaderNotficationAppShow(!dashboardHeaderNotficationAppShow);
        _setDashboardHeaderSearchAppShow(false);
        _setDashboardHeaderAccountAppShow(false);
        _setDashboardAsideUsersSubset(false);
    }

    const setDashboardHeaderSearchAppShow = () => {
        _setDashboardHeaderSearchAppShow(!dashboardHeaderSearchAppShow)
        _setDashboardHeaderNotficationAppShow(false);
        _setDashboardHeaderAccountAppShow(false);
        _setDashboardAsideUsersSubset(false);
    }

    const setDashboardHeaderAccountAppShow = () => {
        _setDashboardHeaderAccountAppShow(!dashboardHeaderAccountAppShow)
        _setDashboardHeaderSearchAppShow(false);
        _setDashboardHeaderNotficationAppShow(false);
        _setDashboardAsideUsersSubset(false);
    }
    const setDashboardAsideUsersSubset = (v) => {
        _setDashboardAsideUsersSubset(!dashboardAsideUsersSubset);
        _setDashboardHeaderAccountAppShow(false)
        _setDashboardHeaderSearchAppShow(false);
        _setDashboardHeaderNotficationAppShow(false);
    }

    return (
        <StateContext.Provider value={{
            user,
            token,
            notfication,
            dashboardHeaderSearchAppShow,
            dashboardHeaderNotficationAppShow,
            dashboardHeaderAccountAppShow,
            dashboardAsideUsersSubset,
            appUrl,
            setcurrentUser,
            setToken,
            setNotfication,
            Logout,
            setDashboardHeaderSearchAppShow,
            setDashboardHeaderNotficationAppShow,
            setDashboardHeaderAccountAppShow,
            setDashboardAsideUsersSubset,
            setAppUrl,
        }}>
            {children}
        </StateContext.Provider>
    )

}
export const useStateContext = () => useContext(StateContext)