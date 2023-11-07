import React, { Component } from 'react';

import img1 from "../assets/1.png"

class Ballons extends Component {
  constructor() {
    super();
    this.state = {
      isAnimating: false,
    };
  }

  handleButtonClick = () => {
    this.setState((prevState) => ({
      isAnimating: !prevState.isAnimating,
    }));
  };

  render() {
    const { isAnimating } = this.state;
    const animationClass = isAnimating ? 'animate' : '';
    
    return (
      <div className="image-container">
        <button onClick={this.handleButtonClick}>
          {isAnimating ? 'Stop Animation' : 'Start Animation'}
        </button>
        <img className={`animated-image ${animationClass}`} src={img1} alt="Animated Image" />
      </div>
    );
  }
}

export default Ballons;

