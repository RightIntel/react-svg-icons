function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniRedo({
  size,
  ...props
}) {
  let className = 'Component Lini LiniRedo';

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
    d: "M17.5 8a.5.5 0 00-.5.5v2.652A10.49 10.49 0 009.5 8a10.39 10.39 0 00-4.77 1.144 10.597 10.597 0 00-3.63 3.055.5.5 0 00.799.6A9.426 9.426 0 019.499 9a9.49 9.49 0 016.928 3h-2.928a.5.5 0 000 1h4a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5z"
  })));
}
LiniRedo.propTypes = {
  size: PropTypes.number.isRequired
};