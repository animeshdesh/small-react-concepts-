import React, { Component } from "react";
import axios from "axios";

class DogPic extends Component {
  constructor(props) {
    super(props);
    this.defaultBread = "random";
    this.state = { bread: this.defaultBread, imgLink: "" };
  }

  componentDidMount() {
    this.renderDogImage(this.state.bread);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.bread !== this.state.bread) {
      this.renderDogImage(this.state.bread);
    }
  }
  renderDogImage = async (bread) => {
    let url = "";
    if (bread === this.defaultBread) {
      url = "https://dog.ceo/api/breeds/image/random";
    } else {
      url = `https://dog.ceo/api/breed/${bread}/images/random`;
    }
    const res = await axios.get(url);
    const imgLink = res.data.message;

    this.setState({
      imgLink: imgLink
    });
  };

  handelBreadChange = (e) => {
    const newBread = e.target.value;
    this.setState({
      bread: newBread
    });
  };

  render() {
    return (
      <div>
        <label>
          Select A breed:
          <select
            value={this.state.bread}
            onChange={(e) => this.handelBreadChange(e)}
            style={{ marginBottom: "10px" }}
          >
            <option value={this.defaultBread}>Random</option>
            <option value="beagle">Beagle</option>
            <option value="boxer">Boxer</option>
            <option value="dalmatian">Dalmatian</option>
            <option value="husky">Husky</option>
          </select>
        </label>
        <div>
          <div>
            <img src={this.state.imgLink} alt="Not available" height="400" />
          </div>
          <div>
            <button
              onClick={() => this.renderDogImage(this.state.bread)}
              style={{ padding: "5px" }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DogPic;
