import React, {Component} from 'react';

class Project extends Component {

  render() {
    return (
      <div className="col-sm-4">
        <div className="project-wrap">
            <img src={this.props.src} role="presentation"/>
            <span className="top">{this.props.title}</span>
            <span className="bottom"><p>{this.props.tools}</p></span>
        </div>
      </div>
    )
  }
}


export default Project;
