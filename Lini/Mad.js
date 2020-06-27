function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniMad({
  size,
  ...props
}) {
  let className = 'Component Lini LiniMad';

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
    d: "M9.5 20c-2.538 0-4.923-.988-6.718-2.782S0 13.038 0 10.501c0-2.538.988-4.923 2.782-6.718S6.962 1 9.5 1c2.538 0 4.923.988 6.718 2.783S19 7.963 19 10.501s-.988 4.923-2.782 6.717A9.438 9.438 0 019.5 20zm0-18C4.813 2 1 5.813 1 10.5S4.813 19 9.5 19s8.5-3.813 8.5-8.5S14.187 2 9.5 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.499 15a.5.5 0 01-.399-.8 5.549 5.549 0 011.901-1.6c.778-.398 1.619-.599 2.499-.599s1.721.202 2.499.599a5.549 5.549 0 011.901 1.6.5.5 0 01-.799.601c-.859-1.144-2.172-1.8-3.601-1.8s-2.741.656-3.601 1.8a.498.498 0 01-.4.2zM13.234 6.192l.49-.245a.5.5 0 00-.447-.895l-2 1a.5.5 0 00-.13.801A1.502 1.502 0 0012.5 8.999a1.501 1.501 0 00.734-2.808zM12.5 8a.5.5 0 110-1 .5.5 0 010 1zM7.853 6.854a.498.498 0 00-.13-.801l-2-1a.5.5 0 00-.447.895l.49.245a1.5 1.5 0 102.087.662zM6.5 8a.5.5 0 110-1 .5.5 0 010 1z"
  })));
}
LiniMad.propTypes = {
  size: PropTypes.number.isRequired
};