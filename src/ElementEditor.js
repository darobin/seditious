

import React from 'react';
import shortid from 'shortid';
import { UnitLength, ViewBox, Length, Color } from './edit-types';
import ElementAdder from './ElementAdder';
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
  componentDidMount () {
    this.props.registry.set(this.props.el, this);
    this.props.names.set(this.props.el, shortid.generate());
  }
  componentWillUnmount () {
    this.props.registry.delete(this.props.el);
    this.props.names.delete(this.props.el);
  }
  render () {
    let { el, registry, names } = this.props
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
                children(el).map(k => [
                  <ElementAdder parent={el} refPoint={k} key={`ea-${names.get(k)}`}/>,
                  <ElementEditor el={k} registry={registry} names={names} key={names.get(k)}/>
                ])
              }
              <ElementAdder parent={el}/>
            </div>
        }
      </div>
    );
  }
}
const { object } = React.PropTypes;
ElementEditor.propTypes = {
  el:       object.isRequired,
  registry: object.isRequired,
  names:    object.isRequired,
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
