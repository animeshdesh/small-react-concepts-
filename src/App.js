// import React from "react";
// import "./styles.css";
// import axios from "axios";
//Session 1
// import Counter from "./session1/Counter";
// creating a JS-ES6 class
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Counter diff={1} />
//         <Counter diff={10} />
//       </div>
//     );
//   }
// }

// Session 2
// import Form from "./session2/form";

// class App extends React.Component {
//   render() {
//     return <Form />;
//   }
// }

//Session 3

// import CDMountActivity from "./session2/cdMountAcitivity";

// class App extends React.Component {

//   render() {
//     return (<div>
//       <CDMountActivity />
//     </div>);
//   }
// }

// export default App;

// import React, { Component } from "react";
// import CDUpdateActivity from "./session2/CDUpdateAcitivity";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { userId: 1 };
//   }

//   componentDidUpdate() {
//     console.log("App.js - componentDidUpdate called");
//   }

//   render() {
//     return (
//       <div>
//         <input
//           type="number"
//           value={this.state.userId}
//           onChange={(e) => this.setState({ userId: e.target.value })}
//           min={1}
//           max={12}
//         />
//         <CDUpdateActivity userId={this.state.userId} />
//       </div>
//     );
//   }
// }

// FUnction Component

// import "./styles.css";
// import React from "react";
// import Greetings from "./session3/Greetings";

// function App() {
//   return (
//     <div>
//       <Greetings name={"Animesh"} />
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import UserData from "./sesssion1-takehome/userData";

// function App(){
//   return (
//     <div>
//       <UserData/>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import DogPic from "./session2-takehome/Dog";

// function App() {
//   return (
//     <div>
//       <DogPic />
//     </div>
//   );
// }

// export default App;

import BookApp from "./session3-takehome/BookAppointment";
import CounterHooks from "./session3/CounterwithFunction";
import EvenOdd from "./session3/EvenOdd";
import WithFunction from "./session3/withFunction";
import "./styles.css"



function App() {
  return (
    <div>
      <BookApp/>
    </div>
  );
}

export default App;
