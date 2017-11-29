import React, { Component } from 'react';
import './App.css';
//import { Progress, Level, Heading, Title } from 'reactbulma'
import Header from './components/Header';
import { Input, Message, Delete } from 'reactbulma'


class App extends Component {
  state = {
    tasks: ['Do the washing', 'Walk the dog'],
    searchPhrase: ''
  }

  onChangeQuery = (event) => {
    this.setState({
      searchPhrase: event.target.value
    })
  }

  addTask = (event) => {
    event.preventDefault();

   const currentTasks = [...this.state.tasks]
   if (this.state.searchPhrase !== '' && 
    !this.state.tasks.includes(this.state.searchPhrase)) { 

   //add new task to our copy of tasks
   currentTasks.unshift(this.state.searchPhrase)

   //update the state with the new tasks
   this.setState({
    tasks: currentTasks,
    searchPhrase: ''
   })
  }
}
  render() {

      const { tasks, searchPhrase } = this.state;

    return (
      <div className="App">
        <Header totalIncomplete={tasks.length} title="INCOMPLETE"/>

        <form onSubmit={ this.addTask }>
            <Input primary large
               placeholder="search / add a todo"
               value = { searchPhrase }
               onChange={ this.onChangeQuery}
              />
        </form>

        {
          tasks
          .filter(myTask => myTask.includes(searchPhrase)).map(myTask => (

            <Message>
              <Message.Header>
                <p>{ myTask }</p>
                 <Delete/>
              </Message.Header>
            </Message>
              ))
        }

      </div>
    );
  }
}

export default App;
