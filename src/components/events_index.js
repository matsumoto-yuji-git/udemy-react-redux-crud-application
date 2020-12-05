import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'

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

import { readEvents } from '../actions'

class EventsIndex extends Component {
  componentDidMount(){
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    return (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>

          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })

const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
