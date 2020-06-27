function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCandy({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCandy';

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
    d: "M18.916 6.223l-.5-.75c-.245-.367-.553-1.084-.674-1.564l-.015-.06c-.177-.707-.869-1.4-1.576-1.577l-.06-.015c-.48-.12-1.197-.428-1.564-.673l-.75-.5A.5.5 0 0013 1.5v3.525A6.465 6.465 0 009.5 4 6.508 6.508 0 003 10.5c0 1.288.376 2.489 1.025 3.5H.5a.502.502 0 00-.416.777l.5.75c.245.368.553 1.084.673 1.564l.015.06c.177.707.869 1.4 1.576 1.576l.06.015c.48.12 1.197.428 1.564.673l.75.5a.498.498 0 00.513.025.499.499 0 00.264-.441v-3.525a6.457 6.457 0 003.5 1.025c3.584 0 6.5-2.916 6.5-6.5a6.457 6.457 0 00-1.025-3.5h3.525a.502.502 0 00.416-.777zM9 15.977a5.459 5.459 0 01-2-.579V5.601a5.459 5.459 0 012-.579v10.954zm1-10.954c.714.065 1.39.266 2 .579v9.797a5.459 5.459 0 01-2 .579V5.024zM6 6.26v8.479a5.491 5.491 0 010-8.48zM5 18.566c-.466-.303-1.269-.649-1.849-.793l-.06-.015c-.355-.089-.76-.493-.849-.849l-.015-.06c-.145-.58-.49-1.383-.794-1.849h3.38c.061.063.123.125.186.186v3.38zm8-3.826V6.261a5.491 5.491 0 010 8.48zM14.186 6A8.155 8.155 0 0014 5.814v-3.38c.466.303 1.269.649 1.849.794l.06.015c.355.089.76.493.849.849l.015.06c.145.58.49 1.383.794 1.849h-3.38z"
  })));
}
LiniCandy.propTypes = {
  size: PropTypes.number.isRequired
};