import React, { useState } from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import SideBar from '../common/Sidebar';

function About() {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

    return (
        <React.Fragment>

{/*<Container
                fluid
                className={sidebarIsOpen ? "content is-open" : "content"}
            >*/}
<Container className="p-0 justify-content-start ml-0 mw-100">
                <Row className="m-0">
                    <Col xs="auto p-0" >

            

            </Col>
                    <Col className="p-0 w-100" >
                        
                        <Navbar bg="light" className="w-100" toggle={toggleSidebar}>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default About;