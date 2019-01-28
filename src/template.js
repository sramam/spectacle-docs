import React from "react";
import PropTypes from "prop-types";
import { Footer } from "./components/footer";
import { GlobalStyle } from "./global-style";
import { withRouter } from "react-static";

class Template extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}

Template.propTypes = {
  children: PropTypes.node
};

Template.defaultProps = {
  children: null
};

export default withRouter(Template);