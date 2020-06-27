function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniVolume({
  size,
  ...props
}) {
  let className = 'Component Lini LiniVolume';

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
    d: "M8.15 3.207c-.247 0-.494.104-.736.309L3.316 6.999H1.5c-.827 0-1.5.673-1.5 1.5v4c0 .827.673 1.5 1.5 1.5h1.816l4.098 3.483c.241.205.489.309.736.309a.796.796 0 00.67-.362c.119-.179.18-.408.18-.68v-12.5c0-.72-.427-1.043-.85-1.043zM1 12.5v-4a.5.5 0 01.5-.5H3v5H1.5a.5.5 0 01-.5-.5zm7 4.169l-4-3.4V7.731l4-3.4v12.338z"
  })));
}
LiniVolume.propTypes = {
  size: PropTypes.number.isRequired
};