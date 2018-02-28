import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import { getActiveLanguage, setActiveLanguage } from "react-localize-redux";

import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";

class HeaderNav extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	componentWillMount() {
		let { locale } = this.props.match.params;
        let { setLang } = this.props;
        
        if (locale) {
            setLang(locale)
        }
	}

    componentDidUpdate() {}

	render() {
		return (
			<Navbar color="teal" light expand="md">
				<NavbarBrand tag={Link} to={"/"}>
					reactstrap
				</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink tag={Link} to={"/test"}>
								Test
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Options
							</DropdownToggle>
							<DropdownMenu>
								<DropdownItem>Option 1</DropdownItem>
								<DropdownItem>Option 2</DropdownItem>
								<DropdownItem divider />
								<DropdownItem>Reset</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}

const mapStateToProps = state => ({
	location: state.location,
	currentLanguage: getActiveLanguage(state.locale).code
});
const mapDispatchToProps = dispatch => ({
	setLang: lang => dispatch(setActiveLanguage(lang))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderNav));
