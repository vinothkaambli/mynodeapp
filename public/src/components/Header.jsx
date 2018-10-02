import React from 'react';
import PropTypes from 'prop-types';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Buttons from "./Buttons.jsx";

const Header = (props) => {
    const { classes, ...rest } = props;

    return (
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.container}>
                <div className={classes.flex}>
                    <span className={classes.title}>WELCOME TO THENI</span>
                </div>
                <Buttons {...rest}/>
            </Toolbar>
        </AppBar>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Header;