import React from 'react';
import { Col, Container, Dropdown, DropdownButton, Image, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { DoorOpenFill, Globe, Person } from 'react-bootstrap-icons';
import Flag from 'react-flagkit';
import { useSelector, useDispatch } from "react-redux";
import { clearAlert, logoutSession } from '../../redux/actions';



function Dashboard() {
    const [t, i18n] = useTranslation("global");
    const history = useHistory();
    const dispatch = useDispatch();
    dispatch(clearAlert());
    return (
        <React.Fragment>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#" onClick={() => history.push("/")}>
                    <Image src={process.env.PUBLIC_URL + '/img/legalpropsLogo.svg'} width="40px" height="40px" alt="logo" className="d-inline-block align-top" />
                    LegalProps
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown size="sm" title={<Globe />} id="basic-nav-dropdown">
                            <NavDropdown.Item className="d-inline-block" href="#" onClick={() => { i18n.changeLanguage("en") }}>
                                <Flag country="US" />
                            </NavDropdown.Item>
                            <NavDropdown.Item className="" href="#" onClick={() => { i18n.changeLanguage("es") }}><Flag country="CO" /></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <DropdownButton menuAlign="right" title={<Person />}>
                        <Dropdown.Item href="#/action-1">UserData</Dropdown.Item>
                        <Dropdown.Item href="#/action-2"></Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => { dispatch(logoutSession()) }}><DoorOpenFill />{t("signout")}</Dropdown.Item>
                    </DropdownButton>


            </Navbar>
            <Container >
                <Row className="float-right">
                    <Col>

                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Dashboard;