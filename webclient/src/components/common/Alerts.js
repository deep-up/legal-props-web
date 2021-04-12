import React from "react";
import SweetAlert from 'react-bootstrap-sweetalert';
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { clearAlert } from '../../redux/actions';




export default function Alerts() {
    const [t] = useTranslation("global");
    const alert = useSelector((Store) => Store.commonReducer.alert);
    const dispatch = useDispatch();
    return (
        <SweetAlert
            type={alert.typeinput}
            title={t(alert.titleToShow)}
            onConfirm={()=>dispatch(clearAlert())}
            timeout={alert.timeout}
            hideOverlay={false}
        >
            {t(alert.textToShow)}
        </SweetAlert>);
};
