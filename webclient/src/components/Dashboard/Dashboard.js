import React from 'react';
import { Col, Container, Dropdown, DropdownButton, Image, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { DoorOpenFill, Globe, Justify, Person } from 'react-bootstrap-icons';
import Flag from 'react-flagkit';
import { useSelector, useDispatch } from "react-redux";
import { clearAlert, logoutSession } from '../../redux/actions';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';


function Dashboard() {

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const [t, i18n] = useTranslation("global");
    const history = useHistory();
    const dispatch = useDispatch();
    dispatch(clearAlert());
    return (
        <React.Fragment>
            <Navbar bg="light" >
                <Navbar.Brand href="#" onClick={() => history.push("/")}>
                    <Image src={process.env.PUBLIC_URL + '/img/legalpropsLogo.svg'} width="40px" height="40px" alt="logo" className="d-inline-block align-top" />
                    LegalProps
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                <Nav.Link href="#" onClick={toggleDrawer}  ><Justify style={{ fontSize: "2rem" }} /></Nav.Link>
                <NavDropdown size="sm" title={<Globe />} id="basic-nav-dropdown">
                    <NavDropdown.Item className="d-inline-block" href="#es" onClick={() => { i18n.changeLanguage("en") }}>
                        <Flag country="US" />
                    </NavDropdown.Item>
                    <NavDropdown.Item className="" href="#en" onClick={() => { i18n.changeLanguage("es") }}><Flag country="CO" /></NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <DropdownButton menuAlign="right" title={<Person />}>
                    <Dropdown.Item href="#/action-1">UserData</Dropdown.Item>
                    <Dropdown.Item href="#/action-2"></Dropdown.Item>
                    <Dropdown.Item href="#" onClick={() => { dispatch(logoutSession()) }}><DoorOpenFill />{t("signout")}</Dropdown.Item>
                </DropdownButton>
            </Navbar>

            <Drawer open={isOpen} onClose={toggleDrawer} direction='left'>
                asdfsdfgsdfgsdfgsdfgsdfg sdfg asdfg sdflg ksdf sdfh sdfhsdfhsdfh sdfh sdfhsdfhsd f sdfhs dfhs dfsdfhsdfhsdfhs dhsdhjsdjdf df dfgj
            </Drawer>
        </React.Fragment>
    );
}

export default Dashboard;