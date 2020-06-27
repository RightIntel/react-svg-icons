function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniEyePlus({
  size,
  ...props
}) {
  let className = 'Component Lini LiniEyePlus';

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
    d: "M19.872 9.166c-.047-.053-1.182-1.305-2.956-2.572-1.047-.748-2.1-1.344-3.13-1.773a12.066 12.066 0 00-.844-.315c-1.01-.335-1.997-.505-2.942-.505s-1.932.17-2.943.505a12.066 12.066 0 00-.844.315c-1.03.429-2.083 1.026-3.13 1.773C1.309 7.861.174 9.114.127 9.166a.5.5 0 000 .669c.044.049 1.105 1.22 2.778 2.444.986.721 1.982 1.31 2.958 1.751 1.237.558 2.449.878 3.603.954a.5.5 0 00.065-.998c-2.351-.153-4.57-1.445-6.019-2.501a20.016 20.016 0 01-2.32-1.984 20.102 20.102 0 012.489-2.106 16.19 16.19 0 011.85-1.145 4.988 4.988 0 00-.533 2.251c0 1.239.456 2.427 1.285 3.346a4.99 4.99 0 003.16 1.623.499.499 0 10.11-.994A3.992 3.992 0 015.998 8.5c0-1.188.519-2.299 1.426-3.062C8.246 5.17 9.115 5 9.998 5s1.752.17 2.574.438A3.983 3.983 0 0113.998 8.5c0 .3-.033.6-.099.889a.5.5 0 00.975.221 5.038 5.038 0 00-.409-3.362c.694.365 1.32.768 1.85 1.145a20.13 20.13 0 012.49 2.106c-.161.161-.378.372-.643.613a.5.5 0 10.673.739 15.553 15.553 0 001.035-1.019.5.5 0 000-.669zM17.5 15H16v-1.5a.5.5 0 00-1 0V15h-1.5a.5.5 0 000 1H15v1.5a.5.5 0 001 0V16h1.5a.5.5 0 000-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 20c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5 4.5 2.019 4.5 4.5-2.019 4.5-4.5 4.5zm0-8c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z"
  })));
}
LiniEyePlus.propTypes = {
  size: PropTypes.number.isRequired
};