function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFingersScrollVertical({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFingersScrollVertical';

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
    d: "M8 3c0 .412.125.794.339 1.113A2.003 2.003 0 007 6c0 .364.098.706.269 1H2C.897 7 0 7.897 0 9c0 .871.56 1.614 1.339 1.887A2.002 2.002 0 003 14h7.373L8.04 15.346a1.947 1.947 0 00-.953 1.199 1.866 1.866 0 00.202 1.462c.544.907 1.774 1.253 2.742.77.061-.03 1.368-.668 5.35-2.66 1.875-.938 3.216-1.967 3.984-3.059.603-.857.634-1.449.634-1.559v-5c0-.848-.245-1.632-.73-2.331-.468-.676-1.152-1.259-2.033-1.734C15.493 1.495 12.99.999 9.999.999c-1.103 0-2 .897-2 2zm8.763.315C17.784 3.864 19 4.863 19 6.5v4.99c-.003.039-.05.46-.525 1.095-.474.633-1.472 1.605-3.54 2.638-4.054 2.027-5.331 2.65-5.343 2.656l-.004.002c-.503.251-1.162.073-1.439-.389a.876.876 0 01-.095-.685.956.956 0 01.472-.587l.01-.006 2.705-1.561c.583-.319.828-.678.729-1.067-.099-.39-.489-.587-1.157-.587H3.001c-.551 0-1-.449-1-1s.449-1 1-1h6.5a.5.5 0 000-1h-7.5c-.551 0-1-.449-1-1s.449-1 1-1h7.5a.5.5 0 000-1h-.5c-.551 0-1-.449-1-1s.449-1 1-1h1.5a.5.5 0 000-1h-.5c-.551 0-1-.449-1-1s.449-1 1-1c2.826 0 5.165.455 6.763 1.315z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.146 1.646l-2 2a.5.5 0 00.707.707l1.146-1.146V5.5a.5.5 0 001 0V3.207l1.146 1.146a.5.5 0 00.707-.708l-2-2a.5.5 0 00-.707 0zM2 15.5v2.293L.854 16.647a.5.5 0 00-.707.707l2 2a.5.5 0 00.707 0l2-2a.498.498 0 000-.708.5.5 0 00-.707 0l-1.146 1.146v-2.293a.5.5 0 00-1 0z"
  })));
}
LiniFingersScrollVertical.propTypes = {
  size: PropTypes.number.isRequired
};