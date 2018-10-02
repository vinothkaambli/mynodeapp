import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles"
import Header from "./Header.jsx";

const headerStyle = theme => ({
    appBar: {
      position: "fixed",
      backgroundColor: "#c3c3be",
      boxShadow: "none",
      borderBottom: "0",
      marginBottom: "0",
      width: "100%",
      zIndex: "1029",
      border: "0",
      borderRadius: "0",
      padding: "10px 0",
      transition: "all 150ms ease 0s",
      minHeight: "25px",
      height: "80px",
      display: "block",
      color: "#61576d"
    },
    container: {
      minHeight: "25px"
    },
    flex: {
      flex: 1
    },
    title: {
      fontWeight: "500",
      lineHeight: "50px",
      fontSize: "40px",
      borderRadius: "3px",
      textTransform: "none",
      color: "inherit"
    },
    appResponsive: {
      top: "8px"
    }
});

const App = (props) => {
    return (
        <Header {...props} />
    );
};

App.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(headerStyle)(App);
