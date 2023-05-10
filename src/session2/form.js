import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  captureText = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Form submitted ");
          }}
        >
          <label>
            Name :
            <input
              type="text"
              name="text"
              value={this.state.text}
              onChange={this.captureText}
            />
          </label>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Form;
