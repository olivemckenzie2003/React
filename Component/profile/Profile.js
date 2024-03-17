import React, {useState} from "react";


/*

import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Olive McKenzie",
      location: "Birmingham",
    };
  }

  

  render() {
    return (
      <div>
        <h1>My name is {this.state.name}</h1>
        <p>I live in {this.state.location}</p>
      </div>
    );
  }
}

export default Profile;
*/
//

function Profile() {
  const [name, setName] = useState("Olive McKenzie");
  const [location, setLocation] = useState("Birmingham");

  return (
    <div>
      <h1>My name is {name}</h1>
      <p>I live in {location}</p>
    </div>
  );
}

export default Profile;