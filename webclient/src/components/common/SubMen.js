import React from "react";
import { Accordion, Nav } from "react-bootstrap";
import classNames from "classnames";
import { CaretUpFill, CaretDownFill, House } from "react-bootstrap-icons";

class SubMen extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { icon, title, items } = this.props;

    return (
      <Nav.Item className={classNames({ open: !this.state.collapsed })}>
        <Accordion>
          <Accordion.Toggle
            as={Nav.Link}
            variant="link"
            eventKey="0"
            onClick={this.toggleNavbar}
          >
            <House />
            {title}
              {this.state.collapsed ? <CaretDownFill /> : <CaretUpFill />}
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="0">
            <nav className="nav flex-column">
              {items.map(item => (
                <a
                  className={`nav-link nav-item pl-5 ${
                    item === "Active" ? "active" : ""
                  } `}
                  href="/"
                  key={item}
                >
                  {item}
                </a>
              ))}
            </nav>
          </Accordion.Collapse>
        </Accordion>
      </Nav.Item>
    );

    // return (
    //   <div>
    //     <NavItem
    //       onClick={this.toggleNavbar}
    //       className={classNames({ "menu-open": !this.state.collapsed })}
    //     >
    //       <NavLink className="dropdown-toggle" href="#">
    //         <FontAwesomeIcon icon={icon} className="mr-2" />
    //         {title}
    //       </NavLink>
    //     </NavItem>
    //     <Collapse
    //       isOpen={!this.state.collapsed}
    //       navbar
    //       className={classNames("items-menu", {
    //         "mb-1": !this.state.collapsed
    //       })}
    //     >
    //       {items.map(item => (
    //         <NavItem key={item} className="pl-4">
    //           <NavLink>{item}</NavLink>
    //         </NavItem>
    //       ))}
    //     </Collapse>
    //   </div>
    // );
  }
}

export default SubMen;