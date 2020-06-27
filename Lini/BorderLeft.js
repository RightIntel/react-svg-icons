function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBorderLeft({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBorderLeft';

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
    d: "M3 10h1v1H3v-1zM5 10h1v1H5v-1zM7 10h1v1H7v-1zM9 10h1v1H9v-1zM11 10h1v1h-1v-1zM13 10h1v1h-1v-1zM15 10h1v1h-1v-1zM17 10h1v1h-1v-1zM9 16h1v1H9v-1zM9 14h1v1H9v-1zM9 12h1v1H9v-1zM9 8h1v1H9V8zM9 6h1v1H9V6zM9 4h1v1H9V4zM9 2h1v1H9V2zM17 16h1v1h-1v-1zM17 18h1v1h-1v-1zM17 14h1v1h-1v-1zM17 12h1v1h-1v-1zM17 2h1v1h-1V2zM17 8h1v1h-1V8zM17 6h1v1h-1V6zM17 4h1v1h-1V4zM9 18h1v1H9v-1zM3 2h1v1H3V2zM5 2h1v1H5V2zM7 2h1v1H7V2zM11 2h1v1h-1V2zM13 2h1v1h-1V2zM15 2h1v1h-1V2zM3 18h1v1H3v-1zM5 18h1v1H5v-1zM7 18h1v1H7v-1zM11 18h1v1h-1v-1zM13 18h1v1h-1v-1zM15 18h1v1h-1v-1zM1.5 19a.5.5 0 01-.5-.5v-16a.5.5 0 011 0v16a.5.5 0 01-.5.5z"
  })));
}
LiniBorderLeft.propTypes = {
  size: PropTypes.number.isRequired
};