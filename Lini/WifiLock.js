import React from 'react';
import PropTypes from 'prop-types';
export default function LiniWifiLock({
  size,
  ...props
}) {
  let className = 'Component Lini LiniWifiLock';

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
    d: "M10.5 16c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1zM18.243 8.671a.5.5 0 01-.387-.183A9.47 9.47 0 0010.5 5c-.64 0-1.279.064-1.901.19a.499.499 0 11-.198-.98C9.088 4.071 9.794 4 10.5 4c3.162 0 6.125 1.405 8.13 3.855a.501.501 0 01-.386.817zM7 7.086V6.5C7 5.122 5.878 4 4.5 4S2 5.122 2 6.5v.586c-.582.206-1 .762-1 1.414v3c0 .827.673 1.5 1.5 1.5h4c.827 0 1.5-.673 1.5-1.5v-3c0-.652-.418-1.208-1-1.414zM4.5 5C5.327 5 6 5.673 6 6.5V7H3v-.5C3 5.673 3.673 5 4.5 5zM7 11.5a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v3zM13.947 12.968a.5.5 0 01-.431-.246 3.519 3.519 0 00-3.891-1.612.5.5 0 11-.249-.969 4.523 4.523 0 013.389.468 4.526 4.526 0 011.612 1.603.5.5 0 01-.43.755zM16.107 10.808a.501.501 0 01-.401-.2A6.451 6.451 0 0010.5 8c-.311 0-.624.022-.929.066a.5.5 0 01-.142-.99C9.781 7.026 10.141 7 10.5 7c1.202 0 2.35.276 3.412.82a7.556 7.556 0 012.594 2.189.5.5 0 01-.399.8z"
  })));
}
LiniWifiLock.propTypes = {
  size: PropTypes.number.isRequired
};