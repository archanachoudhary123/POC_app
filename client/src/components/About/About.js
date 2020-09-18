import React, { Component } from "react";

class About extends Component {

render() {
    
return (
      <div style={ {display: "flex" }}>
        <div
          style={{
            fontFamily:"Microsoft JhengHei",
            padding: "48px",
            width: "40%"
          }}
        ></div>
        <div className="">
          <div className="">
            <h4>
              <b>About ReactJs </b>
              <p>  ReactJS is highly flexible and its interfaces can be easily migrated to other libraries and 
                  frameworks. ... The ReactJS framework can be used for building cross-platform native mobile and 
                  web applications. It has rich component support, which can also be used as reusable components..
              </p>
            </h4>
            
          </div>
        </div>
      </div>
    );
  }
}

export default About;
