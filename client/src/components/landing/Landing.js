import React, { Component } from "react";
import { HashRouter,Route,Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Profile from "../profile/Profile";
import Team from "../Team/Team";
import About from "../About/About";
import './Landing.css';

class Landing extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    //const { user } = this.props.auth;
return (
    <HashRouter>
        <div className="menu-position">
          <div className="menu-left-part">
            <h1><Link to= "/Profile">DASHBOARD</Link></h1>
            <div className="ui divider"></div>
            <h1><Link to= "/About">ABOUT</Link></h1>
            <div className="ui divider"></div>
            <h1><Link to= "/Team">TEAM</Link></h1>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
          <div className="detail-right-part">
            <Route path='/Profile' component={Profile} />
            <Route path='/About' component={About} />
            <Route path='/Team' component={Team} />
          </div>  
     
        </div>
        
        </HashRouter>
        
    );
  }
}
Landing.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Landing);