function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniStreamError({
  size,
  ...props
}) {
  let className = 'Component Lini LiniStreamError';

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
    d: "M17.5 16h-2a.5.5 0 010-1h2a.5.5 0 00.5-.5v-6a.5.5 0 011 0v6c0 .827-.673 1.5-1.5 1.5zM3.5 16h-2C.673 16 0 15.327 0 14.5v-12C0 1.673.673 1 1.5 1h9a.5.5 0 010 1h-9a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h2a.5.5 0 010 1zM9.5 19c-.827 0-1.5-.673-1.5-1.5S8.673 16 9.5 16s1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1zM6.053 15.968a.5.5 0 01-.43-.755 4.503 4.503 0 017.752 0 .5.5 0 11-.861.509C11.886 14.66 10.731 14 9.498 14s-2.388.66-3.016 1.722a.5.5 0 01-.431.246z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.107 13.808a.501.501 0 01-.401-.2C13.465 11.951 11.567 11 9.5 11s-3.965.95-5.206 2.608a.5.5 0 11-.8-.6 7.578 7.578 0 012.594-2.189c1.063-.544 2.211-.82 3.412-.82s2.35.276 3.412.82a7.556 7.556 0 012.594 2.189.5.5 0 01-.399.8zM16.207 4l2.146-2.146a.5.5 0 00-.707-.707L15.5 3.293l-2.146-2.146a.5.5 0 00-.707.707L14.793 4l-2.146 2.146a.5.5 0 00.708.707l2.146-2.146 2.146 2.146a.498.498 0 00.708 0 .5.5 0 000-.707L16.209 4z"
  })));
}
LiniStreamError.propTypes = {
  size: PropTypes.number.isRequired
};