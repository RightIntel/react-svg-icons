function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniWall({
  size,
  ...props
}) {
  let className = 'Component Lini LiniWall';

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
    d: "M18.5 7a.5.5 0 000-1H16V3h2.5a.5.5 0 000-1H.5a.5.5 0 000 1H6v3H.5a.5.5 0 000 1H3v3H.5a.5.5 0 000 1H6v3H.5a.5.5 0 000 1H3v3H.5a.5.5 0 000 1h18a.5.5 0 000-1H13v-3h5.5a.5.5 0 000-1H16v-3h2.5a.5.5 0 000-1H13V7h5.5zM7 3h8v3H7V3zm5 15H4v-3h8v3zm3-4H7v-3h8v3zm-3-4H4V7h8v3z"
  })));
}
LiniWall.propTypes = {
  size: PropTypes.number.isRequired
};