function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniDinner2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniDinner2';

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
    d: "M8.429 3.548C8.238 2.721 8 1.691 8 .5a.5.5 0 00-1 0c0 1.306.252 2.397.455 3.274.198.854.353 1.529.13 1.811-.186.234-.717.37-1.581.406A39.697 39.697 0 016 5.501v-4a.5.5 0 00-1 0v4c0 .165-.001.328-.004.49-.861-.037-1.391-.174-1.577-.408-.225-.283-.069-.959.128-1.814C3.749 2.894 4 1.804 4 .502a.5.5 0 00-1 0c0 1.189-.237 2.217-.427 3.043-.258 1.118-.461 2.002.064 2.662.39.49 1.101.733 2.333.785-.112 2.79-.516 5.19-.851 7.177-.446 2.644-.74 4.39.012 5.279.311.368.772.555 1.37.555s1.059-.187 1.37-.555c.752-.89.458-2.638.012-5.284-.334-1.985-.738-4.384-.851-7.172 1.235-.05 1.946-.292 2.337-.783.524-.659.32-1.541.062-2.659zM6.106 18.799c-.073.086-.215.201-.606.201s-.533-.114-.606-.2c-.452-.535-.145-2.357.211-4.467.129-.762.267-1.585.396-2.467.129.881.267 1.701.395 2.463.356 2.112.663 3.936.211 4.472zM15.079 7.896C16.193 7.489 17 5.923 17 4c0-2.243-1.098-4-2.5-4S12 1.757 12 4c0 1.924.808 3.49 1.922 3.897-.155 2.419-.513 4.544-.804 6.269-.446 2.644-.74 4.39.012 5.279.311.368.772.555 1.37.555s1.059-.187 1.37-.555c.752-.89.458-2.638.012-5.284-.291-1.725-.648-3.848-.803-6.265zM13 4c0-1.768.791-3 1.5-3S16 2.232 16 4s-.791 3-1.5 3S13 5.768 13 4zm2.106 14.799c-.073.086-.215.201-.606.201s-.533-.114-.606-.2c-.452-.535-.145-2.357.211-4.467.127-.751.266-1.578.396-2.472.13.892.269 1.717.395 2.467.356 2.112.663 3.937.211 4.472z"
  })));
}
LiniDinner2.propTypes = {
  size: PropTypes.number.isRequired
};