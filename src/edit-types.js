
/* eslint jsx-a11y/label-has-for: 0 */

import React from 'react';

const { object, string } = React.PropTypes;

export const Length = ({ attr, el }) => (
  <label className="attr length">
    {attr}:{' '}
    <input
      type="number"
      value={el.getAttribute(attr)}
      onChange={ev => el.setAttribute(attr, ev.target.value)}
    />
  </label>
);
Length.propTypes = {
  el:   object,
  attr: string,
};

export const UnitLength = ({ attr, el }) => (
  <label className="attr unit-length">
    {attr}:{' '}
    <input
      type="text"
      value={el.getAttribute(attr)}
      onChange={ev => el.setAttribute(attr, ev.target.value)}
    />
  </label>
);
UnitLength.propTypes = {
  el:   object,
  attr: string,
};

// needs colour conversion
export const Color = ({ attr, el }) => (
  <label className="attr color">
    {attr}:{' '}
    <input
      type="color"
      value={el.getAttribute(attr)}
      onChange={ev => el.setAttribute(attr, ev.target.value)}
    />
  </label>
);
Color.propTypes = {
  el:   object,
  attr: string,
};

export const ViewBox = ({ attr, el }) => {
  let vb = el.getAttribute(attr) || '0 0 100 100'
    , parts = vb.split(/\D+/)
  ;
  return (
    <label className="attr viewbox">
      {attr}:{' '}
      {
        [0, 1, 2, 3].map(idx => (
          <input
            key={idx}
            type="number"
            value={parts[idx]}
            onChange={ev => {
              parts[idx] = ev.target.value;
              el.setAttribute(attr, parts.join(' '));
            }}
          />
        ))
      }
    </label>
  );
};
ViewBox.propTypes = {
  el:   object,
  attr: string,
};
