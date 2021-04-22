import React from "react";
import { Nav, Button, Navbar } from "react-bootstrap";
import { House } from "react-bootstrap-icons";
import SubMenu from "./SubMen";

class SideBar extends React.Component {
    render() {
        return (
            <React.Fragment>
                    <div className={"sidebar bg-light " + (this.props.isOpen ? "is-open" : "")}>


                        <Nav variant="pills" defaultActiveKey="/home" className="flex-column">
                            <div className="navbar-brand">Menu</div>
                            <SubMenu
                                title="Pages"
                                icon={<House />}
                                items={["Link", "Link2", "Active"]}
                            />
                            <Nav.Item>
                                <Nav.Link href="/home">Active</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="disabled" disabled>
                                    Disabled
    </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    
            </React.Fragment>
        );
    }
}

export default SideBar;