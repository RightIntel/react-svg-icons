function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniChartBars({
  size,
  ...props
}) {
  let className = 'Component Lini LiniChartBars';

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
    d: "M17.5 20h-16C.673 20 0 19.327 0 18.5v-16C0 1.673.673 1 1.5 1h16c.827 0 1.5.673 1.5 1.5v16c0 .827-.673 1.5-1.5 1.5zM1.5 2a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h16a.5.5 0 00.5-.5v-16a.5.5 0 00-.5-.5h-16z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 17h-2a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v9a.5.5 0 01-.5.5zM5 16h1V8H5v8zM10.5 17h-2a.5.5 0 01-.5-.5v-12a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v12a.5.5 0 01-.5.5zM9 16h1V5H9v11zM14.5 17h-2a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v5a.5.5 0 01-.5.5zM13 16h1v-4h-1v4z"
  })));
}
LiniChartBars.propTypes = {
  size: PropTypes.number.isRequired
};