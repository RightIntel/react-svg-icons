function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniMustacheGlasses({
  size,
  ...props
}) {
  let className = 'Component Lini LiniMustacheGlasses';

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
    d: "M18.379 15.015a4.446 4.446 0 01-1.073.146c-1.277 0-1.936-.755-2.633-1.553-.657-.753-1.402-1.607-2.673-1.607a2.998 2.998 0 00-2.5 1.344A3 3 0 007 12.001c-1.271 0-2.016.854-2.673 1.607-.697.799-1.355 1.553-2.633 1.553-.326 0-.686-.049-1.073-.146a.5.5 0 00-.537.762c1.922 2.884 4.524 3.195 5.554 3.195.551 0 1.078-.081 1.525-.235A4.324 4.324 0 009.5 16.82a4.32 4.32 0 002.337 1.917c.447.154.974.235 1.525.235 1.029 0 3.632-.311 5.554-3.195a.499.499 0 00-.537-.762zM6.837 17.791a3.748 3.748 0 01-1.199.181c-.744 0-2.464-.197-3.981-1.812h.037c1.732 0 2.649-1.051 3.386-1.896.684-.784 1.143-1.265 1.92-1.265 1.103 0 2 .897 2 2 0 1.185-.91 2.359-2.163 2.791zm6.525.181c-.441 0-.856-.063-1.199-.181C10.91 17.359 10 16.185 10 15c0-1.103.897-2 2-2 .777 0 1.235.481 1.92 1.265.737.845 1.654 1.896 3.386 1.896h.037c-1.518 1.615-3.237 1.812-3.981 1.812zM.5 6H1c0 2.206 1.794 4 4 4s4-1.794 4-4v-.5a.5.5 0 011 0V6c0 2.206 1.794 4 4 4s4-1.794 4-4h.5a.5.5 0 000-1h-.627A4.007 4.007 0 0014 2a4.003 4.003 0 00-3.615 2.29 1.491 1.491 0 00-1.77 0A4.005 4.005 0 005 2a4.007 4.007 0 00-3.873 3H.5a.5.5 0 000 1zM14 3c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zM5 3c1.654 0 3 1.346 3 3S6.654 9 5 9 2 7.654 2 6s1.346-3 3-3z"
  })));
}
LiniMustacheGlasses.propTypes = {
  size: PropTypes.number.isRequired
};