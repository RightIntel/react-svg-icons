import React from 'react';
import PropTypes from 'prop-types';
export default function LiniDiamond4({
  size,
  ...props
}) {
  let className = 'Component Lini LiniDiamond4';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.5 18a.499.499 0 01-.372-.166l-9-10A.498.498 0 01.1 7.2l3-4a.5.5 0 01.4-.2h6a.5.5 0 010 1H3.75L1.147 7.471 9.5 16.752l8.353-9.281L15.25 4H13.5a.5.5 0 010-1h2a.5.5 0 01.4.2l3 4a.5.5 0 01-.028.634l-9 10A.502.502 0 019.5 18z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 10a.5.5 0 01-.5-.5C11 8.122 9.878 7 8.5 7a.5.5 0 010-1C9.878 6 11 4.878 11 3.5a.5.5 0 011 0C12 4.878 13.122 6 14.5 6a.5.5 0 010 1A2.503 2.503 0 0012 9.5a.5.5 0 01-.5.5zm-1.199-3.5c.49.296.903.708 1.199 1.199.296-.49.708-.903 1.199-1.199A3.536 3.536 0 0111.5 5.301c-.296.49-.708.903-1.199 1.199z"
  })));
}
LiniDiamond4.propTypes = {
  size: PropTypes.number.isRequired
};