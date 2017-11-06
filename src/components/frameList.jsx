export class FrameList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.wrapFabricCanvases();
    this.setCanvasBackgrounds();
    // this.applyFilters();
  }

  componentDidUpdate(oldProps) {
    if (oldProps.images !== props.images) {
      this.wrapFabricCanvases();
      this.setCanvasBackgrounds();
      // this.applyFilters();
    }
  }

  // componentWillRecieveProps(newProps) {
  //   if (newProps !== this.props) {
  //     this.applyFilters();
  //   }
  // }

  // Wrap each of the rendered canvases in fabric canvases:
  wrapFabricCanvases() {
    const fabricCanvases = document.querySelectorAll('.frameCanvas')
      .map((canvas) => new fabric.Canvas(canvas.id));
    this.props.setCanvases(fabricCanvases);
  }

  setCanvasBackgrounds() {
    this.props.canvases.forEach((canvas, index) => canvas.setBackgroundImage(this.props.images[index]));
  }

  // applyFilters() {
  //   const canvases = ___get canvases___;
  //   canvases.map(___apply filter___);
  // }

  render() {
    <div className="frameList">
      {frames.map((frame, index) => <ImageCanvas key={index} />)}
    </div>
  }
}

const ImageCanvas = ({ key }) => (
  <canvas key={key} id={`frame${index}`} className="frameCanvas" height="100px" width="100px">
    Image uploaded to be a frame in your gif.
  </canvas>
);
