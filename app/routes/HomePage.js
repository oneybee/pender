/**
 *
 * HomePage
 *
 */
import React, { Component } from "react";
class HomePage extends Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div
          style={{
            maxWidth: "800px",
            paddingTop: "60px",
            paddingBottom: "60px",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <span
            style={{
              fontFamily: "Raleway",
              display: "block",
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "30px"
            }}
          >
            Text
          </span>
          <div style={{ paddingTop: "26px" }} />
        </div>
      </div>
    ); // eslint-disable-line
  }
}
export default HomePage;
