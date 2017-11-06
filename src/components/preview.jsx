export class Preview {
  constructor() {
    super(props);

    this.state = { currentFrame: 0 };
    window.setInterval(iterateThroughFrames, 1000);
  }

  iterateThroughFrames() {
    if (this.state.currentFrame === props.images.length - 1) {
      this.state.setState = { currentFrame: 0 };
    } else {
      this.state.setState = { currentFrame: this.state.currentFrame + 1 };
    }
  }

  render() {
    return (
      <div>
        <img src={(props.images.length > 0)
          ? props.images[this.state.currentFrame]
          : ___placeholder image___}>
        </img>
      </div>
    );
  }
}
