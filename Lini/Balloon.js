function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBalloon({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBalloon';

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
    d: "M19.5 19h-.011c-4.125 0-7.646-1.666-10.219-4.826l.453-.227a.5.5 0 00.13-.801L8.71 12.003c.057-.049.113-.099.168-.152.557-.53 1.025-1.216 1.394-2.039.718-1.604.956-3.505.655-5.216-.256-1.452-.899-2.639-1.86-3.433C8.17.421 7.017.029 5.732.029a6.8 6.8 0 00-1.177.105c-1.523.269-2.748.974-3.543 2.04-.853 1.143-1.146 2.637-.85 4.32.28 1.586 1.056 3.199 2.131 4.427 1.169 1.335 2.55 2.071 3.891 2.071.147 0 .294-.01.439-.027l.39 1.649a.498.498 0 00.711.332l.632-.316c1.423 1.8 3.123 3.169 5.058 4.073 1.842.86 3.886 1.296 6.076 1.296h.011a.5.5 0 000-1zM3.046 10.264a8.366 8.366 0 01-1.899-3.942c-.248-1.405-.017-2.632.666-3.548.64-.858 1.648-1.429 2.915-1.653.34-.06.677-.09 1.003-.09 2.256 0 3.791 1.363 4.21 3.74.264 1.497.046 3.229-.583 4.634-.648 1.449-1.614 2.354-2.72 2.549-.149.026-.302.04-.455.04-1.048 0-2.162-.614-3.138-1.729zm4.545 2.446c.095-.04.189-.083.281-.131l.784.784-.815.407-.251-1.061z"
  })));
}
LiniBalloon.propTypes = {
  size: PropTypes.number.isRequired
};