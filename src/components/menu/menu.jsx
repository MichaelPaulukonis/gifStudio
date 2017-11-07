import React from 'react';

import { Upload } from './upload';
import { Filters } from './filters';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeSubmenu: undefined};
    this.menuItems = {
      upload: <Upload setImages={this.props.setImages} />,
      filters: <Filters images={this.props.images} setImages={this.props.setImages} />
    }

    this.handleClick = this.handleClick.bind(this);
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {activeSubmenu: undefined};
  //   this.menuItems = {
  //     upload: <Upload setImages={this.props.setImages} />,
  //     filters: <Filters setFilter={this.props.setFilter} />
  //   }
  //
  //   this.handleClick = this.handleClick.bind(this);
  // }

  handleClick(menuKey) {
    this.setState({activeSubmenu: menuKey});
  }

  render() {
    return (
      <div className="menu">
        <div className="subMenus">
          <div onClick={() => this.handleClick('upload')}>Upload</div>
          <div onClick={() => this.handleClick('filters')}>Filters</div>
        </div>
        <div className="menuBody">
          {this.menuItems[this.state.activeSubmenu]}
        </div>
      </div>
    );
  }
}
