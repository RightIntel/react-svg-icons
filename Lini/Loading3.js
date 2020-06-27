function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniLoading3({
  size,
  ...props
}) {
  let className = 'Component Lini LiniLoading3';

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
    d: "M17.071 2.929C15.182 1.04 12.671 0 10 0S4.818 1.04 2.929 2.929 0 7.329 0 10c0 2.671 1.04 5.182 2.929 7.071S7.329 20 10 20c2.671 0 5.182-1.04 7.071-2.929S20 12.671 20 10a9.934 9.934 0 00-2.929-7.071zM2 8c-.233 0-.456.04-.664.114C2.417 5.124 5.917 3 9 3c3.86 0 7 3.14 7 7a2.002 2.002 0 002.664 1.886C17.583 14.876 14.083 17 11 17c-3.86 0-7-3.14-7-7 0-1.103-.897-2-2-2zm8-7c4.963 0 9 4.037 9 9 0 .551-.449 1-1 1s-1-.449-1-1c0-2.137-.832-4.146-2.343-5.657S11.137 2 9 2c-1.955 0-3.977.697-5.637 1.928A8.98 8.98 0 0110 1zm0 18c-4.963 0-9-4.037-9-9 0-.551.449-1 1-1s1 .449 1 1c0 2.137.832 4.146 2.343 5.657S8.863 18 11 18c1.955 0 3.977-.697 5.637-1.928A8.98 8.98 0 0110 19z"
  })));
}
LiniLoading3.propTypes = {
  size: PropTypes.number.isRequired
};