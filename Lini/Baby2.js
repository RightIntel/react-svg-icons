function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBaby2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBaby2';

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
    d: "M13.5 11c-.827 0-1.5-.673-1.5-1.5S12.673 8 13.5 8s1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1zM6.5 11C5.673 11 5 10.331 5 9.509s.673-1.491 1.5-1.491S8 8.687 8 9.509C8 10.331 7.327 11 6.5 11zm0-1.982c-.276 0-.5.22-.5.491s.224.491.5.491.5-.22.5-.491-.224-.491-.5-.491z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.42 7.815a8.972 8.972 0 00-3.186-4.137C13.701 2.58 11.892 2 10 2s-3.701.58-5.234 1.678A8.972 8.972 0 001.58 7.815C.587 8.57 0 9.749 0 11s.588 2.43 1.58 3.185a8.972 8.972 0 003.186 4.137C6.299 19.42 8.108 20 10 20s3.701-.58 5.234-1.678a8.972 8.972 0 003.186-4.137C19.413 13.43 20 12.251 20 11s-.588-2.43-1.58-3.185zm-.704 5.646a.5.5 0 00-.184.241C16.395 16.871 13.368 19 10 19s-6.395-2.129-7.532-5.298a.5.5 0 00-.184-.241C1.48 12.899 1 11.979 1 11s.48-1.899 1.284-2.461a.5.5 0 00.184-.241 8.021 8.021 0 016.57-5.24A2.5 2.5 0 0111 5.5a.5.5 0 01-1 0 .5.5 0 00-1 0c0 .827.673 1.5 1.5 1.5S12 6.327 12 5.5c0-.937-.372-1.8-.986-2.435a8.026 8.026 0 016.518 5.233.5.5 0 00.184.241C18.52 9.101 19 10.021 19 11s-.48 1.899-1.284 2.461z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 16a4.998 4.998 0 01-4.158-2.222.5.5 0 01.831-.557 3.999 3.999 0 006.654 0 .5.5 0 01.831.557A4.996 4.996 0 0110 16z"
  })));
}
LiniBaby2.propTypes = {
  size: PropTypes.number.isRequired
};