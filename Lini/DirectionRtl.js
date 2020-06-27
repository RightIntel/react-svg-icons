function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniDirectionRtl({
  size,
  ...props
}) {
  let className = 'Component Lini LiniDirectionRtl';

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
    d: "M15.5 1H7C4.794 1 3 2.794 3 5s1.794 4 4 4h1v4.5a.5.5 0 001 0V2h3v11.5a.5.5 0 001 0V2h2.5a.5.5 0 000-1zM8 8H7C5.346 8 4 6.654 4 5s1.346-3 3-3h1v6zM14.5 17H5.207l1.146-1.146a.5.5 0 00-.707-.707l-2 2a.5.5 0 000 .707l2 2a.498.498 0 00.708 0 .5.5 0 000-.707l-1.146-1.146h9.293a.5.5 0 000-1z"
  })));
}
LiniDirectionRtl.propTypes = {
  size: PropTypes.number.isRequired
};