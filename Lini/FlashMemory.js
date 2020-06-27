import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFlashMemory({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFlashMemory';

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
    d: "M16.5 20h-13c-.827 0-1.5-.673-1.5-1.5V6c0-.688.367-1.574.854-2.061L5.94.853c.487-.487 1.373-.854 2.061-.854h8.5c.827 0 1.5.673 1.5 1.5v17c0 .827-.673 1.5-1.5 1.5zM8 1c-.415 0-1.06.267-1.354.561L3.56 4.647c-.293.293-.561.939-.561 1.354v12.5a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-17a.5.5 0 00-.5-.5h-8.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 5a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5zM11.5 5a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5zM9.5 5a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5zM7.5 5a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5zM13.5 5a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5z"
  })));
}
LiniFlashMemory.propTypes = {
  size: PropTypes.number.isRequired
};