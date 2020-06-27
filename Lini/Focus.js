import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFocus({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFocus';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18.5 7a.5.5 0 01-.5-.5v-2a.5.5 0 00-.5-.5h-2a.5.5 0 010-1h2c.827 0 1.5.673 1.5 1.5v2a.5.5 0 01-.5.5zM.5 7a.5.5 0 01-.5-.5v-2C0 3.673.673 3 1.5 3h2a.5.5 0 010 1h-2a.5.5 0 00-.5.5v2a.5.5 0 01-.5.5zM3.5 18h-2C.673 18 0 17.327 0 16.5v-2a.5.5 0 011 0v2a.5.5 0 00.5.5h2a.5.5 0 010 1zM17.5 18h-2a.5.5 0 010-1h2a.5.5 0 00.5-.5v-2a.5.5 0 011 0v2c0 .827-.673 1.5-1.5 1.5zM11.5 10H10V8.5a.5.5 0 00-1 0V10H7.5a.5.5 0 000 1H9v1.5a.5.5 0 001 0V11h1.5a.5.5 0 000-1z"
  })));
}
LiniFocus.propTypes = {
  size: PropTypes.number.isRequired
};