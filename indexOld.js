import React, { Component } from 'react';
import ReactDom from 'react-dom';
import fetchRepos from './src/Github';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { repos: [] };
  }
  componentDidMount() {
    fetchRepos()
      .then((repos) => {
        this.setState({ repos })
      })
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.repos.map((repo) => (
              <li>{repo}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

ReactDom.render(
  <App />,
  document.getElementById('root')
)