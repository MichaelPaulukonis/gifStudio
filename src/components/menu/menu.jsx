export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeSubmenu: undefined};
  }

  handleClick(menuKey) {
    this.state.setState({activeSubmenu: menuKey});
  }

  render() {
    return (
      <div className="menu">
        <div className="subMenus">
          <div onClick={this.handleClick('upload')}>Upload</div>
          <div onClick={this.handleClick('filters')}>Filters</div>
        </div>
        <div className="menuBody">
          {menuItems[state.activeSubmenu](props.setImages, props.setFilter)}
        </div>
      </div>
    );
  }
}

const menuItems = {
  upload: (setImages, setCanvases) => <Upload setImages={setImages} />,
  filters: (setImages, setCanvases) => <Filters setFilter={setFilter} />
};
