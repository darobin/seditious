
/* eslint react/no-unused-prop-types: 0 */

import React from 'react';

const elements = {
  g:    {},
  rect: { x: 100, y: 100, width: 300, height: 150, fill: '#ff0000' },
};
const SVG_NS = 'http://www.w3.org/2000/svg';

const ElementAdder = ({ parent, refPoint }) => {
  let selValue = '+'
    , onPick = (ev) => {
        let { value } = ev.target
          , el = document.createElementNS(SVG_NS, value)
        ;
        Object.keys(elements[value]).forEach(k => el.setAttribute(k, elements[value][k]));
        parent.insertBefore(el, refPoint);
      }
  ;
  return (
    <select onChange={onPick} value={selValue}>
      <option>+</option>
      {
        Object.keys(elements).map(ln => <option key={ln}>{ln}</option>)
      }
    </select>
  );
};
const { object } = React.PropTypes;
ElementAdder.propTypes = {
  parent:   object.isRequired,
  refPoint: object,
};
export default ElementAdder;
