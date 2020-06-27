function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniUpload({
  size,
  ...props
}) {
  let className = 'Component Lini LiniUpload';

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
    d: "M13.854 4.646l-4-4a.5.5 0 00-.707 0l-4 4a.5.5 0 00.707.707L9 2.207V12.5a.5.5 0 001 0V2.207l3.146 3.146a.498.498 0 00.708 0 .5.5 0 000-.707z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 20c-2.488 0-4.834-.542-6.607-1.527C1.027 17.436 0 16.026 0 14.5c0-2.641 3.128-4.953 7.437-5.496a.5.5 0 01.136.991c-1.321.197-2.519.634-3.371 1.232-.776.544-1.203 1.174-1.203 1.774 0 .725.647 1.464 1.774 2.028 1.254.627 2.932.972 4.726.972s3.472-.345 4.726-.972c1.127-.564 1.774-1.303 1.774-2.028 0-.6-.427-1.23-1.203-1.774-.852-.598-2.049-1.035-3.371-1.232a.5.5 0 01.136-.991c4.31.543 7.437 2.855 7.437 5.496 0 1.525-1.027 2.936-2.893 3.973C14.332 19.458 11.986 20 9.498 20zm-7.374-7.757C1.41 12.924 1 13.7 1 14.5c0 1.146.845 2.246 2.379 3.098C5.006 18.502 7.18 19 9.5 19s4.494-.498 6.121-1.402C17.155 16.746 18 15.645 18 14.5c0-.8-.411-1.576-1.126-2.257.083.249.126.502.126.757 0 1.134-.826 2.172-2.327 2.922C13.283 16.617 11.446 17 9.5 17s-3.783-.383-5.173-1.078C2.827 15.172 2 14.134 2 13c0-.254.043-.508.126-.757z"
  })));
}
LiniUpload.propTypes = {
  size: PropTypes.number.isRequired
};