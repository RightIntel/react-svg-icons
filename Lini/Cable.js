function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCable({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCable';

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
    d: "M15.5 5H15V1.5a.5.5 0 00-.5-.5h-9a.5.5 0 00-.5.5V5h-.5C3.673 5 3 5.673 3 6.5v3c0 .654.307 1.577.7 2.1L5.5 14c.266.355.5 1.056.5 1.5 0 .652.418 1.208 1 1.414V19.5a.5.5 0 001 0V17h4v2.5a.5.5 0 001 0v-2.586c.582-.206 1-.762 1-1.414 0-.444.234-1.145.5-1.5l1.8-2.4c.392-.523.7-1.446.7-2.1v-3c0-.827-.673-1.5-1.5-1.5zM6 2h8v3h-1V3.5a.5.5 0 00-1 0V5H8V3.5a.5.5 0 00-1 0V5H6V2zm10 7.5c0 .444-.234 1.145-.5 1.5l-1.8 2.4c-.393.523-.7 1.446-.7 2.1a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5c0-.654-.307-1.577-.7-2.1L4.5 11c-.266-.355-.5-1.056-.5-1.5v-3a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v3z"
  })));
}
LiniCable.propTypes = {
  size: PropTypes.number.isRequired
};