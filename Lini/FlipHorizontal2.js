function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFlipHorizontal2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFlipHorizontal2';

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
    d: "M.5 19a.502.502 0 01-.5-.5v-10a.498.498 0 01.79-.407l7 5a.5.5 0 010 .814l-7 5A.496.496 0 01.499 19zM1 9.472v8.057l5.64-4.028L1 9.473zM18.5 19a.5.5 0 01-.291-.093l-7-5a.5.5 0 010-.814l7-5a.5.5 0 01.79.407v10a.502.502 0 01-.5.5zm-6.14-5.5L18 17.528V9.471l-5.64 4.028zM9.5 10a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM9.5 13a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM9.5 16a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM9.5 19a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM17.5 1a.5.5 0 00-.5.5v2.652A10.49 10.49 0 009.5 1a10.39 10.39 0 00-4.77 1.144A10.597 10.597 0 001.1 5.199a.5.5 0 00.799.6A9.426 9.426 0 019.499 2a9.49 9.49 0 016.928 3h-2.928a.5.5 0 000 1h4a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5z"
  })));
}
LiniFlipHorizontal2.propTypes = {
  size: PropTypes.number.isRequired
};