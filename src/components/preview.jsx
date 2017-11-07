import React from 'react';
const fabric = window.fabric;

export default class Preview extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentFrame: 0 };

    this.iterateThroughFrames = this.iterateThroughFrames.bind(this);
    this.startInterval = this.startInterval.bind(this);

    this.startInterval();
  }

  componentDidMount() {
    this.canvas = new fabric.Canvas('previewCanvas');
  }

  componentDidUpdate(oldProps) {
    if (oldProps.images !== this.props.images) {
      this.startInterval();
    }
  }

  startInterval() {
    if (this.props.images.length > 0) {
      window.clearInterval(this.interval);
      this.setState({ currentFrame: 0 }, () => this.interval = window.setInterval(this.iterateThroughFrames, 500));
    }
  }

  iterateThroughFrames() {
    if (this.state.currentFrame === this.props.images.length - 1) {
      this.setState({ currentFrame: 0 }, this.updateImage);
    } else {
      this.setState({ currentFrame: this.state.currentFrame + 1 }, this.updateImage);
    }
  }

  updateImage() {
    this.canvas.setBackgroundImage(this.props.images[this.state.currentFrame]);
    this.canvas.renderAll();
  }

  render() {
    return <canvas id="previewCanvas"></canvas>;
  }
}
