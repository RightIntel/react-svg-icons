function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniGhost({
  size,
  ...props
}) {
  let className = 'Component Lini LiniGhost';

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
    d: "M18.5 20c-1.645 0-2.506-.413-3.134-.715-.344-.165-.592-.285-.866-.285-.349 0-.638.193-.973.416-.411.274-.876.584-1.527.584s-1.117-.31-1.527-.584C10.138 19.193 9.849 19 9.5 19s-.638.193-.973.416C8.116 19.69 7.651 20 7 20c-.662 0-1.158-.319-1.595-.601C5.073 19.185 4.786 19 4.5 19c-.22 0-.455.112-.779.266C3.07 19.576 2.179 20 .5 20a.5.5 0 01-.5-.5v-9c0-2.538.988-4.923 2.783-6.717S6.963 1 9.5 1c2.538 0 4.923.988 6.718 2.783S19 7.963 19 10.5v9a.5.5 0 01-.5.5zm-9-2c.651 0 1.117.31 1.527.584.335.223.624.416.973.416s.638-.193.973-.416c.411-.274.876-.584 1.527-.584.501 0 .889.186 1.299.383.5.24 1.108.532 2.201.601v-8.485c0-4.687-3.813-8.5-8.5-8.5S1 5.812 1 10.499v8.485c1.131-.07 1.767-.373 2.291-.622.393-.187.763-.363 1.209-.363.579 0 1.04.296 1.446.558.368.237.687.442 1.054.442.349 0 .638-.193.973-.416.411-.274.876-.584 1.527-.584z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 10C5.673 10 5 9.327 5 8.5S5.673 7 6.5 7 8 7.673 8 8.5 7.327 10 6.5 10zm0-2a.5.5 0 100 1 .5.5 0 000-1zM12.5 10c-.827 0-1.5-.673-1.5-1.5S11.673 7 12.5 7s1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1z"
  })));
}
LiniGhost.propTypes = {
  size: PropTypes.number.isRequired
};