function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniMailboxEmpty({
  size,
  ...props
}) {
  let className = 'Component Lini LiniMailboxEmpty';

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
    d: "M19.088 6.945c-.354-.916-.818-1.628-1.38-2.118a3.303 3.303 0 00-2.234-.826H3v-.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-.5h5v5.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-5.5h7.5a.5.5 0 00.5-.5c0-2.785-.307-4.99-.912-6.555zM2 14H1V4h1v10zm9 5H9v-5h2v5zm-8-6V5h12.474c2.79 0 3.469 4.236 3.522 8H2.999z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 7H7.914c-.206-.582-.762-1-1.414-1C5.673 6 5 6.673 5 7.5S5.673 9 6.5 9c.652 0 1.208-.418 1.414-1H11v3.5a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5zm-7 1a.5.5 0 110-1 .5.5 0 010 1zm6.5 3h-1V8h1v3z"
  })));
}
LiniMailboxEmpty.propTypes = {
  size: PropTypes.number.isRequired
};