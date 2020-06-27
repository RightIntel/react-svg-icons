function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniRoadSign({
  size,
  ...props
}) {
  let className = 'Component Lini LiniRoadSign';

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
    d: "M18.777 5.084l-3-2A.498.498 0 0015.5 3H11V1.5C11 .673 10.327 0 9.5 0h-2C6.673 0 6 .673 6 1.5V3H.5a.5.5 0 00-.5.5v4a.5.5 0 00.5.5H6v1H4.5a.496.496 0 00-.277.084l-3 2a.501.501 0 000 .832l3 2A.498.498 0 004.5 14H6v5.5a.5.5 0 00.5.5h4a.5.5 0 00.5-.5V14h3.5a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5H11V8h4.5a.496.496 0 00.277-.084l3-2a.501.501 0 000-.832zM7 1.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5V3H7V1.5zM10 19H7v-5h3v5zm4-6H4.651l-2.25-1.5 2.25-1.5H14v3zm-4-4H7V8h3v1zm5.349-2H1V4h14.349l2.25 1.5-2.25 1.5z"
  })));
}
LiniRoadSign.propTypes = {
  size: PropTypes.number.isRequired
};