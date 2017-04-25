import React, {Component} from 'react';

class Word extends Component {

  constructor(props) {
    super(props)
    this.state = {
      greeting: "HELLO",
      i: 0
    }
  }

  componentDidMount() {
    var that = this;
      setInterval(function() {
        that.changeGreeting();
      }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  changeGreeting() {
    var greetings = ["", "PRIVET", "HOLA", "CIAO", "ALOHA"]
    var newCount = this.state.i + 1;
    if(newCount < greetings.length) {
      this.setState({ greeting: greetings[newCount], i: newCount })
    } else {
      clearInterval(this.state.intervalId)
      this.setState({ greeting: "HELLO", i: 0 })
    }
  }

  render() {
    return(
      <div>
        {this.state.greeting}
        </div>
    )
  }

}

export default Word;
