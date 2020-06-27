function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniShuffle({
  size,
  ...props
}) {
  let className = 'Component Lini LiniShuffle';

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
    d: "M15.5 17a.5.5 0 01-.158-.974l.847-.282c-3.262-.766-5.195-3.129-7.075-5.427C6.877 7.583 4.764 5 .501 5a.5.5 0 010-1c4.737 0 7.101 2.889 9.387 5.683C12.125 12.417 14.238 15 18.501 15a.501.501 0 01.159.974l-3 1a.513.513 0 01-.158.026z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.755 9a.5.5 0 01-.376-.83c1.491-1.703 3.228-3.305 5.811-3.913l-.849-.283a.499.499 0 11.316-.948l3 1a.498.498 0 01-.159.974c-3.333 0-5.356 1.531-7.368 3.829a.498.498 0 01-.376.171zM.5 16a.5.5 0 010-1c3.333 0 5.356-1.531 7.368-3.829a.5.5 0 11.753.659C6.725 13.996 4.428 16.001.5 16.001z"
  })));
}
LiniShuffle.propTypes = {
  size: PropTypes.number.isRequired
};