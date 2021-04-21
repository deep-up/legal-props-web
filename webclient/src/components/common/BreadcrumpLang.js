import React from 'react'
import { useTranslation } from "react-i18next";
import { Breadcrumb } from 'react-bootstrap';


function BreadcrumpLang() {
    const [t,i18n] = useTranslation("global");


    return (
        <Breadcrumb>
            <Breadcrumb.Item onClick={() => { i18n.changeLanguage("en") }} >English</Breadcrumb.Item>
            <Breadcrumb.Item onClick={() => { i18n.changeLanguage("es") }}>Español</Breadcrumb.Item>
            {/*<Breadcrumb.Item onClick={() => history.push("/about")}>{t("menu.about")}</Breadcrumb.Item>*/}
        </Breadcrumb>)
}

export default BreadcrumpLang



