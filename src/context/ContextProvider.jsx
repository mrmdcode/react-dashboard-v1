import {createContext,useContext ,useState } from "react";
import doughnutChart from "../components/Charts/dashboard/DoughnutChart";
const StateContext = createContext({
    appUrl:null,
    user : null,
    token : null,
    notification :null,
    dashboardHeaderSearchAppShow:null,
    dashboardHeaderNotficationAppShow:null,
    dashboardHeaderAccountAppShow:null,
    dashboardAsideSubset:null,
    dashboardAsideSubsetS:null,
    setAppUrl: ()=>{},
    setcurrentUser : () =>{},
    setToken : () =>{},
    setNotfication : () =>{},
    Logout: ()=>{},
    setDashboardHeaderSearchAppShow: ()=>{},
    setDashboardHeaderNotficationAppShow: ()=>{},
    setDashboardHeaderAccountAppShow: ()=>{},
    setdashboardAsideSubset: ()=>{},
    setDashboardAsideSubsetS: ()=>{},
    setTitle: ()=>{},



});
export const ContextProvider = ({children}) =>{
    const [appUrl, setAppUrl] = useState("http://dashboard-1.mrmdcode.com");
    const [user, _setcurrentUser] = useState({});
    const [token, _setToken] = useState('');
    const [notfication, _setNotfication] = useState('');
    const [dashboardHeaderSearchAppShow, _setDashboardHeaderSearchAppShow] = useState(false);
    const [dashboardHeaderNotficationAppShow, _setDashboardHeaderNotficationAppShow] = useState(false);
    const [dashboardHeaderAccountAppShow, _setDashboardHeaderAccountAppShow] = useState(false);
    const [dashboardAsideSubsetS, _setDashboardAsideSubsetS] = useState(false);
    const [dashboardAsideSubset, _setDashboardAsideSubset] = useState("");

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
        _setDashboardAsideSubsetS(false);
        _setDashboardAsideSubset("");
    }

    const setDashboardHeaderSearchAppShow = () => {
        _setDashboardHeaderSearchAppShow(!dashboardHeaderSearchAppShow)
        _setDashboardHeaderNotficationAppShow(false);
        _setDashboardHeaderAccountAppShow(false);
        _setDashboardAsideSubsetS(false);
        _setDashboardAsideSubset("");
    }

    const setDashboardHeaderAccountAppShow = () => {
        _setDashboardHeaderAccountAppShow(!dashboardHeaderAccountAppShow)
        _setDashboardHeaderSearchAppShow(false);
        _setDashboardHeaderNotficationAppShow(false);
        _setDashboardAsideSubsetS(false);
        _setDashboardAsideSubset("");
    }

    const setDashboardAsideSubset = (v) => {
        _setDashboardAsideSubset(v);
        _setDashboardHeaderAccountAppShow(false)
        _setDashboardHeaderSearchAppShow(false);
        _setDashboardHeaderNotficationAppShow(false);
    }
    const setDashboardAsideSubsetS = () => {
        _setDashboardAsideSubsetS(!dashboardAsideSubsetS)
    }
    const setTitle =(val) =>{
        let title = document.querySelector('html head title');
        title.textContent = val;
    }

    return (
        <StateContext.Provider value={{
            appUrl,
            user,
            token,
            notfication,
            dashboardHeaderSearchAppShow,
            dashboardHeaderNotficationAppShow,
            dashboardHeaderAccountAppShow,
            dashboardAsideSubsetS,
            dashboardAsideSubset,
            setAppUrl,
            setcurrentUser,
            setToken,
            setNotfication,
            Logout,
            setDashboardHeaderSearchAppShow,
            setDashboardHeaderNotficationAppShow,
            setDashboardHeaderAccountAppShow,
            setDashboardAsideSubset,
            setDashboardAsideSubsetS,
            setTitle,
        }}>
            {children}
        </StateContext.Provider>
    )

}
export const useStateContext = () => useContext(StateContext)