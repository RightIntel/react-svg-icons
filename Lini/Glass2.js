function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniGlass2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniGlass2';

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
    d: "M16.5 0h-3c-.783 0-1.536.597-1.716 1.359l-1.321 5.612c-.314.019-.637.029-.964.029-1.219 0-2.377-.135-3.261-.381s-1.176-.516-1.23-.608l-.003-.018c.046-.086.332-.363 1.233-.613.884-.245 2.042-.381 3.261-.381a.5.5 0 000-1c-1.383 0-2.689.163-3.679.46-.511.153-.921.338-1.217.548-.499.354-.604.735-.604.992 0 .075.009.161.034.253L6 18.548c.028.465.458.839 1.278 1.113.645.215 1.454.338 2.221.338.763 0 1.568-.123 2.209-.339.807-.271 1.24-.641 1.288-1.1l1.969-12.309a.966.966 0 00.034-.253v-.017-.007c-.013-.546-.455-.997-1.314-1.34a.5.5 0 00-.371.929c.477.19.646.364.68.429l-.003.018c-.054.091-.346.362-1.23.608a9.59 9.59 0 01-1.246.249l1.242-5.281c.072-.308.426-.588.742-.588h3a.5.5 0 000-1zm-3.321 7.54c.22-.066.421-.138.602-.215l-1.773 11.079c-.177.192-1.168.597-2.509.597-.582 0-1.188-.08-1.706-.226-.498-.14-.731-.292-.801-.358L5.217 7.325c.181.077.382.149.602.215.99.297 2.296.46 3.679.46.245 0 .487-.005.725-.015L9.514 11h-.016c-1.501 0-2.361-.372-2.502-.545a.5.5 0 00-.998.045c0 .993 1.614 1.46 3.281 1.497l-1.268 5.388a.5.5 0 10.973.228l1.329-5.649c1.435-.125 2.684-.592 2.684-1.465a.5.5 0 00-.998-.045c-.104.127-.595.361-1.443.476l.712-3.025a10.76 10.76 0 001.908-.367z"
  })));
}
LiniGlass2.propTypes = {
  size: PropTypes.number.isRequired
};