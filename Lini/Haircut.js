function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniHaircut({
  size,
  ...props
}) {
  let className = 'Component Lini LiniHaircut';

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
    d: "M5.017 14.515c.036-.262.132-.497.294-.726a.5.5 0 10-.817-.577 2.649 2.649 0 00-.406.859A2.503 2.503 0 001 16.501c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5c0-.808-.386-1.528-.983-1.985zM3.5 18c-.827 0-1.5-.673-1.5-1.5S2.673 15 3.5 15s1.5.673 1.5 1.5S4.327 18 3.5 18z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 19a.5.5 0 01-.5-.5v-.001a2.499 2.499 0 00-2.001-4.449c-.014-5.162-.183-9.015-.503-11.457C7.315 1.215 7.099.392 6.854.146a.498.498 0 00-.827.195c-.042.126-1.026 3.146-1.026 9.158 0 1.774.67 2.648 1.208 3.35.397.518.72.939.781 1.66a2.496 2.496 0 00-.989 1.99 2.503 2.503 0 003.065 2.435c.187.616.76 1.065 1.435 1.065a.5.5 0 000-1zM6 9.5c0-3.013.258-5.266.508-6.743.206 1.598.423 4.446.478 9.465-.509-.664-.987-1.3-.987-2.722zm1 7c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5S9.327 18 8.5 18 7 17.327 7 16.5zM17 16.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 0h-3a.5.5 0 000 1h3c.827 0 1.5.673 1.5 1.5 0 7.069-1.63 9.411-2.821 11.121C14.546 14.53 14 15.314 14 16.5c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5v-14C19 1.122 17.878 0 16.5 0zM18 16.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5c0-.872.398-1.443 1-2.308.615-.883 1.391-1.998 2-3.879V16.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 3h-3a.5.5 0 010-1h3a.5.5 0 010 1zM16.5 5h-3a.5.5 0 010-1h3a.5.5 0 010 1zM16.5 7h-3a.5.5 0 010-1h3a.5.5 0 010 1zM16.5 9h-3a.5.5 0 010-1h3a.5.5 0 010 1zM15.5 11h-2a.5.5 0 010-1h2a.5.5 0 010 1zM14.5 13h-1a.5.5 0 010-1h1a.5.5 0 010 1z"
  })));
}
LiniHaircut.propTypes = {
  size: PropTypes.number.isRequired
};