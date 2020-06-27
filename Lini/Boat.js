function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBoat({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBoat';

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
    d: "M19.906 14.208A.502.502 0 0019.5 14H11v-1h6.5a.5.5 0 00.339-.868c-.011-.01-1.122-1.041-2.519-2.883-1.286-1.695-3.084-4.446-4.35-7.92A.5.5 0 0010 1.5V14H.5a.499.499 0 00-.475.658c.72 2.159 1.493 3.66 3.126 4.477C4.614 19.866 6.605 20 10 20s5.386-.134 6.849-.865c1.632-.816 2.406-2.318 3.126-4.477a.499.499 0 00-.069-.45zM11 4.01a32.398 32.398 0 003.539 5.864c.691.91 1.309 1.623 1.772 2.125H11v-7.99zm5.401 14.23c-1.277.639-3.235.76-6.401.76s-5.124-.121-6.401-.76c-1.04-.52-1.72-1.424-2.393-3.24h17.589c-.674 1.816-1.353 2.72-2.393 3.24z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 13h-6a.5.5 0 01-.307-.895c.011-.008 1.118-.876 2.388-2.269 1.16-1.273 2.699-3.259 3.444-5.494a.498.498 0 01.974.159v8a.5.5 0 01-.5.5zm-4.659-1H8V6.843c-.824 1.484-1.853 2.761-2.693 3.682A25.022 25.022 0 013.842 12zM4.5 17c-.132 0-.261-.053-.353-.147S4 16.631 4 16.5a.498.498 0 01.5-.5.5.5 0 010 1zM6.5 17c-.132 0-.261-.053-.353-.147S6 16.631 6 16.5a.498.498 0 01.5-.5.498.498 0 01.5.5.498.498 0 01-.5.5zM8.5 17c-.132 0-.261-.053-.353-.147S8 16.631 8 16.5a.498.498 0 01.5-.5.498.498 0 01.5.5.498.498 0 01-.5.5z"
  })));
}
LiniBoat.propTypes = {
  size: PropTypes.number.isRequired
};