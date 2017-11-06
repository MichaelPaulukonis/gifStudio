export class App() {
  constructor() {
    this.state = {
      shouldShowMenu: false,
      images: [],
      canvases: [],
      filter: 'none'
    };
  }

  toggleMenu() {
    this.state.setState({ shouldShowMenu: !this.state.shouldShowMenu });
  }

  setImages(images) {
    this.state.setState({ images: images });
  }

  setCanvases(canvases) {
    this.state.setState({ canvases: canvases });
  }

  setFilter(filter) {
    this.state.setState({ filter: filter });
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <button id="menuButton" onClick={this.toggleMenu}>Menu</button>
          <img id="logo" src="___toDo___"></img>
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
