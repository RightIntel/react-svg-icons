function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniExitDown({
  size,
  ...props
}) {
  let className = 'Component Lini LiniExitDown';

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
    d: "M15.5 0h-12C2.673 0 2 .673 2 1.5v10c0 .827.673 1.5 1.5 1.5h4a.5.5 0 000-1h-4a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h12a.5.5 0 01.5.5v10a.5.5 0 01-.5.5h-4a.5.5 0 000 1h4c.827 0 1.5-.673 1.5-1.5v-10c0-.827-.673-1.5-1.5-1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.853 16.354l-3 3a.5.5 0 01-.707 0l-3-3a.5.5 0 01.707-.707L9 17.793V6.5a.5.5 0 011 0v11.293l2.147-2.146a.497.497 0 01.706 0 .5.5 0 010 .707z"
  })));
}
LiniExitDown.propTypes = {
  size: PropTypes.number.isRequired
};