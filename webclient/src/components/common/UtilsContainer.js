import React from 'react'
import Loading from './Loading';
import { useSelector } from "react-redux";
import Alerts from "./Alerts"
import BreadcrumpLang from './BreadcrumpLang';


function UtilsContainer(props) {
    const alert = useSelector((Store) => Store.commonReducer.alert);

    return (
        <React.Fragment>
            <div className="utilsBar">
                <BreadcrumpLang></BreadcrumpLang>

            </div>
            <Loading/>
            <div>{(alert.show === true) ? <Alerts/>: ""}</div>
        </React.Fragment>
    )
}

export default UtilsContainer
