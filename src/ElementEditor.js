
import React from 'react';

export default class ElementEditor extends React.Component {
  constructor () {
    super();
    this.state = {};
  }
  render () {
    return (
      <div className="element-editor">
        {this.props.el.localName}
      </div>
    );
  }
}
const { object } = React.PropTypes;
ElementEditor.propTypes = {
  el:  object,
};
