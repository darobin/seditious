
import React from 'react';
import ElementEditor from './ElementEditor';
import './Tree.css';

export default class Tree extends React.Component {
  constructor () {
    super();
    this.state = {};
  }
  render () {
    return (
      <div className="tree">
        <ElementEditor el={this.props.el}/>
      </div>
    );
  }
}
const { object } = React.PropTypes;
Tree.propTypes = {
  el: object,
};
