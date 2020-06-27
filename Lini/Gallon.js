function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniGallon({
  size,
  ...props
}) {
  let className = 'Component Lini LiniGallon';

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
    d: "M13.471 14.055C13.22 13.679 13 12.952 13 12.5v-1c0-.452.22-1.179.471-1.555l1.445-2.168a.497.497 0 00-.139-.693.5.5 0 00-.693.139l-1.445 2.168c-.213.319-.755.609-1.139.609h-4c-.383 0-.926-.29-1.139-.609L4.916 7.223a.5.5 0 10-.832.554l1.445 2.168C5.78 10.321 6 11.048 6 11.5v1c0 .452-.22 1.179-.471 1.555l-1.445 2.168a.497.497 0 00.139.693.5.5 0 00.693-.139l1.445-2.168C6.574 14.29 7.116 14 7.5 14h4c.383 0 .926.29 1.139.609l1.445 2.168a.498.498 0 00.693.139.5.5 0 00.139-.693l-1.445-2.168zM7.5 13a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-4zM11.5 5h-4C6.673 5 6 4.327 6 3.5S6.673 2 7.5 2h4c.827 0 1.5.673 1.5 1.5S12.327 5 11.5 5zm-4-2a.5.5 0 000 1h4a.5.5 0 000-1h-4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.146 3.939l-.033-.033.439-.439a1.501 1.501 0 000-2.121l-.898-.898C16.371.165 15.995.01 15.593.01s-.778.156-1.061.438l-.439.439-.033-.033C13.573.367 12.688 0 11.999 0h-5c-.688 0-1.574.367-2.061.854L1.852 3.94c-.487.487-.854 1.373-.854 2.061v12.5c0 .827.673 1.5 1.5 1.5h14c.827 0 1.5-.673 1.5-1.5v-12.5c0-.688-.367-1.574-.854-2.061zM15.24 1.154c.094-.094.219-.145.354-.145s.26.052.354.145l.898.898a.5.5 0 010 .707l-.439.439-1.605-1.605.439-.439zM17 18.5a.5.5 0 01-.5.5h-14a.5.5 0 01-.5-.5V6c0-.415.267-1.06.561-1.354L5.647 1.56c.293-.293.939-.561 1.354-.561h5c.415 0 1.06.267 1.354.561l3.086 3.086c.293.293.561.939.561 1.354v12.5z"
  })));
}
LiniGallon.propTypes = {
  size: PropTypes.number.isRequired
};