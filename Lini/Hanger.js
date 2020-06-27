function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniHanger({
  size,
  ...props
}) {
  let className = 'Component Lini LiniHanger';

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
    d: "M16 18H3a.5.5 0 010-1h13a.5.5 0 010 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.012 14.725l-6.622-5.09A3.026 3.026 0 0010 9.061V8.5c0-.477.289-.717.8-1.1.535-.401 1.2-.9 1.2-1.9C12 4.122 10.878 3 9.5 3S7 4.122 7 5.5a.5.5 0 001 0C8 4.673 8.673 4 9.5 4s1.5.673 1.5 1.5c0 .477-.289.717-.8 1.1-.535.401-1.2.9-1.2 1.9v.553a3.039 3.039 0 00-1.404.551l-6.592 4.898C.431 14.928 0 15.786 0 16.5v1a.5.5 0 00.725.447l7.214-3.632c.401-.202.97-.318 1.562-.318s1.161.116 1.562.318l7.214 3.632a.496.496 0 00.487-.021.5.5 0 00.238-.426v-.769c0-.711-.425-1.573-.988-2.006zm-6.501-1.303c-.544-.274-1.258-.424-2.011-.424s-1.468.151-2.011.424L1 16.689v-.188c0-.392.286-.961.601-1.195l6.592-4.898c.335-.249.788-.386 1.277-.386.497 0 .975.148 1.311.407l6.622 5.09c.301.232.577.777.596 1.17l-6.488-3.266z"
  })));
}
LiniHanger.propTypes = {
  size: PropTypes.number.isRequired
};