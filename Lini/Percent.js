import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPercent({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPercent';

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
    d: "M1 20a.5.5 0 01-.354-.853l18-18a.5.5 0 01.707.707l-18 18A.498.498 0 01.999 20zM5 9C2.794 9 1 7.206 1 5s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-7C3.346 2 2 3.346 2 5s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zM15 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-7c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"
  })));
}
LiniPercent.propTypes = {
  size: PropTypes.number.isRequired
};