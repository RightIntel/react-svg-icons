import React from 'react';
import PropTypes from 'prop-types';
export default function LiniWarning({
  size,
  ...props
}) {
  let className = 'Component Lini LiniWarning';

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
    d: "M18.5 19H.5a.5.5 0 01-.436-.746l9-16a.501.501 0 01.872 0l9 16A.503.503 0 0118.5 19zM1.355 18h16.29L9.5 3.52 1.355 18z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 14a.5.5 0 01-.5-.5v-5a.5.5 0 011 0v5a.5.5 0 01-.5.5zM9.5 17a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5z"
  })));
}
LiniWarning.propTypes = {
  size: PropTypes.number.isRequired
};