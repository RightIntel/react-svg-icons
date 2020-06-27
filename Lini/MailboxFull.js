function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniMailboxFull({
  size,
  ...props
}) {
  let className = 'Component Lini LiniMailboxFull';

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
    d: "M10.5 0h-4a.5.5 0 00-.5.5v5.586c-.582.206-1 .762-1 1.414C5 8.327 5.673 9 6.5 9S8 8.327 8 7.5c0-.652-.418-1.208-1-1.414V3h3.5a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5zm-4 8a.5.5 0 110-1 .5.5 0 010 1zM10 2H7V1h3v1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.088 6.945c-.354-.916-.818-1.628-1.38-2.118a3.303 3.303 0 00-2.234-.826H8.5a.5.5 0 000 1h6.974c2.79 0 3.469 4.236 3.522 8H2.999v-8h1.5a.5.5 0 000-1h-1.5v-.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-.5h5v5.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-5.5h7.5a.5.5 0 00.5-.5c0-2.785-.307-4.99-.912-6.555zM2 14H1V4h1v10zm9 5H9v-5h2v5z"
  })));
}
LiniMailboxFull.propTypes = {
  size: PropTypes.number.isRequired
};