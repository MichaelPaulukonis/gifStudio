import React from 'react';

import { Upload } from './upload';
import { Filters } from './filters';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeSubmenu: undefined};
  }

  render() {
    return (
      <div className="menu">
        <div className="subMenus">
          <div onClick={() => this.setState({activeSubmenu: 'upload'})}>Upload</div>
          <div onClick={() => this.setState({activeSubmenu: 'filters'})}>Filters</div>
        </div>
        <div className="menuBody">
          {this.state.activeSubmenu === 'upload' ? <Upload setImages={this.props.setImages} /> : null}
          {this.state.activeSubmenu === 'filters' ? <Filters images={this.props.images} setImages={this.props.setImages} /> : null}
        </div>
      </div>
    );
  }
}
