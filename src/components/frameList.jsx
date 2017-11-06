import React from 'react';

const fabric = window.fabric;

export default class FrameList extends React.Component {
  componentDidMount() {
    this.wrapFabricCanvases();
  }

  componentDidUpdate(oldProps) {
    if (oldProps.images !== this.props.images) {
      this.wrapFabricCanvases();
    }
  }

  // componentWillRecieveProps(newProps) {
  //   if (newProps !== this.props) {
  //     this.applyFilters();
  //   }
  // }

  // Wrap each of the rendered canvases in fabric canvases:
  wrapFabricCanvases() {
    const fabricCanvases = Array.from(document.querySelectorAll('.frameCanvas'))
      .map((canvas, index) => {
        const fabricCanvas = new fabric.Canvas(canvas.id);
        const filteredImage = this.applyFilter(this.props.images[index]);
        fabricCanvas.setBackgroundImage(filteredImage);
        fabricCanvas.renderAll();
        return fabricCanvas;
      });
    this.props.setCanvases(fabricCanvases);
  }

  applyFilter(image) {
    return image;
  }

  render() {
    return (
      <div className="frameList">
        {this.props.images.map((frame, index) => <ImageCanvas key={index} id={`frame${index}`} />)}
      </div>
    );
  }
}

const ImageCanvas = ({id}) => (
  <canvas className="frameCanvas" id={id} height="100px" width="100px">
    Image uploaded to be a frame in your gif.
  </canvas>
);
