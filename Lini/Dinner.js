function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniDinner({
  size,
  ...props
}) {
  let className = 'Component Lini LiniDinner';

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
    d: "M8 .5a.5.5 0 00-1 0c0 1.306.252 2.397.455 3.274.198.854.353 1.529.13 1.811-.186.234-.717.37-1.581.406A39.697 39.697 0 016 5.501v-4a.5.5 0 00-1 0v4c0 .165-.001.328-.004.49-.861-.037-1.391-.174-1.577-.408-.225-.283-.069-.959.128-1.814C3.749 2.894 4 1.804 4 .502a.5.5 0 00-1 0c0 1.189-.237 2.217-.427 3.043-.258 1.118-.461 2.002.064 2.662.39.49 1.101.733 2.333.785-.112 2.79-.516 5.19-.851 7.177-.446 2.644-.74 4.39.012 5.279.311.368.772.555 1.37.555s1.059-.187 1.37-.555c.752-.89.458-2.638.012-5.284-.334-1.985-.738-4.384-.851-7.172 1.235-.05 1.946-.292 2.337-.783.524-.659.32-1.541.062-2.659-.191-.827-.429-1.857-.429-3.048zM6.106 18.799c-.073.086-.215.201-.606.201s-.533-.114-.606-.2c-.452-.535-.145-2.357.211-4.467.129-.762.267-1.585.396-2.467.129.881.267 1.701.395 2.463.356 2.112.663 3.936.211 4.472zM15.882 14.162c-.393-2.331-.881-5.231-.882-8.662v-5a.5.5 0 00-.934-.248c-2.019 3.534-3.016 8.931-3.058 9.159a.499.499 0 00.492.59h2.235c-.175 1.544-.409 2.935-.617 4.166-.446 2.644-.74 4.39.012 5.279.311.368.772.555 1.37.555s1.059-.187 1.37-.555c.752-.89.458-2.638.012-5.284zM12.111 9c.248-1.171.882-3.887 1.889-6.317V5.5c0 1.236-.063 2.403-.163 3.5H12.11zm2.995 9.799c-.073.086-.215.201-.606.201s-.533-.114-.606-.2c-.452-.535-.145-2.357.211-4.467.129-.762.267-1.585.396-2.467.129.881.267 1.702.395 2.463.356 2.112.663 3.936.211 4.472z"
  })));
}
LiniDinner.propTypes = {
  size: PropTypes.number.isRequired
};