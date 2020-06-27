import React from 'react';
import PropTypes from 'prop-types';
export default function LiniEye({
  size,
  ...props
}) {
  let className = 'Component Lini LiniEye';

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
    d: "M19.872 10.166c-.047-.053-1.182-1.305-2.956-2.572-1.047-.748-2.1-1.344-3.13-1.773-1.305-.544-2.579-.82-3.786-.82s-2.481.276-3.786.82c-1.03.429-2.083 1.026-3.13 1.773C1.31 8.861.175 10.114.128 10.166a.5.5 0 000 .669c.047.053 1.182 1.305 2.956 2.572 1.047.748 2.1 1.344 3.13 1.773 1.305.544 2.579.82 3.786.82s2.481-.276 3.786-.82c1.03-.429 2.083-1.026 3.13-1.773 1.774-1.267 2.909-2.52 2.956-2.572a.5.5 0 000-.669zm-7.298-3.728A3.983 3.983 0 0114 9.5c0 2.206-1.794 4-4 4s-4-1.794-4-4c0-1.188.519-2.299 1.426-3.062C8.248 6.17 9.117 6 10 6s1.752.17 2.574.438zm3.743 6.168C14.784 13.698 12.444 15 10 15s-4.784-1.302-6.317-2.394A20.014 20.014 0 011.194 10.5a20.102 20.102 0 012.489-2.106 16.19 16.19 0 011.85-1.145A5.006 5.006 0 0010 14.5a5.006 5.006 0 004.467-7.251c.694.365 1.32.768 1.85 1.145a20.014 20.014 0 012.489 2.106 20.102 20.102 0 01-2.489 2.106z"
  })));
}
LiniEye.propTypes = {
  size: PropTypes.number.isRequired
};