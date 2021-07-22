import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      employeeList: [],
      searchField: null
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json() )
    .then( users => this.setState({ employeeList: users }) )
  }

  render() {

    const {employeeList, searchField} = this.state ;
    const filteredEmployee = employeeList.filter( employee =>
      employee.name.includes(searchField)
    )

    return (
      <div className="App">
        <h1>My employee list</h1>
        <SearchBox
          placeholder="search employee"
          handleChange={ e => this.setState({ searchField: e.target.value }) }
        />
        <CardList name="Bhumi Patel" employees={ filteredEmployee }>
        </CardList>
      </div>
    );
  }
}

export default App;
