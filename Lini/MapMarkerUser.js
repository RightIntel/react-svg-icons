function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniMapMarkerUser({
  size,
  ...props
}) {
  let className = 'Component Lini LiniMapMarkerUser';

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
    d: "M10 20a.5.5 0 01-.393-.191c-.057-.073-1.418-1.814-2.797-4.385-.812-1.513-1.46-2.999-1.925-4.416C4.298 9.221 4.001 7.536 4.001 6c0-3.308 2.692-6 6-6s6 2.692 6 6c0 1.536-.298 3.22-.884 5.008-.465 1.417-1.113 2.903-1.925 4.416-1.38 2.571-2.74 4.312-2.797 4.385a.5.5 0 01-.393.191zm0-19C7.243 1 5 3.243 5 6c0 3.254 1.463 6.664 2.691 8.951A34.411 34.411 0 0010 18.661a34.38 34.38 0 002.318-3.726C13.541 12.652 15 9.248 15 6c0-2.757-2.243-5-5-5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 9.467a4.906 4.906 0 00-.351-1.659c-.214-.514-.514-.927-.891-1.229a2.582 2.582 0 00-.303-.208A1.99 1.99 0 0012 5.001c0-1.103-.897-2-2-2s-2 .897-2 2c0 .53.208 1.012.545 1.37a2.668 2.668 0 00-.303.208c-.377.302-.677.716-.891 1.229A4.884 4.884 0 007 9.5a.5.5 0 00.5.5h5.001a.5.5 0 00.5-.5L13 9.467zM9 5c0-.551.449-1 1-1s1 .449 1 1-.449 1-1 1c-.551 0-1-.449-1-1zm-.95 4a3.69 3.69 0 01.224-.808C8.608 7.39 9.173 7 10 7c1.429 0 1.837 1.268 1.953 2H8.049z"
  })));
}
LiniMapMarkerUser.propTypes = {
  size: PropTypes.number.isRequired
};