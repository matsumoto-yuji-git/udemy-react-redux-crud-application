import React from 'react';

function App() {
  return (
    <React.Fragment>
      <label htmlFor="bar">BAR</label>
      <input type="text" onChange={() => {console.log("I am clicked.")}} />
    </React.Fragment>
  )
}
/* JSX -> JavaScript
function App() {
  return React.createElement(
    "div",
    null,
    "Hello,World!",
  );
}
*/
export default App;
