function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniTie({
  size,
  ...props
}) {
  let className = 'Component Lini LiniTie';

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
    d: "M12.995 17.426l-1.959-13.14a6.32 6.32 0 00.888-1.045 11.46 11.46 0 00.932-1.624c.18-.397.166-.805-.037-1.121s-.57-.497-1.005-.497H7.189c-.435 0-.802.181-1.005.497s-.217.724-.037 1.121c.015.033.375.823.932 1.624.292.42.585.765.877 1.035L6.008 17.427a.5.5 0 00.217.489l3 2a.5.5 0 00.554 0l3-2a.499.499 0 00.217-.49zM7.056 1.204c-.048-.105-.037-.16-.033-.166S7.072 1 7.188 1h4.625c.116 0 .161.032.165.038s.015.061-.033.166c-.306.676-1.012 1.884-1.719 2.465a.546.546 0 00-.071.056c-.224.17-.446.274-.655.274-.428 0-1.009-.481-1.594-1.319a10.587 10.587 0 01-.85-1.476zM9.5 18.899L7.041 17.26 8.875 4.88c.209.08.418.12.625.12.203 0 .408-.039.613-.116l1.845 12.376-2.459 1.639z"
  })));
}
LiniTie.propTypes = {
  size: PropTypes.number.isRequired
};