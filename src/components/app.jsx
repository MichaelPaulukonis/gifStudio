import React from 'react';

import Menu from './menu/menu';
import FrameList from './frameList';
import Preview from './preview';
const GIF = window.GIF;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldShowMenu: false,
      images: [],
      canvases: [],
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.setImages = this.setImages.bind(this);
    this.setCanvases = this.setCanvases.bind(this);
    this.generateGif = this.generateGif.bind(this);
  }

  toggleMenu() {
    this.setState({ shouldShowMenu: !this.state.shouldShowMenu });
  }

  setImages(images) {
    this.setState({ images: images });
  }

  setCanvases(canvases) {
    this.setState({ canvases: canvases });
  }

  generateGif() {
    const gif = new GIF({
      workers: 2,
      quality: 10
    });

    this.state.canvases.forEach((canvas) => gif.addFrame(canvas.getElement(), { delay: 500 }));

    gif.on('finished', (blob) => {
      window.open(URL.createObjectURL(blob));
    });

    gif.render();
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <button id="menuButton" onClick={this.toggleMenu}><i className="material-icons">menu</i></button>
          <img id="logo" src="___toDo___" alt="logo"></img>
          <Menu hidden={this.state.shouldShowMenu} images={this.state.images} setImages={this.setImages} />
        </div>

        <FrameList images={this.state.images} canvases={this.state.canvases} filter={this.state.filter} setCanvases={this.setCanvases} />

        <div className="footer">
          <button id="generateButton" onClick={this.generateGif}>Generate</button>
          {/* <Preview images={this.state.images} /> */}
        </div>
      </div>
    );
  }
}
