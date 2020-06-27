function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniTextAlignRight({
  size,
  ...props
}) {
  let className = 'Component Lini LiniTextAlignRight';

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
    d: "M17.5 5h-15a.5.5 0 010-1h15a.5.5 0 010 1zM17.5 8h-11a.5.5 0 010-1h11a.5.5 0 010 1zM17.5 11h-15a.5.5 0 010-1h15a.5.5 0 010 1zM17.5 14h-11a.5.5 0 010-1h11a.5.5 0 010 1zM17.5 17h-15a.5.5 0 010-1h15a.5.5 0 010 1z"
  })));
}
LiniTextAlignRight.propTypes = {
  size: PropTypes.number.isRequired
};