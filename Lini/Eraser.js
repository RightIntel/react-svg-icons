function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniEraser({
  size,
  ...props
}) {
  let className = 'Component Lini LiniEraser';

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
    d: "M19.715 6.913a1.394 1.394 0 00-.155-.446 1.39 1.39 0 00-.472-.506l-.005-.003-.032-.02a1.396 1.396 0 00-.327-.145l-.074-.021-6.06-1.515a2.215 2.215 0 00-.53-.061c-.599 0-1.25.205-1.658.523l-7.421 5.772c-.51.396-1.069 1.187-1.273 1.799L.34 16.393a1.412 1.412 0 001.007 1.834l6.06 1.515c.162.04.34.061.53.061.474 0 .981-.129 1.374-.341.091-.046.186-.106.284-.182l7.421-5.772c.51-.396 1.069-1.187 1.273-1.799l1.368-4.103c.092-.275.111-.504.057-.694zm-7.653-1.716c.107 0 .206.011.287.031l6.033 1.508-7.4 5.755c-.236.184-.666.312-1.044.312-.107 0-.206-.011-.287-.031l-6.033-1.508 7.4-5.755c.236-.184.666-.312 1.044-.312zM1.316 17.052a.429.429 0 01-.026-.343l1.368-4.103a.597.597 0 01.691-.379l6.06 1.515c.121.03.219.103.275.205s.065.224.026.343l-1.368 4.103a.598.598 0 01-.691.379l-1.03-.257-5.03-1.257a.422.422 0 01-.275-.206zm15.088-4.333l-6.907 5.372 1.162-3.485c.143-.429.581-1.049.938-1.326l6.907-5.372-1.162 3.485c-.143.429-.581 1.048-.938 1.326z"
  })));
}
LiniEraser.propTypes = {
  size: PropTypes.number.isRequired
};