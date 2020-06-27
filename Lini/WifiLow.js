function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniWifiLow({
  size,
  ...props
}) {
  let className = 'Component Lini LiniWifiLow';

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
    d: "M10.5 16c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1zM16.107 10.808a.501.501 0 01-.401-.2 6.52 6.52 0 00-1.857-1.68.499.499 0 11.516-.856 7.487 7.487 0 012.141 1.937.5.5 0 01-.399.8zM12.001 8.161a.494.494 0 01-.107-.012 6.596 6.596 0 00-2.787 0 .5.5 0 11-.213-.977 7.6 7.6 0 013.213 0 .5.5 0 01-.106.988zM4.893 10.808a.5.5 0 01-.399-.8 7.499 7.499 0 012.141-1.936.5.5 0 11.516.856 6.53 6.53 0 00-1.857 1.679.499.499 0 01-.401.2zM18.243 8.671a.5.5 0 01-.387-.183 9.608 9.608 0 00-3.081-2.474.5.5 0 11.451-.893 10.461 10.461 0 013.405 2.734.501.501 0 01-.386.817zM12.501 5.2a.492.492 0 01-.1-.01 9.65 9.65 0 00-3.801 0 .499.499 0 11-.198-.98 10.637 10.637 0 014.199 0 .5.5 0 01-.099.99zM2.757 8.671a.5.5 0 01-.386-.817A10.474 10.474 0 015.776 5.12a.501.501 0 01.451.893 9.597 9.597 0 00-3.081 2.474.497.497 0 01-.387.183zM7.053 12.968a.5.5 0 01-.43-.755 4.503 4.503 0 017.752 0 .5.5 0 11-.861.509C12.886 11.66 11.731 11 10.498 11s-2.388.66-3.016 1.722a.5.5 0 01-.431.246z"
  })));
}
LiniWifiLow.propTypes = {
  size: PropTypes.number.isRequired
};