import React from 'react';
import PropTypes from 'prop-types';
export default function LiniTags({
  size,
  ...props
}) {
  let className = 'Component Lini LiniTags';

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
    d: "M15.5 8c-.827 0-1.5-.673-1.5-1.5S14.673 5 15.5 5s1.5.673 1.5 1.5S16.327 8 15.5 8zm0-2a.5.5 0 100 1 .5.5 0 000-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 3H14c-.688 0-1.574.367-2.061.854L4.353 11.44c-.283.283-.438.659-.438 1.061s.156.778.438 1.061l2.602 2.602-1.095.632a.5.5 0 01-.683-.183l-3.596-6.229a.5.5 0 01.183-.683L9.75 5.09a.5.5 0 00-.5-.866L1.264 8.835c-.346.2-.594.523-.698.911s-.051.792.149 1.138l3.596 6.229a1.509 1.509 0 001.303.75c.26 0 .515-.068.746-.201l1.327-.766.752.752c.283.283.659.438 1.061.438s.778-.156 1.061-.438l7.586-7.586c.487-.487.853-1.372.853-2.061v-3.5c0-.827-.673-1.5-1.5-1.5zm.5 5c0 .415-.267 1.06-.561 1.354L9.853 16.94c-.094.094-.219.145-.354.145s-.26-.052-.354-.145l-4.086-4.086a.5.5 0 010-.707l7.586-7.586c.293-.293.939-.561 1.353-.561h3.5a.5.5 0 01.5.5V8z"
  })));
}
LiniTags.propTypes = {
  size: PropTypes.number.isRequired
};