import React from "react";
import { Nav } from "react-bootstrap";
import { House } from "react-bootstrap-icons";
import { Link, useParams } from "react-router-dom";
import SubMenu from "./SubMenu";

function SideBar(props) {
    let { id } = useParams();
    return (
        <React.Fragment>
            <div className={"sidebar bg-light " + (props.isOpen ? "is-open" : "")}>
                <Nav variant="pills" defaultActiveKey="/home" className="flex-column">
                    <div className="navbar-brand">Menu</div>
                    <SubMenu
                        title="Pages"
                        icon={<House />}
                        items={["Link", "Link2", "Active"]}
                    />
                    <Nav.Item>
                        <Link className="nav-link active" eventKey="home" to="/dashboard/home">Props</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link active" eventKey="algo" to="/dashboard/algo">Algo {id}</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>

        </React.Fragment>
    );
}

export default SideBar;