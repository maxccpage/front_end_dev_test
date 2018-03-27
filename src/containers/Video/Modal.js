import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import arrow from '../../assets/arrow-right-update.png';
import './Modal.css';

export default class Modal extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton
        style={{ color: 'black' }}
        label="Close"
        primary={true}
        onClick={this.handleClose}
      />
    ];

    return (
      <div>
        <img className="Arrow-Icon" src={arrow} onClick={this.handleOpen} />
        <Dialog
          title=""
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Ldjmb15Jsx0?rel=0&amp;controls=0&amp;showinfo=0"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          />
        </Dialog>
      </div>
    );
  }
}
