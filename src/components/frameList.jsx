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

  // Wrap each of the rendered canvases in fabric canvases:
  setupFabricCanvases() {
    const rootDiv = document.getElementById('frameListRoot');
    this.removeChildren(rootDiv);
    this.props.images.forEach((frame, index) => {
      const canvas = this.appendCanvas(rootDiv, `frame${index}`);
      this.renderFabricCanvas(canvas, this.props.images[index]);
    });
  }

  removeChildren(rootDiv) {
    while(rootDiv.firstChild) {
      rootDiv.removeChild(rootDiv.firstChild);
    }
  }

  appendCanvas(rootDiv, id) {
    const canvas = document.createElement('canvas');
    canvas.className = 'frameCanvas';
    canvas.id = id;
    rootDiv.appendChild(canvas);
    return canvas;
  }

  renderFabricCanvas(canvas, image) {
    const fabricCanvas = new fabric.Canvas(canvas.id, {width: 100, height: 100});;
    image = image.applyFilters((filteredImage) => {
      fabricCanvas.setBackgroundImage(filteredImage, () => fabricCanvas.renderAll());
    });
  }

  render() {
    return (
      <div className="frameList" id="frameListRoot"></div>
    );
  }
}
