function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniGolf2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniGolf2';

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
    d: "M17.5 9C16.122 9 15 7.878 15 6.5S16.122 4 17.5 4 20 5.122 20 6.5 18.878 9 17.5 9zm0-4c-.827 0-1.5.673-1.5 1.5S16.673 8 17.5 8 19 7.327 19 6.5 18.327 5 17.5 5zM6.5 17c-.899 0-1.751-.238-2.399-.67C3.391 15.857 3 15.207 3 14.5c0-.755.46-1.459 1.262-1.931a.5.5 0 11.507.861c-.489.288-.769.677-.769 1.069 0 .813 1.145 1.5 2.5 1.5s2.5-.687 2.5-1.5c0-.392-.28-.782-.769-1.069a.5.5 0 11.507-.861C9.54 13.041 10 13.745 10 14.5c0 .707-.391 1.357-1.101 1.83-.648.432-1.5.67-2.399.67z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 15a.5.5 0 01-.5-.5V6.511.5a.5.5 0 01.723-.447l6 3a.5.5 0 010 .894L6.999 6.809V14.5a.5.5 0 01-.5.5zM7 1.309v4.382L11.382 3.5 7 1.309z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 20c-2.358 0-4.583-.545-6.264-1.533C.972 17.429 0 16.02 0 14.5c0-1.954 1.618-3.715 4.327-4.712a.5.5 0 11.345.939c-1.13.416-2.068.989-2.713 1.659C1.331 13.038 1 13.769 1 14.5c0 1.151.797 2.254 2.243 3.105C4.773 18.505 6.817 19 9 19s4.227-.496 5.757-1.395C16.204 16.754 17 15.652 17 14.5s-.797-2.254-2.243-3.105C13.227 10.495 11.183 10 9 10c-.161 0-.323.003-.483.008a.5.5 0 01-.034-1c.171-.006.345-.009.517-.009 2.358 0 4.583.545 6.264 1.533C17.028 11.57 18 12.979 18 14.499s-.972 2.929-2.736 3.967c-1.681.989-3.906 1.533-6.264 1.533z"
  })));
}
LiniGolf2.propTypes = {
  size: PropTypes.number.isRequired
};