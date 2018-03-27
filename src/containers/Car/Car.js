import React, { Component } from 'react';
import './Car.css';
import blue from '../../assets/blue_mini.png';
import red from '../../assets/red_mini.png';

class Car extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Car-Container">
        <div className="Blue-Mini">
          <div className="Car-Image">
            <img src={blue} />
          </div>
          <div className="Car-Info">
            <h3 className="Car-Title"> The mini countryman All4. </h3>
            <p className="Car-Para">
              {' '}
              The rugged adventurer for living life to the fullest. Equipped
              with ample interior space and an array of practical features, it's
              designed to both inspire and accommodate your next great story.{' '}
            </p>
            <button className="Button-Learn"> Learn More </button>
            <button className="Button-Build"> Build &amp; Price </button>
          </div>
        </div>
        <div className="Red-Mini">
          <div className="Car-Image">
            <img src={red} />
          </div>
          <div className="Car-Info">
            <h3 className="Car-Title"> The mini clubman all4. </h3>
            <p className="Car-Para">
              {' '}
              The most refined MINI ever made, featuring an exquistely-crafted
              cabin outfitted with top-shelf finishes and cutting-edge
              technology. Spacious and sophisticated; premium yet practical;
              it's the MINI for every occasion.{' '}
            </p>
            <button className="Button-Learn"> Learn More </button>
            <button className="Button-Build"> Build &amp; Price </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Car;
