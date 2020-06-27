function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCoolantTemperature({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCoolantTemperature';

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
    d: "M5.5 16c-.618 0-1.18-.281-1.724-.553-.46-.23-.894-.447-1.276-.447-.645 0-1.408.617-1.647.854a.5.5 0 01-.707-.708C.263 15.029 1.326 14 2.5 14c.618 0 1.18.281 1.724.553.46.23.894.447 1.276.447a.5.5 0 010 1zM18.5 16a.5.5 0 01-.353-.146c-.24-.238-1.002-.854-1.647-.854-.382 0-.816.217-1.276.447-.543.272-1.106.553-1.724.553a.5.5 0 010-1c.382 0 .816-.217 1.276-.447.543-.272 1.106-.553 1.724-.553 1.173 0 2.236 1.029 2.354 1.146a.5.5 0 01-.354.853zM14.5 20c-.651 0-1.117-.31-1.527-.584-.335-.223-.624-.416-.973-.416s-.638.193-.973.416c-.411.274-.876.584-1.527.584s-1.119-.311-1.532-.586c-.335-.223-.624-.415-.968-.415s-.633.192-.968.415c-.412.274-.88.586-1.532.586-1.173 0-2.236-1.029-2.354-1.146a.5.5 0 01.706-.708c.239.238 1.002.854 1.647.854.35 0 .641-.194.978-.418.41-.273.876-.583 1.522-.583s1.112.31 1.522.583c.337.224.628.418.978.418.349 0 .638-.193.973-.416.411-.274.876-.584 1.527-.584s1.117.31 1.527.584c.335.223.624.416.973.416.645 0 1.408-.617 1.647-.854a.5.5 0 01.707.708c-.117.117-1.18 1.146-2.354 1.146zM13.5 8a.5.5 0 000-1H11V5h2.5a.5.5 0 000-1H11V1.5C11 .673 10.327 0 9.5 0S8 .673 8 1.5v11c-.623.469-1 1.211-1 2C7 15.878 8.122 17 9.5 17s2.5-1.122 2.5-2.5c0-.789-.377-1.531-1-2V11h2.5a.5.5 0 000-1H11V8h2.5zm-4 8c-.827 0-1.5-.673-1.5-1.5a1.504 1.504 0 01.763-1.307.5.5 0 00.237-.425V1.5a.5.5 0 011 0v11.264a.494.494 0 00.25.436A1.502 1.502 0 019.5 16z"
  })));
}
LiniCoolantTemperature.propTypes = {
  size: PropTypes.number.isRequired
};