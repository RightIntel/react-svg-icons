function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniTextWrap({
  size,
  ...props
}) {
  let className = 'Component Lini LiniTextWrap';

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
    d: "M17.5 5h-15a.5.5 0 010-1h15a.5.5 0 010 1zM17.5 17h-15a.5.5 0 010-1h15a.5.5 0 010 1zM15.5 8h-13a.5.5 0 000 1h13c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5h-5.293l1.146-1.146a.5.5 0 00-.707-.707l-2 2a.5.5 0 000 .707l2 2a.498.498 0 00.708 0 .5.5 0 000-.707l-1.146-1.146h5.293c1.378 0 2.5-1.122 2.5-2.5s-1.122-2.5-2.5-2.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 13h-4a.5.5 0 010-1h4a.5.5 0 010 1z"
  })));
}
LiniTextWrap.propTypes = {
  size: PropTypes.number.isRequired
};