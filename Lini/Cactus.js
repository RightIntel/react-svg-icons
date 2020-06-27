function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCactus({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCactus';

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
    d: "M9 4.5a.5.5 0 11-1 0 .5.5 0 011 0zM11 6.5a.5.5 0 11-1 0 .5.5 0 011 0zM11 3.5a.5.5 0 11-1 0 .5.5 0 011 0zM9 7.5a.5.5 0 11-1 0 .5.5 0 011 0zM18 6.5a.5.5 0 11-1 0 .5.5 0 011 0zM4 7.5a.5.5 0 11-1 0 .5.5 0 011 0zM11 10.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 3A2.503 2.503 0 0015 5.5V6h-.5a.5.5 0 000 1h.5v.5a.5.5 0 01-.5.5H13V4h.5a.5.5 0 000-1h-.536A3.505 3.505 0 009.5 0C7.57 0 6 1.57 6 3.5V6h-.5a.5.5 0 01-.5-.5V4c0-1.103-.897-2-2-2s-2 .897-2 2v1H.5a.5.5 0 000 1H1v2c0 1.103.897 2 2 2h3v1h-.5a.5.5 0 000 1H6v1.277a6.409 6.409 0 00-1.138.303c-.552.216-.841.512-.86.88l-.001.028L4 14.5v.01l.001.023a.717.717 0 00.052.243l.95 3.801c.07.747 1.176 1.024 1.547 1.117.794.198 1.842.308 2.95.308s2.156-.109 2.95-.308c.371-.093 1.476-.369 1.547-1.117l.95-3.801a.742.742 0 00.052-.243l.001-.022v-.01l-.001-.012-.001-.028c-.019-.368-.308-.664-.86-.88A6.409 6.409 0 0013 13.278v-1.277h4.5c1.378 0 2.5-1.122 2.5-2.5v-4c0-1.378-1.122-2.5-2.5-2.5zM6 14.296v.409a5.042 5.042 0 01-.744-.204c.16-.061.397-.133.744-.204zm5.946 4.486c-.682.141-1.55.218-2.446.218s-1.764-.078-2.446-.218c-.671-.139-.971-.299-1.062-.373l-.712-2.848c.193.054.393.098.586.137.976.195 2.266.303 3.634.303s2.658-.107 3.634-.303c.193-.039.393-.083.586-.137l-.712 2.848c-.091.074-.391.235-1.062.373zm1.798-4.282c-.16.06-.397.132-.744.204v-.409c.347.072.585.144.744.204zM19 9.5c0 .827-.673 1.5-1.5 1.5h-5a.5.5 0 00-.5.5v3.362c-.749.089-1.614.138-2.5.138s-1.751-.048-2.5-.138V9.5a.5.5 0 00-.5-.5H3c-.551 0-1-.449-1-1V4c0-.551.449-1 1-1s1 .449 1 1v1.5C4 6.327 4.673 7 5.5 7h1a.5.5 0 00.5-.5v-3C7 2.122 8.122 1 9.5 1S12 2.122 12 3.5v5a.5.5 0 00.5.5h2c.827 0 1.5-.673 1.5-1.5v-2c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5v4z"
  })));
}
LiniCactus.propTypes = {
  size: PropTypes.number.isRequired
};