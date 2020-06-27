function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniTextFormatRemove({
  size,
  ...props
}) {
  let className = 'Component Lini LiniTextFormatRemove';

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
    d: "M13.5 1h-12a.5.5 0 000 1h5.41L5.007 13.418a.5.5 0 00.987.164L7.924 2H13.5a.5.5 0 000-1zM10.5 16h-9a.5.5 0 000 1h9a.5.5 0 000-1zM15.707 16.5l1.646-1.646a.5.5 0 00-.707-.707L15 15.793l-1.646-1.646a.5.5 0 00-.707.707l1.646 1.646-1.646 1.646a.5.5 0 00.708.707l1.646-1.646 1.646 1.646a.498.498 0 00.708 0 .5.5 0 000-.707L15.709 16.5z"
  })));
}
LiniTextFormatRemove.propTypes = {
  size: PropTypes.number.isRequired
};