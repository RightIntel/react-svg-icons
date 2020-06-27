function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniDelete({
  size,
  ...props
}) {
  let className = 'Component Lini LiniDelete';

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
    d: "M13.707 10.5l2.646-2.646a.5.5 0 00-.707-.707L13 9.793l-2.646-2.646a.5.5 0 00-.707.707l2.646 2.646-2.646 2.646a.5.5 0 00.708.707l2.646-2.646 2.646 2.646a.498.498 0 00.708 0 .5.5 0 000-.707L13.709 10.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 17h-11c-.704 0-1.574-.408-2.024-.948l-3.72-4.464c-.509-.61-.509-1.566 0-2.177l3.72-4.464c.45-.541 1.321-.948 2.024-.948h11c.827 0 1.5.673 1.5 1.5v10c0 .827-.673 1.5-1.5 1.5zM7.5 5c-.401 0-.999.28-1.256.588l-3.72 4.464a.747.747 0 000 .896l3.72 4.464c.257.308.855.588 1.256.588h11a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5h-11z"
  })));
}
LiniDelete.propTypes = {
  size: PropTypes.number.isRequired
};