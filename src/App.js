import React, { Component } from 'react';
import Family from './components/Family';

// first we will make a new context
export const MyContext = React.createContext();

// then create a provider component
class MyProvider extends Component {
  state = {
    name: 'Wes',
    age: 100,
    cool: true
  }

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({
          age: this.state.age + 1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <p>I'm the app</p>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

export default App;
