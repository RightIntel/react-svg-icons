import React from 'react';
import PropTypes from 'prop-types';
export default function LiniRegister({
  size,
  ...props
}) {
  let className = 'Component Lini LiniRegister';

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
    d: "M14.5 20h-13C.673 20 0 19.327 0 18.5v-16C0 1.673.673 1 1.5 1h13c.827 0 1.5.673 1.5 1.5v2a.5.5 0 01-1 0v-2a.5.5 0 00-.5-.5h-13a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-4a.5.5 0 011 0v4c0 .827-.673 1.5-1.5 1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 5h-7a.5.5 0 010-1h7a.5.5 0 010 1zM12.5 7h-9a.5.5 0 010-1h9a.5.5 0 010 1zM11.5 9h-8a.5.5 0 010-1h8a.5.5 0 010 1zM8.5 11h-5a.5.5 0 010-1h5a.5.5 0 010 1zM8.5 17a.5.5 0 01-.481-.637l1-3.5a.494.494 0 01.127-.216l7.5-7.5a.5.5 0 01.707 0l2.5 2.5a.5.5 0 01.003.704l-7.5 7.641a.498.498 0 01-.238.135l-3.5.859a.478.478 0 01-.119.014zm1.445-3.738l-.728 2.547 2.525-.62 7.053-7.186-1.796-1.796-7.055 7.055zM6.5 17h-3a.5.5 0 010-1h3a.5.5 0 010 1z"
  })));
}
LiniRegister.propTypes = {
  size: PropTypes.number.isRequired
};