import React from 'react';
import PropTypes from 'prop-types';
export default function LiniGradient({
  size,
  ...props
}) {
  let className = 'Component Lini LiniGradient';

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
    d: "M18.5 20h-17C.673 20 0 19.327 0 18.5v-17C0 .673.673 0 1.5 0h17c.827 0 1.5.673 1.5 1.5v17c0 .827-.673 1.5-1.5 1.5zM1.5 1a.5.5 0 00-.5.5v17a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-17a.5.5 0 00-.5-.5h-17z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 2.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 3.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 4.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 5.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 6.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 7.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 8.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 9.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 10.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 11.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 12.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 13.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 14.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 15.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 16.5a.5.5 0 11-1 0 .5.5 0 011 0zM6 2.5a.5.5 0 11-1 0 .5.5 0 011 0zM6 4.5a.5.5 0 11-1 0 .5.5 0 011 0zM6 6.5a.5.5 0 11-1 0 .5.5 0 011 0zM6 8.5a.5.5 0 11-1 0 .5.5 0 011 0zM6 10.5a.5.5 0 11-1 0 .5.5 0 011 0zM6 12.5a.5.5 0 11-1 0 .5.5 0 011 0zM6 14.5a.5.5 0 11-1 0 .5.5 0 011 0zM6 16.5a.5.5 0 11-1 0 .5.5 0 011 0zM7 3.5a.5.5 0 11-1 0 .5.5 0 011 0zM7 5.5a.5.5 0 11-1 0 .5.5 0 011 0zM7 7.5a.5.5 0 11-1 0 .5.5 0 011 0zM7 9.5a.5.5 0 11-1 0 .5.5 0 011 0zM7 11.5a.5.5 0 11-1 0 .5.5 0 011 0zM7 13.5a.5.5 0 11-1 0 .5.5 0 011 0zM7 15.5a.5.5 0 11-1 0 .5.5 0 011 0zM7 17.5a.5.5 0 11-1 0 .5.5 0 011 0zM9 2.5a.5.5 0 11-1 0 .5.5 0 011 0zM9 4.5a.5.5 0 11-1 0 .5.5 0 011 0zM9 6.5a.5.5 0 11-1 0 .5.5 0 011 0zM9 8.5a.5.5 0 11-1 0 .5.5 0 011 0zM9 10.5a.5.5 0 11-1 0 .5.5 0 011 0zM9 12.5a.5.5 0 11-1 0 .5.5 0 011 0zM9 14.5a.5.5 0 11-1 0 .5.5 0 011 0zM9 16.5a.5.5 0 11-1 0 .5.5 0 011 0zM11 3.5a.5.5 0 11-1 0 .5.5 0 011 0zM11 5.5a.5.5 0 11-1 0 .5.5 0 011 0zM11 7.5a.5.5 0 11-1 0 .5.5 0 011 0zM11 9.5a.5.5 0 11-1 0 .5.5 0 011 0zM11 11.5a.5.5 0 11-1 0 .5.5 0 011 0zM11 13.5a.5.5 0 11-1 0 .5.5 0 011 0zM11 15.5a.5.5 0 11-1 0 .5.5 0 011 0zM11 17.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 17.5a.5.5 0 11-1 0 .5.5 0 011 0zM4 2.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 3.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 4.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 5.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 6.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 7.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 8.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 9.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 10.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 11.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 12.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 13.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 14.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 15.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 16.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 17.5a.5.5 0 11-1 0 .5.5 0 011 0zM13 2.5a.5.5 0 11-1 0 .5.5 0 011 0zM13 6.5a.5.5 0 11-1 0 .5.5 0 011 0zM13 10.5a.5.5 0 11-1 0 .5.5 0 011 0zM13 14.5a.5.5 0 11-1 0 .5.5 0 011 0zM15 4.5a.5.5 0 11-1 0 .5.5 0 011 0zM15 8.5a.5.5 0 11-1 0 .5.5 0 011 0zM15 12.5a.5.5 0 11-1 0 .5.5 0 011 0zM15 16.5a.5.5 0 11-1 0 .5.5 0 011 0zM2.5 18a.5.5 0 01-.5-.5v-15a.5.5 0 011 0v15a.5.5 0 01-.5.5z"
  })));
}
LiniGradient.propTypes = {
  size: PropTypes.number.isRequired
};