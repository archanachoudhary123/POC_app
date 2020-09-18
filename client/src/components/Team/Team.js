import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentteam } from "../../actions/teamActions";
import Image from './image/index.jpg';
import './Team.css';

class Team extends Component {
    constructor() {
        super();
        this.state = {
            team:[],
          errors: {}
        };
      }

      
componentDidMount()
{
    console.log("in team.js file now")
    this.props.getCurrentteam();
    console.log("length is ", this.props.team.team[0])
}


render() {
      
        return(
              <div className="container">
                <h2><b>Meet The Team </b></h2>
                <div className="ui divider"/>
                {
                      this.props.team.team.map((item, index)=>(
                          <div key = {index} style= {{display:"flex"}}><img  src = {Image} alt="imagesize" style= {{marginRight:"90px"}}
                          />
                          <h3 key = {index}>
                              {item.id}{item.username}
                          </h3>
                          </div> 
                      ))
                }
                </div> 
              
                
                
                               
              )
          }
  }

  Team.propTypes = {
      getCurrentteam:PropTypes.func.isRequired,
      team:PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
      team:state.team
  });
  export default connect(mapStateToProps,{getCurrentteam})(Team);