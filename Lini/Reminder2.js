function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniReminder2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniReminder2';

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
    d: "M14 17.5a.5.5 0 11-1 0 .5.5 0 011 0zM9.5 4c-.276 0-.5-.224-.5-.5a.5.5 0 00-1 0 .5.5 0 01-1 0C7 2.673 7.673 2 8.5 2s1.5.673 1.5 1.5a.5.5 0 01-.5.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.281 15.22c.328-.636.719-1.798.719-3.72a1.502 1.502 0 00-2.053-1.395 1.503 1.503 0 00-2-1A1.503 1.503 0 0010 8.086V7.5a.5.5 0 00-1 0v2a.5.5 0 001 0 .5.5 0 011 0v1a.5.5 0 001 0 .5.5 0 011 0v1a.5.5 0 001 0 .5.5 0 011 0c0 2.102-.516 3.139-.748 3.5H8.209l-4.057-4.108a.512.512 0 01-.002-.71.653.653 0 01.823-.044l2.216 1.754a.499.499 0 00.81-.392v-4a.5.5 0 00-1 0v2.966L5.593 9.353c-.304-.241-.695-.361-1.098-.339s-.779.186-1.053.46a1.508 1.508 0 00-.003 2.12l3.479 3.523a1.503 1.503 0 00-.919 1.383v2c0 .827.673 1.5 1.5 1.5h7c.827 0 1.5-.673 1.5-1.5v-2a1.5 1.5 0 00-.719-1.28zM15 18.5a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 4c-.55 0-2.252.659-3 .96-.748-.301-2.45-.96-3-.96C4.673 4 4 4.673 4 5.5S4.673 7 5.5 7c.55 0 2.252-.659 3-.96.748.301 2.45.96 3 .96.827 0 1.5-.673 1.5-1.5S12.327 4 11.5 4zm-6 2a.5.5 0 010-1c.191.003.862.22 1.62.5-.758.28-1.429.497-1.62.5zm6 0c-.192-.003-.863-.22-1.62-.5.758-.28 1.429-.497 1.62-.5a.5.5 0 010 1z"
  })));
}
LiniReminder2.propTypes = {
  size: PropTypes.number.isRequired
};