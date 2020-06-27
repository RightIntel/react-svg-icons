function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSpotlights({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSpotlights';

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
    d: "M19.581 15.066L13.45 7.877 15.972.665a.499.499 0 00-.843-.5l-4.246 4.703L6.881.176a.5.5 0 00-.847.504l2.577 6.705-8.152 9.029c-.3.329-.458.697-.458 1.087 0 .744.574 1.408 1.615 1.871.912.406 2.115.629 3.385.629s2.473-.223 3.385-.629c.836-.371 1.37-.873 1.548-1.441l1.3-3.718.819 2.132c.11.358.429.814 1.275 1.176.722.309 1.671.48 2.672.48s1.95-.17 2.672-.48c1.156-.495 1.328-1.165 1.328-1.52 0-.226-.07-.579-.419-.934zM14.209 2.675l-1.511 4.321-1.161-1.361 2.672-2.96zm-1.893 5.414l-1.126 3.22-1.426-3.711 1.097-1.215 1.455 1.706zM8.014 3.045l2.193 2.571-.845.936-1.348-3.507zm-.035 15.412C7.192 18.807 6.134 19 5 19s-2.192-.193-2.979-.543C1.391 18.177 1 17.81 1 17.5s.391-.677 1.021-.957C2.808 16.193 3.866 16 5 16s2.192.193 2.979.543c.63.28 1.021.647 1.021.957s-.391.677-1.021.957zm1.462-2.148c-.264-.256-.619-.486-1.056-.68C7.473 15.223 6.27 15 5 15c-.745 0-1.467.077-2.12.223l6.132-6.792 1.667 4.338-1.238 3.54zm3.626-7.339l4.4 5.159A8.225 8.225 0 0015.999 14c-1.001 0-1.95.17-2.672.48-.32.137-.564.288-.751.441l-.833-2.168 1.323-3.783zM16 17c-1.861 0-3-.647-3-1s1.139-1 3-1 3 .647 3 1-1.139 1-3 1z"
  })));
}
LiniSpotlights.propTypes = {
  size: PropTypes.number.isRequired
};