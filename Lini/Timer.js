function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniTimer({
  size,
  ...props
}) {
  let className = 'Component Lini LiniTimer';

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
    d: "M15.51 5.49A8.438 8.438 0 0010 3.015V2h.5a.5.5 0 000-1h-2a.5.5 0 000 1H9v1.015A8.438 8.438 0 003.49 5.49C1.885 7.095 1 9.23 1 11.5s.884 4.405 2.49 6.01C5.095 19.115 7.23 20 9.5 20s4.405-.884 6.01-2.49C17.115 15.905 18 13.77 18 11.5s-.884-4.405-2.49-6.01zM10 18.983V18.5a.5.5 0 00-1 0v.483A7.51 7.51 0 012.017 12H2.5a.5.5 0 000-1h-.483A7.51 7.51 0 019 4.017V4.5a.5.5 0 001 0v-.483A7.51 7.51 0 0116.983 11H16.5a.5.5 0 000 1h.483A7.51 7.51 0 0110 18.983z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 12a.5.5 0 01-.5-.5v-5a.5.5 0 011 0v5a.5.5 0 01-.5.5z"
  })));
}
LiniTimer.propTypes = {
  size: PropTypes.number.isRequired
};