import React, {useState} from 'react';
import { Col, Container, Dropdown, DropdownButton, Image, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { DoorOpenFill, Globe, Justify, Person } from 'react-bootstrap-icons';
import Flag from 'react-flagkit';
import { useSelector, useDispatch } from "react-redux";
import { clearAlert, logoutSession } from '../../redux/actions';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { withRouter } from "react-router";
import SideBar from '../common/Sidebar';



function Dashboard() {

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const [t, i18n] = useTranslation("global");
    const history = useHistory();
    const dispatch = useDispatch();
    dispatch(clearAlert());
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    return (
        <React.Fragment>
                    <div className="navbarDep"></div>
        </React.Fragment>
    );
}

export default withRouter(Dashboard) ;