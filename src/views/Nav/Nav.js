import React from "react";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink exact={true} to="/" activeclassName="active">
                    Home
                </NavLink>
                <NavLink to="/todo" activeclassName="active">
                    Todos
                </NavLink>
                <NavLink to="/about" activeclassName="active">
                    About
                </NavLink>
            </div>
        );
    }
}
export default Nav;
