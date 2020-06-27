function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniWheelchair({
  size,
  ...props
}) {
  let className = 'Component Lini LiniWheelchair';

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
    d: "M17.854 13.146a.5.5 0 00-.707 0l-.651.651-2.729-2.656a.018.018 0 00-.005-.004l-.022-.019-.017-.014a.143.143 0 00-.02-.014l-.021-.014-.017-.01a.215.215 0 00-.026-.014l-.017-.008-.027-.012a.172.172 0 00-.021-.007l-.024-.008-.027-.006-.02-.004a.29.29 0 00-.031-.004l-.017-.002-.03-.001h-.019l-.026.002-.023.002-.022.003-.028.005-.007.001-3.945.953c-.106.026-.199.013-.26-.035S9 11.796 9 11.687V9.999h3.5a.5.5 0 000-1H9v-3.05a2.501 2.501 0 003-2.45c0-1.378-1.122-2.5-2.5-2.5S7 2.121 7 3.499c0 .816.393 1.542 1 1.999v6.189c0 .416.174.792.476 1.03.218.172.49.262.777.262.111 0 .223-.013.336-.041l3.677-.888 2.885 2.808a.501.501 0 00.703-.004l1-1a.5.5 0 000-.707zM9.5 2c.827 0 1.5.673 1.5 1.5S10.327 5 9.5 5 8 4.327 8 3.5 8.673 2 9.5 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 20A6.499 6.499 0 016.418 7.089a.5.5 0 01.166.986 5.481 5.481 0 00-4.583 5.424c0 3.033 2.467 5.5 5.5 5.5a5.48 5.48 0 005.424-4.583.5.5 0 01.986.166A6.502 6.502 0 017.5 20z"
  })));
}
LiniWheelchair.propTypes = {
  size: PropTypes.number.isRequired
};