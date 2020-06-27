function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFilm({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFilm';

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
    d: "M18.5 1h-17a.5.5 0 00-.5.5v18a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-18a.5.5 0 00-.5-.5zM4 7H2V5h2v2zm0 1v2H2V8h2zm0 3v2H2v-2h2zm-2 3h2v2H2v-2zM5 2h10v17H5V2zm11 9h2v2h-2v-2zm0-1V8h2v2h-2zm0-3V5h2v2h-2zm0 7h2v2h-2v-2zm2-10h-2V2h2v2zM4 2v2H2V2h2zM2 17h2v2H2v-2zm14 2v-2h2v2h-2z"
  })));
}
LiniFilm.propTypes = {
  size: PropTypes.number.isRequired
};