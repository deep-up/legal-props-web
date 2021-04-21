import React from 'react';
import { Col, Container, Dropdown, DropdownButton, Image, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { DoorOpenFill, Globe, Justify, Person } from 'react-bootstrap-icons';
import Flag from 'react-flagkit';
import { useSelector, useDispatch } from "react-redux";
import { clearAlert, logoutSession } from '../../redux/actions';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';



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
            <Container className="p-0 justify-content-start ml-0 mw-100">
                <Row className="m-0">
                    <Col xs="auto p-0" >
                        <ProSidebar
                            collapsed={!isOpen}
                            toggled={isOpen}
                            breakPoint="sm"
                            onToggle={toggleDrawer}
                            bg="light"
                        >

                            <SidebarHeader>
                                <div
                                    style={{
                                        padding: '24px',
                                        textTransform: 'uppercase',
                                        fontWeight: 'bold',
                                        fontSize: 14,
                                        letterSpacing: '1px',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    {t("menu.header")}
                                </div>
                            </SidebarHeader>
                            <SidebarContent>
                                <Menu iconShape="square">
                                    <MenuItem icon={<Person />}>Dashboard</MenuItem>
                                    <SubMenu title="Components" icon={<Person />}>
                                        <MenuItem>Component 1</MenuItem>
                                        <MenuItem>Component 2</MenuItem>
                                    </SubMenu>
                                </Menu>
                            </SidebarContent>
                            <SidebarFooter>
                                <Menu iconShape="square">
                                    <MenuItem icon={<DoorOpenFill />} onClick={() => { dispatch(logoutSession()) }}>{t("signout")}</MenuItem>
                                </Menu>
                            </SidebarFooter>
                        </ProSidebar>

                    </Col>
                    <Col className="p-0 w-100" >
                        <Navbar bg="light" className="w-100">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Nav className="mr-auto">
                                <Nav.Link href="#" onClick={toggleDrawer}  >
                                    <Justify style={{ fontSize: "2rem" }} /></Nav.Link>
                                <Navbar.Brand href="#"  onClick={toggleDrawer}>
                                    <Image src={process.env.PUBLIC_URL + '/img/legalpropsLogo.svg'} width="40px" height="40px" alt="logo" className="d-inline-block align-top" /><Image src={process.env.PUBLIC_URL + '/img/legalprops.svg'} height="30px" alt="logo" className="d-inline-block align-middle" /></Navbar.Brand>
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
                    </Col>
                </Row>
            </Container>
            {/*<Drawer open={isOpen} onClose={toggleDrawer} direction='left'>
                asdfsdfgsdfgsdfgsdfgsdfg sdfg asdfg sdflg ksdf sdfh sdfhsdfhsdfh sdfh sdfhsdfhsd f sdfhs dfhs dfsdfhsdfhsdfhs dhsdhjsdjdf df dfgj
    </Drawer>*/}
        </React.Fragment>
    );
}

export default Dashboard;