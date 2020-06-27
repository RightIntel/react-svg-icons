function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPreviousCircle({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPreviousCircle';

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
    d: "M9.5 20c-2.538 0-4.923-.988-6.718-2.782S0 13.038 0 10.501c0-2.538.988-4.923 2.782-6.718S6.962 1 9.5 1c2.538 0 4.923.988 6.718 2.783S19 7.963 19 10.501s-.988 4.923-2.782 6.717A9.438 9.438 0 019.5 20zm0-18C4.813 2 1 5.813 1 10.5S4.813 19 9.5 19c4.687 0 8.5-3.813 8.5-8.5S14.187 2 9.5 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 16a.502.502 0 01-.32-.116l-6-5a.5.5 0 010-.768l6-5A.5.5 0 0113 5.5v10a.5.5 0 01-.5.5zm-5.219-5.5L12 14.432V6.567l-4.719 3.932z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 15a.5.5 0 01-.5-.5v-8a.5.5 0 011 0v8a.5.5 0 01-.5.5z"
  })));
}
LiniPreviousCircle.propTypes = {
  size: PropTypes.number.isRequired
};