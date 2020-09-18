import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentprofile } from "../../actions/profileActions";
import { Label } from "semantic-ui-react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import './table.css';
import './profile.css';
class Profile extends Component {
    constructor() {
        super();
        this.state = {
            profile:[],
            AccBal:0,
            errors: {},
           isChecked:false
        };
      }
componentDidMount()
{
    const {user} = this.props.auth;
  
    console.log("in profile.js file now")
    this.props.getCurrentprofile(user.id);
              
}

onChange(e)
{

}



render()
 {
        const {user} = this.props.auth;
        console.log ("printing the user",user);
        console.log ("printing the user",user.id);
        console.log ("printing the balance",this.props.profile.AccBal);
    
        return(
                    <div className="wrapper-users">
                       <h2><b>Welcome ,{user.username.split(" ")[0]} !</b></h2>
                       
                       <hr size="3"/>
                       
                       <h5><b> Account Balance : {this.props.profile.AccBal} </b> </h5>
                        <div className="table-responsive-xl">
                              <Table striped bordered hover size="sm">
                                <style>background-color: grey;</style>
                                 <thead className="thead-dark" >
                                    <tr>
                                        <td>Date </td>
                                        <td>Description</td>
                                        <td>Amount</td>
                                                                  
                                    </tr>
                                </thead>
                                 <tbody> 
                  
                                     {this.props.profile.profile.map((item, _id) => 
                                        (
                                            <tr key={item._id}>
                                                <td>{item.date}</td>
                                                <td>{item.description}</td>
                                                <td>{item.amount}</td>
                                             </tr>   
                                        ))}
                                </tbody>
                                </Table>
                                <br/>
                                <br/>
                                <hr/>
                                <div style= {{display:"flex"}}>
                                <h5><b>Subscribe to Alerts</b></h5> 
                                <h5  style= {{marginLeft:"200px"}} ><b>Two Way Data Binding</b></h5>
                                </div> 
                                <div style= {{display:"flex"}}>
                                <Label> 
                                    <span >
                                        <input type= "checkbox" readOnly="" />
                                    <span></span>
                                    </span>  SMS Alerts
                                </Label>
       
                                </div>

                                <Label> 
                                    <span >
                                        <input type="checkbox" readOnly="" />
                                    <span></span>
                                   </span> Marketing Newsletter
                                </Label>
                                <Label> 
                                    <span >
                                    <input type="checkbox" readOnly="" />
                                    <span></span>
                                    </span> Flyers
                                <br/>
                                <br/>
                                </Label>  
                                <Button variant="primary">Submit</Button>               
                     </div>
              
                    </div>  
                              
             )  
     }
}

 Profile.propTypes = {
      getCurrentprofile:PropTypes.func.isRequired,
      profile:PropTypes.object.isRequired,
      auth: PropTypes.object.isRequired,
      
  };
const mapStateToProps = state => ({
      profile:state.profile,
      auth: state.auth,
      AccBal:state.AccBal
      
  });
  export default connect(mapStateToProps,{getCurrentprofile})(Profile);