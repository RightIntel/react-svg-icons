function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCool({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCool';

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
    d: "M15.4 5.199a.5.5 0 00-.4-.2h-4a.501.501 0 00-.4.2 2.99 2.99 0 00-.429.8H8.83a3 3 0 00-.43-.801.5.5 0 00-.4-.2H4a.501.501 0 00-.4.2c-.393.523-.6 1.145-.6 1.801s.208 1.278.6 1.801A.5.5 0 004 9h4a.501.501 0 00.4-.2c.393-.523.6-1.145.6-1.8h1c0 .655.208 1.278.6 1.801a.5.5 0 00.4.2h4a.501.501 0 00.4-.2c.393-.523.6-1.145.6-1.8s-.208-1.278-.6-1.801zM7.733 8H4.268c-.176-.303-.267-.644-.267-1s.092-.698.267-1h3.465c.108.186.184.386.227.596l.003.012A1.988 1.988 0 017.734 8zm7 0h-3.465a1.978 1.978 0 01-.267-1c0-.133.013-.264.038-.392l.003-.012A1.98 1.98 0 0111.269 6h3.465c.176.303.267.644.267 1s-.092.697-.267 1zM9.5 17a6.504 6.504 0 01-6.411-5.418.5.5 0 01.986-.166 5.48 5.48 0 005.424 4.583c.967 0 1.918-.254 2.75-.736a.5.5 0 01.501.865 6.5 6.5 0 01-3.25.87z"
  })));
}
LiniCool.propTypes = {
  size: PropTypes.number.isRequired
};