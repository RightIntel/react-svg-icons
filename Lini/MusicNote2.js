function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniMusicNote2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniMusicNote2';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19.82 1.116a.499.499 0 00-.41-.108l-11 2a.5.5 0 00-.411.492v11.399a3.965 3.965 0 00-.448-.26C6.727 14.227 5.644 14 4.499 14s-2.228.227-3.052.639c-.934.467-1.448 1.128-1.448 1.861s.514 1.395 1.448 1.861c.824.412 1.907.639 3.052.639s2.228-.227 3.052-.639c.934-.467 1.448-1.128 1.448-1.861V3.917l10-1.818v10.8a3.965 3.965 0 00-.448-.26c-.824-.412-1.907-.639-3.052-.639s-2.228.227-3.052.639c-.934.467-1.448 1.128-1.448 1.861s.514 1.395 1.448 1.861c.824.412 1.907.639 3.052.639s2.228-.227 3.052-.639c.934-.467 1.448-1.128 1.448-1.861v-13a.5.5 0 00-.18-.384zM4.5 18C2.497 18 1 17.208 1 16.5S2.497 15 4.5 15s3.5.792 3.5 1.5S6.503 18 4.5 18zm11-2c-2.003 0-3.5-.792-3.5-1.5s1.497-1.5 3.5-1.5 3.5.792 3.5 1.5-1.497 1.5-3.5 1.5z"
  })));
}
LiniMusicNote2.propTypes = {
  size: PropTypes.number.isRequired
};