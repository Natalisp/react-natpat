import React, {Component} from 'react';

class Stats extends Component {

  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
  }

componentDidMount() {
  var that = this;
		setInterval(function() {
			that.increase();
		}, 100);
}

componentWillUnmount() {
  clearInterval(this.state.intervalId);
}

increase() {
  var newCount = this.state.number + 1;
  if(newCount <= this.props.max) {
    this.setState({ number: newCount })
  } else {
    clearInterval(this.state.intervalId)
  }
}

  render() {
    return (
      <div className="col-md-3 center-block" id="stat">
      {this.state.number}
      <p>{this.props.description}</p>
      </div>
    )
  }
}

export default Stats;
