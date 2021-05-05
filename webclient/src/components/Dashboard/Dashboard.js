import React from 'react';
import { Col, Container, Dropdown, DropdownButton, Image, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { DoorOpenFill, Globe, Justify, Person } from 'react-bootstrap-icons';
import Flag from 'react-flagkit';
import { useSelector, useDispatch } from "react-redux";
import { clearAlert, logoutSession, setRoute } from '../../redux/actions';
import SideBar from '../common/Sidebar';
import { Route, Switch, useParams } from "react-router-dom";
import EditProps from '../Props/EditProps';

function Dashboard(props) {
    const dispatch = useDispatch();

    const [sidebarIsOpen, setSidebarIsOpen] = React.useState(false);
    const userData = useSelector((Store) => Store.userReducer.user);
    const toggleDrawer = () => {
        setSidebarIsOpen((prevState) => !prevState)
    }

    const [t, i18n] = useTranslation("global");
    dispatch(clearAlert());

    return (
        <React.Fragment>
            <Container className="p-0 justify-content-start ml-0 mw-100 ">
                <Row className="m-0">
                    <Col xs="auto p-0" >
                        <div className={"overlay " + (sidebarIsOpen ? " showOverlay" : "")} onClick={toggleDrawer} aria-label="overlay"></div>
                        <SideBar toggle={toggleDrawer} isOpen={sidebarIsOpen} />
                    </Col>
                    <Col className="p-0 w-100 content" >
                        <Navbar bg="light" className="w-100">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Nav className="mr-auto">
                                <Nav.Link href="#" onClick={toggleDrawer}  >
                                    <Justify style={{ fontSize: "2rem" }} /></Nav.Link>
                                <Navbar.Brand href="#" onClick={toggleDrawer}>

                                    <Image src={process.env.PUBLIC_URL + '/img/legalpropsLogo.svg'} width="40px" height="40px" alt="logo" className="d-inline-block align-top" /><Image src={process.env.PUBLIC_URL + '/img/legalprops.svg'} height="30px" alt="logo" className="d-inline-block align-middle" /></Navbar.Brand>
                                <NavDropdown size="xs" title={<Globe />} id="basic-nav-dropdown">
                                    <NavDropdown.Item className="d-inline-block" href="#es" onClick={() => { i18n.changeLanguage("en") }}>
                                        <Flag country="US" />
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className="" href="#en" onClick={() => { i18n.changeLanguage("es") }}><Flag country="CO" /></NavDropdown.Item>
                                </NavDropdown>
                            </Nav>

                            <DropdownButton menuAlign="right" title={<Person />}>
                                <Dropdown.Item >{(userData ? userData.name : "noUserData")}</Dropdown.Item>
                                <Dropdown.Item >{(userData ? userData.email : "noUserEmail")}</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => { dispatch(logoutSession()) }}><DoorOpenFill />{t("signout")}</Dropdown.Item>
                            </DropdownButton>
                        </Navbar>
                        <Row className="m-0">
                            <Col className="p-0">
                                <Switch>
                                    <Route>
                                    <Route path="/dashboard/:id" children={<Child />} /> 
                                    </Route>
                                </Switch>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}
function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    const dispatch = useDispatch();
    let { id } = useParams();
    dispatch(setRoute(id));

    if (id==="propsEdit"){
        return(<EditProps />);
    }
  
    return (
      <div>
        <h3>ID: {id}</h3>
      </div>
    );
  }

export default Dashboard;