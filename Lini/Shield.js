function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniShield({
  size,
  ...props
}) {
  let className = 'Component Lini LiniShield';

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
    d: "M9.5 20a.503.503 0 01-.158-.026c-1.839-.613-4.147-2.651-5.88-5.193A19.944 19.944 0 010 3.499a.5.5 0 01.5-.5c2.814 0 7.238-1.926 8.723-2.916a.5.5 0 01.555 0c1.485.99 5.909 2.916 8.723 2.916a.5.5 0 01.5.5c0 5.128-1.883 8.965-3.462 11.282-1.733 2.541-4.041 4.58-5.88 5.193a.503.503 0 01-.158.026zM1.006 3.984a18.935 18.935 0 003.282 10.235c1.769 2.594 3.856 4.23 5.212 4.751 1.356-.521 3.443-2.156 5.212-4.751a18.935 18.935 0 003.282-10.235c-1.628-.102-3.442-.662-4.73-1.14-1.418-.525-2.849-1.193-3.764-1.751-.915.558-2.346 1.226-3.764 1.751-1.289.477-3.102 1.038-4.73 1.14z"
  })));
}
LiniShield.propTypes = {
  size: PropTypes.number.isRequired
};