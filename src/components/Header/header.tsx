import * as React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export interface IState {
  isOpen: boolean;
}

export default class Header extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" className="navbar-dark navbar-expand-sm">
          <NavbarBrand href="/">Alfonso Austin</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://s3.us-east-2.amazonaws.com/resume.alfonsoaustin.com/Resume.pdf">
                  Resume
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
