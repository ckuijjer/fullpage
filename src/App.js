import React, { Component } from 'react';
import { Fullpage, Slide } from './Fullpage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
    }

    let i = 0;
    window.setInterval(() => {
      i++;
      if (i > 2) {
        i = 0;
      }
      this.setState({ active: i })
    }, 3000);
  }

  render() {
    return (
      <Fullpage active={this.state.active}>
        <Slide>1</Slide>
        <Slide>2</Slide>
        <Slide>3</Slide>        
      </Fullpage>
    );
  }
}

export default App;
