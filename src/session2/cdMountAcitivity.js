import axios from "axios";
import React, { Component } from "react";

class CDMountActivity extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  async componentDidMount() {
    let URL = "https://reqres.in/api/users/1";
    const res = await axios.get(URL);
    const email = res.data.data.email;
    this.setState({ email: email });
  }

  render() {
    return (
      <div>
        <h1>{this.state.email}</h1>
      </div>
    );
  }
}

export default CDMountActivity;
