import React from 'react';
import './Nav.css'
class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return ( 
            <nav className = "todo__nav" >
                {Object.keys(this.props.navList).map((link, key) => {
                    return <button
                    data-filter={this.props.navList[link]}
                    key={key}
                    className={"uk-button uk-button-link " + (this.props.activeLink === this.props.navList[link] ? "active" : "")}
                    onClick={this.props.goTo}>
                        {link}</button>
                })}
            </nav>
        )
    };
}

export default Nav;