function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniHand({
  size,
  ...props
}) {
  let className = 'Component Lini LiniHand';

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
    d: "M17 4c-.364 0-.706.098-1 .269V3a2.002 2.002 0 00-3.113-1.661C12.613.56 11.871 0 11 0S9.386.56 9.113 1.339A2.002 2.002 0 006 3v7.373L4.654 8.04a1.947 1.947 0 00-1.199-.953 1.866 1.866 0 00-1.462.202c-.907.544-1.253 1.774-.77 2.742.03.061.668 1.368 2.66 5.35.938 1.875 1.967 3.216 3.059 3.984.857.603 1.449.634 1.559.634h5c.851 0 1.642-.277 2.352-.822.667-.513 1.246-1.255 1.72-2.204.934-1.868 1.428-4.452 1.428-7.474v-3.5c0-1.103-.897-2-2-2zm1 5.5c0 2.867-.457 5.296-1.322 7.026C16.114 17.654 15.104 19 13.5 19H8.51c-.039-.003-.46-.05-1.095-.525-.633-.474-1.605-1.472-2.638-3.54-2.027-4.054-2.65-5.331-2.656-5.343l-.002-.004c-.251-.503-.073-1.162.389-1.439a.876.876 0 01.685-.095.956.956 0 01.587.472l.006.01 1.561 2.705c.319.583.678.828 1.067.729.39-.099.587-.489.587-1.157V3c0-.551.449-1 1-1s1 .449 1 1v6.5a.5.5 0 001 0V2c0-.551.449-1 1-1s1 .449 1 1v7.5a.5.5 0 001 0V3c0-.551.449-1 1-1s1 .449 1 1v7.5a.5.5 0 001 0V6c0-.551.449-1 1-1s1 .449 1 1v3.5z"
  })));
}
LiniHand.propTypes = {
  size: PropTypes.number.isRequired
};