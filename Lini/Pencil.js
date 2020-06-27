function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPencil({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPencil';

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
    d: "M19.104.896C18.542.334 17.795.025 17 .025s-1.542.309-2.104.871l-12.75 12.75a.496.496 0 00-.116.183l-2 5.5a.5.5 0 00.641.64l5.5-2a.51.51 0 00.183-.116l12.75-12.75c.562-.562.871-1.309.871-2.104s-.309-1.542-.871-2.104zM5.725 17.068l-4.389 1.596 1.596-4.389L14 3.207 16.793 6 5.725 17.068zM18.396 4.396l-.896.896-2.793-2.793.896-.896c.373-.373.869-.578 1.396-.578s1.023.205 1.396.578.578.869.578 1.396-.205 1.023-.578 1.396z"
  })));
}
LiniPencil.propTypes = {
  size: PropTypes.number.isRequired
};