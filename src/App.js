import React from 'react';
import PropTypes from 'prop-types';
/*
function App() {
  return (
    <React.Fragment>
      <label htmlFor="bar">BAR</label>
      <input type="text" onChange={() => {console.log("I am clicked.")}} />
    </React.Fragment>
  )
}
*/
/* JSX -> JavaScript
function App() {
  return React.createElement(
    "div",
    null,
    "Hello,World!",
  );
}
*/

const App = () => {
  const profiles = [
    {name: "Taiga", age: 4800},
    {name: "Taitas", age: 9000},
    {name: "Fooma", age: 5000},
    {name: "defaultraman", age: 20000}
  ]
  return (
  <div>
    {
      profiles.map ((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />
      })
    }
  </div>)
}

const User = (props) => {
return <div>Hi! I am {props.name}, and {props.age} years old!!</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}
export default App;
