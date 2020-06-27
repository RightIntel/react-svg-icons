function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniDownload({
  size,
  ...props
}) {
  let className = 'Component Lini LiniDownload';

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
    d: "M13.854 8.646a.5.5 0 00-.707 0l-3.146 3.146V1.499a.5.5 0 00-1 0v10.293L5.855 8.646a.5.5 0 00-.707.707l4 4a.498.498 0 00.708 0l4-4a.5.5 0 000-.707z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 20c-2.488 0-4.834-.542-6.607-1.527C1.027 17.436 0 16.026 0 14.5c0-.978.42-1.878 1.249-2.674.733-.704 1.768-1.308 3.077-1.794a.5.5 0 01.401.915C3.645 11.499 3 12.267 3 13.002c0 .725.647 1.464 1.774 2.028 1.254.627 2.932.972 4.726.972s3.472-.345 4.726-.972C15.353 14.466 16 13.727 16 13.002c0-.735-.646-1.503-1.727-2.055a.501.501 0 01.401-.915c1.309.487 2.344 1.091 3.077 1.794C18.58 12.622 19 13.522 19 14.5c0 1.525-1.027 2.936-2.893 3.973C14.334 19.458 11.988 20 9.5 20zm-7.429-7.571C1.45 12.98 1 13.667 1 14.5c0 1.146.845 2.246 2.379 3.098C5.006 18.502 7.18 19 9.5 19s4.494-.498 6.121-1.402C17.155 16.746 18 15.645 18 14.5c0-.833-.45-1.52-1.071-2.071.047.188.071.378.071.571 0 1.134-.826 2.172-2.327 2.922C13.283 16.617 11.446 17 9.5 17s-3.783-.383-5.173-1.078C2.827 15.172 2 14.134 2 13c0-.193.024-.383.071-.571z"
  })));
}
LiniDownload.propTypes = {
  size: PropTypes.number.isRequired
};