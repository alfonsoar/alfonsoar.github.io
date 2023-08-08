import React from "react";
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

export class Header extends React.Component<{}, IState> {
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
          <Collapse isOpen={this.state.isOpen} navbar style={{flexGrow: 0}}>
            <Nav navbar>
              <NavItem>
                <NavLink href="/resume.pdf">
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
