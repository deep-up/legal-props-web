import React, { useState } from "react";
import { Accordion, Nav } from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import menu from "./menu.json";
import { toggleDrawer } from "../../redux/actions";


function SideBar() {
    const [t] = useTranslation("global");
    const routeData = useSelector((Store) => Store.commonReducer.route);
    const drawerOpen = useSelector((Store) => Store.commonReducer.drawerOpen);
    return (
        <React.Fragment>
            <div className={"sidebar bg-light " + (drawerOpen ? "is-open" : "")}>
                <Nav variant="pills" defaultActiveKey="/home" className="flex-column">
                    <div className="navbar-brand">{t("menu.header")}</div>
                    {Menu(routeData, menu.menu)}
                </Nav>
            </div>

        </React.Fragment>
    );
    function Menu(routeData, menu) {
        //console.log(menu);
        return menu.map(function (menuitem, index) {
            const icon = React.createElement(Icons[menuitem.icon]);
            if (menuitem.route === "SubMenu") {
                return (
                    SubMenu(routeData, menuitem, icon)
                );
            } else {
                return (
                    MenuItem(routeData, menuitem, icon)
                );
            }
        });
    }

    function SubMenu(routeData, menuItem, icon) {
        const [collapsed, setCollapsed] = useState(false);
        function toggleNavbar() {
            setCollapsed(!collapsed);
        }

        return (
            <Nav.Item key={menuItem.text} className={(!collapsed ? "open" : "")}>
                <Accordion>
                    <Accordion.Toggle
                        as={Nav.Link}
                        variant="link"
                        eventKey="0"
                        onClick={toggleNavbar}
                    >{icon} {t(menuItem.text)}
                        {!collapsed ? <Icons.CaretDownFill /> : <Icons.CaretUpFill />}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <nav className="nav flex-column pl-4">
                            {Menu(routeData, menuItem.submenu)}
                        </nav>
                    </Accordion.Collapse>

                </Accordion>
            </Nav.Item>

        );
    }
    function MenuItem(routeData, menuItem, icon) {
        const dispatch = useDispatch();
        const history = useHistory();
        function openLink(link) {
            dispatch(toggleDrawer());
            history.push(link);
        }

        return (
            <Nav.Item key ={menuItem.route}>
                <a className={"nav-link " + (routeData === menuItem.route ? "active" : "")} href={"#" + menuItem.route} onClick={()=>{openLink("/dashboard/" + menuItem.route)}}>{icon} {t(menuItem.text)}</a>
            </Nav.Item>
        );
    }
}

export default SideBar;