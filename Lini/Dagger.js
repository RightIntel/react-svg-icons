function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniDagger({
  size,
  ...props
}) {
  let className = 'Component Lini LiniDagger';

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
    d: "M17.5 3c-.132 0-.261-.053-.353-.147S17 2.631 17 2.5a.498.498 0 01.5-.5.5.5 0 010 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.215 5.992A3.004 3.004 0 0020 3c0-1.654-1.346-3-3-3a3.003 3.003 0 00-2.992 2.785L10.543 6.25l-.687-.687c.195.193.51.192.704-.003.283-.283.439-.66.439-1.061s-.156-.777-.439-1.061A1.501 1.501 0 008.439 5.56l1.358 1.358L2.96 12.48c-.498.405-1.048 1.2-1.251 1.809L.025 19.34a.5.5 0 00.633.632l5.051-1.684c.609-.203 1.404-.753 1.809-1.251L13.08 10.2l1.358 1.358c.283.283.66.439 1.061.439s.777-.156 1.061-.439c.283-.283.439-.66.439-1.061s-.156-.777-.439-1.061c-.283-.283-.66-.439-1.061-.439s-.777.156-1.061.439a.5.5 0 00-.003.704l-.686-.686 3.465-3.465zm-2.068 4.154a.497.497 0 01.707 0 .498.498 0 01-.001.708.497.497 0 01-.707 0l-.704-.704a.5.5 0 00.704-.003zm-3-2.292l-.896-.896 1.261-1.261 1.797 1.789-1.265 1.265-.896-.896zM17 1c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm-1.026 4.819l-.958.958-1.797-1.789.962-.962c.303.83.963 1.49 1.793 1.793zM9 4.5a.5.5 0 111 0 .5.5 0 01-.146.354.5.5 0 00-.003.704l-.704-.704a.498.498 0 01-.146-.354zM6.743 16.409c-.287.353-.918.789-1.35.933L1.29 18.71l1.368-4.103c.144-.432.58-1.063.933-1.35l6.917-5.627.577.577-6.939 6.939a.5.5 0 00.708.707l6.939-6.939.577.577-5.627 6.917z"
  })));
}
LiniDagger.propTypes = {
  size: PropTypes.number.isRequired
};