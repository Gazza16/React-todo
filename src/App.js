import React, { Component } from 'react';
import './App.css';
//import { Progress, Level, Heading, Title } from 'reactbulma'
import Header from './components/Header';
import { Input, Message, Delete } from 'reactbulma'


class App extends Component {
  state = {
    tasks: [ 
    {job:'Do the washing', dateTime: new Date()}
    ],
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
   const existingTask = this.state.tasks.find((task) => task.job === this.state.searchPhrase )
   if (this.state.searchPhrase !== '' && 
    !existingTask) { 

   //add new task to our copy of tasks
   currentTasks.unshift({job: this.state.searchPhrase, dateTime: new Date()})

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
          // .filter(myTask => myTask.includes(searchPhrase))
          .map(myTask => (

            <Message>
              <Message.Header>
                <p>{ myTask.job }</p>
                <p>{myTask.dateTime.toLocalString()}</p>
                 <Delete/>
                }
              </Message.Header>
            </Message>
              ))
        }

      </div>
    );
  }
}

export default App;
