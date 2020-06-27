function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniGrid({
  size,
  ...props
}) {
  let className = 'Component Lini LiniGrid';

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
    d: "M16.5 2h-13C2.673 2 2 2.673 2 3.5v13c0 .827.673 1.5 1.5 1.5h13c.827 0 1.5-.673 1.5-1.5v-13c0-.827-.673-1.5-1.5-1.5zm.5 1.5V7h-4V3h3.5a.5.5 0 01.5.5zM8 12V8h4v4H8zm4 1v4H8v-4h4zm-5-1H3V8h4v4zm1-5V3h4v4H8zm5 1h4v4h-4V8zM3.5 3H7v4H3V3.5a.5.5 0 01.5-.5zM3 16.5V13h4v4H3.5a.5.5 0 01-.5-.5zm13.5.5H13v-4h4v3.5a.5.5 0 01-.5.5z"
  })));
}
LiniGrid.propTypes = {
  size: PropTypes.number.isRequired
};