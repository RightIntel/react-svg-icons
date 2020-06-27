function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPants({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPants';

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
    d: "M18.993 18.418l-3-18A.5.5 0 0015.5 0h-12a.5.5 0 00-.493.418l-3 18a.5.5 0 00.395.572l5 1a.5.5 0 00.576-.343L9.5 8.2l3.522 11.447a.5.5 0 00.575.343l5-1a.5.5 0 00.395-.573zm-3.252-13.43A2.505 2.505 0 0113.05 3h2.359l.331 1.988zM15.243 2H11V1h4.076l.167 1zM9 2V1h1v1H9zM8 1v1H3.757l.167-1H8zM3.59 3h2.359a2.504 2.504 0 01-2.691 1.988L3.589 3zm10.255 15.921L9.978 6.353a.5.5 0 00-.956 0L5.155 18.921l-4.082-.816L3.094 5.977a3.505 3.505 0 003.87-2.976h5.072a3.505 3.505 0 003.87 2.976l2.021 12.128-4.082.816z"
  })));
}
LiniPants.propTypes = {
  size: PropTypes.number.isRequired
};