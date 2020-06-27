function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniDiamond({
  size,
  ...props
}) {
  let className = 'Component Lini LiniDiamond';

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
    d: "M9.5 18a.499.499 0 01-.372-.166l-9-10A.498.498 0 01.1 7.2l3-4a.5.5 0 01.4-.2h12a.5.5 0 01.4.2l3 4a.5.5 0 01-.028.634l-9 10A.502.502 0 019.5 18zM1.147 7.471L9.5 16.752l8.353-9.281L15.25 4H3.75L1.147 7.471z"
  })));
}
LiniDiamond.propTypes = {
  size: PropTypes.number.isRequired
};