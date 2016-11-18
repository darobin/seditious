
import React from 'react';
import ElementEditor from './ElementEditor';
import './Tree.css';

export default class Tree extends React.Component {
  constructor (props) {
    super(props);
    this.registry = new Map();
    this.mo = new MutationObserver((mutations) => {
      mutations.forEach(mr => {
        let comp = this.registry.get(mr.target);
        if (comp) comp.forceUpdate();
      });
    });
    this.mo.observe(props.el, {
      childList:      true,
      attributes:     true,
      subtree:        true,
    });
  }
  render () {
    return (
      <div className="tree">
        <ElementEditor el={this.props.el} registry={this.registry}/>
      </div>
    );
  }
}
const { object } = React.PropTypes;
Tree.propTypes = {
  el: object,
};
