function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniTruck({
  size,
  ...props
}) {
  let className = 'Component Lini LiniTruck';

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
    d: "M19.794 13.421l-.004-.021-.001-.003-.399-1.997-.001-.003-.203-1.015c-.155-.775-.896-1.383-1.686-1.383h-4c-.175 0-.343.031-.5.086v-.586c0-.827-.673-1.5-1.5-1.5h-10c-.827 0-1.5.673-1.5 1.5v8c0 .827.673 1.5 1.5 1.5H3c0 1.103.897 2 2 2s2-.897 2-2h5.086c.206.582.762 1 1.414 1h.769a2 2 0 003.462 0h.769c.827 0 1.5-.673 1.5-1.5v-2c0-.579-.092-1.511-.206-2.079zM18.69 13H16v-1h2.49l.2 1zM5 19c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm1.731-2a2 2 0 00-3.462 0H1.5a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5h10a.5.5 0 01.5.5V17H6.731zM16 19c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm2.5-1H18c0-1.103-.897-2-2-2s-2 .897-2 2h-.5a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h4c.314 0 .644.27.706.579l.084.421H15.5a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h3.378c.045.313.082.675.103 1H18.5a.5.5 0 000 1h.5v1.5a.5.5 0 01-.5.5z"
  })));
}
LiniTruck.propTypes = {
  size: PropTypes.number.isRequired
};