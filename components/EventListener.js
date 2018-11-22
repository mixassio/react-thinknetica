import React, { Fragment, Component } from 'react';
/* eslint linebreak-style: ["error", "windows"] */

class EventListener extends Component {
  constructor(props) {
    super(props);
    this.state = { eventType: 'Unknown' };
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({
      eventType: e.type,
    });
  }

  render() {
    return (
        <Fragment>
            <h1>{this.state.eventType}</h1>
            <textarea
              // onChange={this.update}
              onPaste={this.update}
              onCopy={this.update}
              onCut={this.update}
            />
        </Fragment>
    );
  }
}
export default EventListener;
