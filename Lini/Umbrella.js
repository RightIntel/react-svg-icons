function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniUmbrella({
  size,
  ...props
}) {
  let className = 'Component Lini LiniUmbrella';

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
    d: "M15.51 3.49C13.905 1.885 11.77 1 9.5 1s-4.405.884-6.01 2.49S1 7.23 1 9.5a.5.5 0 001 0C2 8.673 2.673 8 3.5 8S5 8.673 5 9.5a.5.5 0 001 0C6 8.673 6.673 8 7.5 8S9 8.673 9 9.5v8a.5.5 0 01-1 0 .5.5 0 00-1 0c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5v-8c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5a.5.5 0 001 0c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5a.5.5 0 001 0c0-2.27-.884-4.405-2.49-6.01zM15.5 7c-.817 0-1.544.394-2 1.002a2.497 2.497 0 00-4 0 2.497 2.497 0 00-4 0 2.497 2.497 0 00-3.168-.712C3.277 4.23 6.133 2 9.5 2s6.222 2.23 7.168 5.29A2.485 2.485 0 0015.5 7z"
  })));
}
LiniUmbrella.propTypes = {
  size: PropTypes.number.isRequired
};