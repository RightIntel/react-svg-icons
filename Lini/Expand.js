function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniExpand({
  size,
  ...props
}) {
  let className = 'Component Lini LiniExpand';

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
    d: "M7.854 7.146L1.708 1h3.793a.5.5 0 000-1h-5a.5.5 0 00-.5.5v5a.5.5 0 001 0V1.707l6.146 6.146a.498.498 0 00.708 0 .5.5 0 000-.707zM19.5 0h-5a.5.5 0 000 1h3.793l-6.146 6.146a.5.5 0 00.706.707L19 1.707V5.5a.5.5 0 001 0v-5a.5.5 0 00-.5-.5zM7.854 12.147a.5.5 0 00-.707 0l-6.146 6.146V14.5a.5.5 0 00-1 0v5a.5.5 0 00.5.5h5a.5.5 0 000-1H1.708l6.146-6.147a.5.5 0 000-.707zM19.5 14a.5.5 0 00-.5.5v3.793l-6.147-6.146a.5.5 0 00-.707.707L18.293 19H14.5a.5.5 0 000 1h5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5z"
  })));
}
LiniExpand.propTypes = {
  size: PropTypes.number.isRequired
};