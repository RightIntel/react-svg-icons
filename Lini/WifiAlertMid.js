function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniWifiAlertMid({
  size,
  ...props
}) {
  let className = 'Component Lini LiniWifiAlertMid';

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
    d: "M10.5 16c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1zM18.243 8.671a.5.5 0 01-.387-.183 9.608 9.608 0 00-3.081-2.474.5.5 0 11.451-.893 10.461 10.461 0 013.405 2.734.501.501 0 01-.386.817zM12.501 5.2a.492.492 0 01-.1-.01 9.65 9.65 0 00-3.801 0 .499.499 0 11-.198-.98 10.637 10.637 0 014.199 0 .5.5 0 01-.099.99zM4.5 14C2.019 14 0 11.981 0 9.5S2.019 5 4.5 5 9 7.019 9 9.5 6.981 14 4.5 14zm0-8C2.57 6 1 7.57 1 9.5S2.57 13 4.5 13 8 11.43 8 9.5 6.43 6 4.5 6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.5 10a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5zM4.5 12a.498.498 0 01-.5-.5.498.498 0 01.5-.5.5.5 0 010 1zM13.947 12.968a.5.5 0 01-.431-.246A3.519 3.519 0 0010.5 11a.5.5 0 010-1 4.497 4.497 0 013.876 2.213.5.5 0 01-.43.755zM16.107 10.808a.501.501 0 01-.401-.2A6.451 6.451 0 0010.5 8a.5.5 0 010-1c1.202 0 2.35.276 3.412.82a7.556 7.556 0 012.594 2.189.5.5 0 01-.399.8z"
  })));
}
LiniWifiAlertMid.propTypes = {
  size: PropTypes.number.isRequired
};