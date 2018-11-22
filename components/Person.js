import React, { Component } from 'react';
/* eslint linebreak-style: ["error", "windows"] */

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Unknown',
      lastName: 'Unknown',
    };
  }

  setField(name, e) {
    this.setState({
      [name]: e.target.value,
    });
  }

  render() {
    return (
            <div>
                <div>
                    <li>Firsname: {this.state.firstName}</li>
                    <li>Lastname: {this.state.lastName}</li>
                </div>
                <label>Firstname</label>
                <input
                    onChange={e => this.setField('firstName', e)}
                    value={this.state.firstName}
                />
                <label>Lastname</label>
                <input
                    onChange={e => this.setField('lastName', e)}
                    value={this.state.lastName}
                />
            </div>
    );
  }
}

export default Person;
