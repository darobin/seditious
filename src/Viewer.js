
import React from 'react';
import './Viewer.css';

export default class Viewer extends React.Component {
  constructor () {
    super();
    this.state = {};
    this.view = null;
  }
  componentDidMount () {
    this.view.appendChild(this.props.el);
  }
  render () {
    return (
      <div className="viewer" ref={n => (this.view = n)}/>
    );
  }
}
const { object } = React.PropTypes;
Viewer.propTypes = {
  el: object,
};
