import React, { Component } from 'react';
import './Video.css';
import arrow from '../../assets/arrow-right-update.png';
import thumbnail from '../../assets/videothumbnail.png';
import Modal from './Modal';

class Video extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="Video-Container">
        <h3> Watch and Learn. </h3>
        <h1> All4 Explained. </h1>
        <Modal />
      </div>
    );
  }
}

export default Video;
