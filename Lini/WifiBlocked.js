function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniWifiBlocked({
  size,
  ...props
}) {
  let className = 'Component Lini LiniWifiBlocked';

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
    d: "M10.5 16c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1zM13.947 12.968a.5.5 0 01-.431-.246A3.519 3.519 0 0010.5 11a.5.5 0 010-1 4.497 4.497 0 013.876 2.213.5.5 0 01-.43.755zM16.107 10.808a.501.501 0 01-.401-.2A6.451 6.451 0 0010.5 8a.5.5 0 010-1c1.202 0 2.35.276 3.412.82a7.556 7.556 0 012.594 2.189.5.5 0 01-.399.8zM18.243 8.671a.5.5 0 01-.387-.183A9.47 9.47 0 0010.5 5c-.64 0-1.279.064-1.901.19a.499.499 0 11-.198-.98C9.088 4.071 9.794 4 10.5 4c3.162 0 6.125 1.405 8.13 3.855a.501.501 0 01-.386.817zM4.5 5C2.019 5 0 7.019 0 9.5S2.019 14 4.5 14 9 11.981 9 9.5 6.981 5 4.5 5zm0 1c.963 0 1.836.391 2.47 1.023l-5.541 4.155A3.47 3.47 0 011 9.5C1 7.57 2.57 6 4.5 6zm0 7a3.489 3.489 0 01-2.47-1.023l5.541-4.155C7.844 8.32 8 8.892 8 9.5 8 11.43 6.43 13 4.5 13z"
  })));
}
LiniWifiBlocked.propTypes = {
  size: PropTypes.number.isRequired
};