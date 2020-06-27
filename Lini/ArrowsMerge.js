function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniArrowsMerge({
  size,
  ...props
}) {
  let className = 'Component Lini LiniArrowsMerge';

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
    d: "M15.854 18.646l-5.293-5.293c-.293-.293-.561-.939-.561-1.354V2.206l3.146 3.146a.498.498 0 00.708 0 .5.5 0 000-.707l-4-4a.5.5 0 00-.707 0l-4 4a.5.5 0 00.707.707L9 2.206v9.793c0 .688.367 1.574.854 2.061l5.293 5.293a.498.498 0 00.708 0 .5.5 0 000-.707zM3.5 19.5a.5.5 0 01-.354-.853l4-4a.5.5 0 01.707.707l-4 4a.498.498 0 01-.354.146z"
  })));
}
LiniArrowsMerge.propTypes = {
  size: PropTypes.number.isRequired
};