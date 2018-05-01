import React, { Component } from 'react';
import './App.css';


const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  },
  {
    title: 'Meow',
    url: 'https://github.com/reactjs/meow',
    author: 'Germanas LAtvaitis',
    num_comments: 12,
    points: 55,
    objectID: 2
  },
];

function isSearched(searchTerm) {
  return function(item) {
// some condition which returns true or false
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      searchTerm: ''
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }
  onDismiss(id) {
    function isNotId(item) {
      return item.objectID !== id;
    }
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });

  }
  onReset(id) {
    this.setState({ list: list });
  }
  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
        <div className="App">

          <button
              onClick={() => this.onReset()}
              type="button">
          Reset
          </button>

          <form>
            <input
            type="text"
            onChange={this.onSearchChange}
            />
          </form>

        {this.state.list.filter(isSearched(this.state.searchTerm)).map(item =>
          <div key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
            <span>
              <button
                  onClick={() => this.onDismiss(item.objectID)}
                  type="button">
              Dismiss
              </button>

            </span>
        </div>
)}
        </div>
    );
  }
}


export default App;