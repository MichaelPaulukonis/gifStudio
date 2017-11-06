export class FrameList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.filter !== 'none') {
      ___apply filters___
    }
  }

  componentWillRecieveProps(newProps) {
    if (newProps !== this.props) {
      ___apply filters___
    }
  }

  applyFilters() {
    const canvases = ___get canvases___;
    canvases.map(___apply filter___);
  }

  render() {
    <div className="frameList">
      {mapFramesToCanvases(props.images)}
    </div>
  }
}

function mapFramesToCanvases(frames) {
  return frames.map((frame, index) => {
    const newCanvas = <ImageCanvas key={index} />
    const width = Math.min(frame.width, newCanvas.width);
    const height = Math.min(frame.height, newCanvas.height);
    newCanvas.getContext('2d').drawImage(frame, 0, 0, width, height);
    return newCanvas;
  });
}

const ImageCanvas = ({ key }) => (
  <canvas key={key} height="100px" width="100px">
    Image uploaded to be a frame in your gif.
  </canvas>
);
