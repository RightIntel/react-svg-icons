function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function Lini3dRotate({
  size,
  ...props
}) {
  let className = 'Component Lini Lini3dRotate';

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
    d: "M9.5 18c-2.488 0-4.834-.542-6.607-1.527-.784-.435-1.419-.937-1.893-1.485v.512a.5.5 0 01-1 0v-3a.5.5 0 011 0c0 1.146.845 2.246 2.379 3.098C5.006 16.502 7.18 17 9.5 17c1.744 0 3.423-.284 4.856-.822 1.364-.512 2.415-1.216 3.039-2.035a.5.5 0 01.796.606C16.687 16.724 13.276 18 9.5 18z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 9a.5.5 0 00-.5.5v.52c-.687-.798-1.708-1.494-3-2.019v-2.5a.5.5 0 00-.314-.464l-5-2a.496.496 0 00-.371 0l-5 2a.5.5 0 00-.314.464v2.5c-1.368.556-2.451 1.31-3.144 2.191a.5.5 0 10.786.618c.523-.665 1.331-1.253 2.358-1.72v2.411a.5.5 0 00.314.464l5 2a.5.5 0 00.372 0l5-2a.5.5 0 00.314-.464V9.09c.837.382 1.537.848 2.048 1.368.632.643.952 1.33.952 2.042a.5.5 0 001 0v-3a.5.5 0 00-.5-.5zm-9-4.962L13.154 5.5 9.5 6.962 5.846 5.5 9.5 4.038zM5 6.238l4 1.6v4.923l-4-1.6V6.238zm5 6.523V7.838l4-1.6v4.923l-4 1.6z"
  })));
}
Lini3dRotate.propTypes = {
  size: PropTypes.number.isRequired
};