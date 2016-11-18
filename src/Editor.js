
import React from 'react';
import Tree from './Tree';
import Viewer from './Viewer';

export default class Editor extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      el:  this.parseSVG(props.svg),
    };
  }
  parseSVG (svg) {
    return document.importNode(new DOMParser().parseFromString(svg, 'application/xml').documentElement, true);
  }
  render () {
    let { el } = this.state;
    return (
      <main>
        <Tree el={el}/>
        <Viewer el={el}/>
      </main>
    );
  }
}
const { string } = React.PropTypes;
Editor.propTypes = {
  svg:  string,
};
Editor.defaultProps = {
  svg: `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500">
          <g>
            <rect x="10" y="10" width="250" height="100" fill="#ff0000"/>
            <rect x="100" y="300" width="20" height="200" fill="#00ff00"/>
            <g>
              <rect x="150" y="150" width="300" height="200" fill="#0000ff"/>
            </g>
          </g>
        </svg>`,
};
