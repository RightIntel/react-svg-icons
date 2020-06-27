function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFingersScrollRight({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFingersScrollRight';

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
    d: "M17 8a1.99 1.99 0 00-1.113.339A2.003 2.003 0 0014 7c-.364 0-.706.098-1 .269V2c0-1.103-.897-2-2-2-.871 0-1.614.56-1.887 1.339A2.002 2.002 0 006 3v7.373L4.654 8.04a1.947 1.947 0 00-1.199-.953 1.866 1.866 0 00-1.462.202c-.907.544-1.253 1.774-.77 2.742.03.061.668 1.368 2.66 5.35.938 1.875 1.967 3.216 3.059 3.984.857.603 1.449.634 1.559.634h5c.848 0 1.632-.245 2.331-.73.676-.468 1.259-1.152 1.734-2.033.939-1.743 1.435-4.246 1.435-7.237 0-1.103-.897-2-2-2zm-.315 8.763C16.136 17.784 15.137 19 13.5 19H8.51c-.039-.003-.46-.05-1.095-.525-.633-.474-1.605-1.472-2.638-3.54-2.027-4.054-2.65-5.331-2.656-5.343l-.002-.004c-.251-.503-.073-1.162.389-1.439a.876.876 0 01.685-.095.956.956 0 01.587.472l.006.01 1.561 2.705c.319.583.678.828 1.067.729.39-.099.587-.489.587-1.157V3.001c0-.551.449-1 1-1s1 .449 1 1v6.5a.5.5 0 001 0v-7.5c0-.551.449-1 1-1s1 .449 1 1v7.5a.5.5 0 001 0v-.5c0-.551.449-1 1-1s1 .449 1 1v1.5a.5.5 0 001 0v-.5c0-.551.449-1 1-1s1 .449 1 1c0 2.826-.455 5.165-1.315 6.763z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.354 2.146l-2-2a.5.5 0 00-.707.707l1.146 1.146H14.5a.5.5 0 000 1h2.293l-1.146 1.146a.5.5 0 00.708.707l2-2a.5.5 0 000-.707z"
  })));
}
LiniFingersScrollRight.propTypes = {
  size: PropTypes.number.isRequired
};