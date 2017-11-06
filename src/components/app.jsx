import React from 'react';

import Menu from './menu/menu';
import FrameList from './frameList';
import Preview from './preview';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldShowMenu: false,
      images: [],
      canvases: [],
      filter: 'none'
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.setImages = this.setImages.bind(this);
    this.setCanvases = this.setCanvases.bind(this);
    this.setFilter = this.setFilter.bind(this);
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

  setFilter(filter) {
    this.setState({ filter: filter });
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <button id="menuButton" onClick={this.toggleMenu}>Menu</button>
          <img id="logo" src="___toDo___" alt="logo"></img>
          <Menu hidden={this.state.shouldShowMenu} setImages={this.setImages} setFilter={this.setFilter} />
        </div>

        <FrameList images={this.state.images} canvases={this.state.canvases} filter={this.state.filter} setCanvases={this.setCanvases} />

        <div className="footer">
          <button id="generateButton" onClick={this.generateGif}>Generate</button>
          <Preview images={this.state.images} />
        </div>
      </div>
    );
  }
}
