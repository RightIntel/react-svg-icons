function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniList2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniList2';

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
    d: "M19.5 4h-14a.5.5 0 010-1h14a.5.5 0 010 1zM19.5 11h-14a.5.5 0 010-1h14a.5.5 0 010 1zM19.5 18h-14a.5.5 0 010-1h14a.5.5 0 010 1zM1.5 6a.5.5 0 01-.5-.5V2H.5a.5.5 0 010-1h1a.5.5 0 01.5.5v4a.5.5 0 01-.5.5zM2.5 13h-2a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5H2V9H.5a.5.5 0 010-1h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H1v1h1.5a.5.5 0 010 1zM2.5 15h-2a.5.5 0 000 1H2v1H.5a.5.5 0 000 1H2v1H.5a.5.5 0 000 1h2a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5z"
  })));
}
LiniList2.propTypes = {
  size: PropTypes.number.isRequired
};