import React from 'react';

const fabric = window.fabric;

export default class FrameList extends React.Component {
  componentDidMount() {
    this.setupFabricCanvases();
  }

  componentDidUpdate(oldProps) {
    if (oldProps.images !== this.props.images) {
      this.setupFabricCanvases();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // if (nextProps.images.length !== this.props.images.length) {
    //   return true;
    // } else {
    //   return false;
    // }
    return false;
  }

  // Wrap each of the rendered canvases in fabric canvases:
  setupFabricCanvases() {
    const fabricCanvases = Array.from(document.querySelectorAll('.frameCanvas'))
      .map((canvas, index) => {
        const fabricCanvas = new fabric.Canvas(canvas.id);
        fabricCanvas.setBackgroundImage(this.props.images[index]);
        fabricCanvas.renderAll();
        return fabricCanvas;
      });
    this.props.setCanvases(fabricCanvases);
  }

  render() {
    return (
      <div className="frameList">
        {
          this.props.images.map((frame, index) => {
            return (
              <canvas className="frameCanvas" key={index} id={`frame${index}`} height="100px" width="100px">
                Image uploaded to be a frame in your gif.
              </canvas>
            );
          })
        }
      </div>
    );
  }
}

// class ImageCanvas extends React.Component {
//   shouldComponentUpdate() {
//     return false;
//   }
//
//   render() {
//     return (
//       <canvas className="frameCanvas" id={this.props.id} height="100px" width="100px">
//         Image uploaded to be a frame in your gif.
//       </canvas>
//     );
//   }
// }

// const ImageCanvas = ({id}) => (
//   <canvas className="frameCanvas" id={id} height="100px" width="100px">
//     Image uploaded to be a frame in your gif.
//   </canvas>
// );
