function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSigma({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSigma';

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
    d: "M14.5 18h-10a.498.498 0 01-.407-.79l4.792-6.709-4.792-6.709a.5.5 0 01.407-.79h10a.5.5 0 010 1H5.472l4.435 6.209a.5.5 0 010 .581l-4.435 6.209H14.5a.5.5 0 010 1z"
  })));
}
LiniSigma.propTypes = {
  size: PropTypes.number.isRequired
};