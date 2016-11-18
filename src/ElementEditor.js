

import React from 'react';
import { UnitLength, ViewBox, Length, Color } from './edit-types';
import './ElementEditor.css';

const hasChildren = {
  svg:  true,
  g:    true,
};
const editMap = {
  svg:  {
    width:    UnitLength,
    height:   UnitLength,
    viewBox:  ViewBox,
  },
  g:    {},
  rect: {
    x:        Length,
    y:        Length,
    width:    Length,
    height:   Length,
    fill:     Color,
  },
};

export default class ElementEditor extends React.Component {
  constructor () {
    super();
    this.state = {};
  }
  render () {
    let { el } = this.props
      , ln = el.localName
      , em = editMap[ln]
    ;
    return (
      <div className="element-editor">
        <div className="edit-zone">
          <div className="edit-zone__name">{ln}</div>
          {
            em
              ? Object.keys(em).map(attr => React.createElement(em[attr], { el, attr, key: attr }))
              : <span className="unknown">unknown element</span>
          }
        </div>
        {
          !!hasChildren[ln] &&
            <div className="children">
              {
                children(el).map((kid, idx) => <ElementEditor el={kid} key={idx}/>)
              }
            </div>
        }
      </div>
    );
  }
}
const { object } = React.PropTypes;
ElementEditor.propTypes = {
  el:  object,
};

function children (el) {
  let k = el.firstElementChild;
  if (!k) return [];
  let kids = [k];
  while (k.nextElementSibling) {
    kids.push(k.nextElementSibling);
    k = k.nextElementSibling;
  }
  return kids;
}
