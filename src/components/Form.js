import React, { Component } from "react";

class Form extends Component {
  state = {};
  render() {
    return (
      <div>
        <form>
          City:
          <input type="text" name="City" />
        </form>
      </div>
    );
  }
}

export default Form;
