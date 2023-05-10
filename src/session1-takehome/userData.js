// https://reqres.in/api/users/
import axios from "axios";
import React, { Component } from "react";

class UserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata: {
        id: 1,
        email: "",
        first_name: "",
        last_name: "",
        avatar:
          "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg"
      }
    };
  }

  ShowData = async (id) => {
    let response = await axios
      .get(`https://reqres.in/api/users/${id}`)
      .catch((err) => {
        if (err.response) {
          alert("Failed to fetch the data");
        } else {
          console.log("Error", err.message);
        }
      });

    if (response) {
      let userData = response.data.data;
      this.setState({
        userdata: {
          id: id,
          email: userData.email,
          firstName: userData.first_name,
          lastName: userData.last_name,
          imageLink: userData.avatar
        }
      });
    }
  };

  render() {
    return (
      <div>
        <button
          style={{ margin: "0px 10px 0px 0px", padding: "10px" }}
          onClick={() => this.ShowData(1)}
        >
          1
        </button>
        <button
          style={{ margin: "0px 10px 0px 0px", padding: "10px" }}
          onClick={() => this.ShowData(2)}
        >
          2
        </button>
        <button
          style={{ margin: "0px 10px 0px 0px", padding: "10px" }}
          onClick={() => this.ShowData(3)}
        >
          3
        </button>
        <button
          style={{ margin: "0px 10px 0px 0px", padding: "10px" }}
          onClick={() => this.ShowData(100)}
        >
          100
        </button>

        <ul>
          <li>Email : {this.state.userdata.email}</li>
          <li>
            Name :{" "}
            {`${this.state.userdata.first_name} ${this.state.userdata.last_name}`}
          </li>
        </ul>
        <img
          width="200"
          src={this.state.userdata.imageLink}
          alt="Not available"
        />
      </div>
    );
  }
}

export default UserData;
