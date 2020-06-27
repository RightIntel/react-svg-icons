function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPipe({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPipe';

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
    d: "M19.854 9.146C19.737 9.029 18.674 8 17.5 8c-2.76 0-5.405 1.961-8.205 4.037a82.484 82.484 0 01-2.23 1.615 3.942 3.942 0 00-.072-.251c-.04-.335-.284-.709-.776-1.194a9.217 9.217 0 00-.675-.599.5.5 0 10-.619.785l.08.064a.62.62 0 00-.002.044c0 .017-.054.132-.309.26-.305.153-.739.24-1.191.24s-.885-.088-1.191-.24c-.256-.128-.309-.243-.309-.26a.678.678 0 00-.002-.046l.07-.054a.5.5 0 10-.601-.799c-.014.011-.346.261-.681.585-.536.519-.786.937-.786 1.314v.036c0 1.028 0 2.582.466 3.903.271.768.673 1.374 1.194 1.799.619.505 1.406.762 2.34.762 1.032 0 2.072-.435 3.275-1.37 1.019-.792 2.032-1.846 3.104-2.962 2.554-2.657 5.449-5.668 9.121-5.668a.5.5 0 00.354-.854zM3.5 14c.61 0 1.192-.123 1.638-.346.266-.133.474-.296.619-.48.129.147.218.271.242.346-.01.312-.256.663-.663.944-.493.341-1.163.536-1.837.536s-1.344-.196-1.837-.536c-.41-.283-.657-.639-.663-.953.018-.076.105-.201.234-.348.146.189.357.356.628.492.446.223 1.027.346 1.638.346zm6.158.975C7.668 17.045 5.789 19 4 19c-1.312 0-2.135-.602-2.591-1.894-.203-.576-.306-1.225-.357-1.85l.043.03c.666.46 1.521.714 2.406.714s1.739-.253 2.406-.714c.113-.078.218-.161.315-.247a4.966 4.966 0 01-.195 1.302.5.5 0 10.948.316c.016-.048.279-.856.245-1.902a70.58 70.58 0 002.672-1.916c2.663-1.975 5.179-3.84 7.609-3.84.186 0 .382.051.573.13-3.396.624-6.044 3.379-8.414 5.845z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 12a.5.5 0 01-.5-.5c0-.924-.405-1.484-.875-2.133-.429-.593-.915-1.265-1.116-2.268-.27-1.349.443-2.235 1.073-3.016.729-.906 1.418-1.761.937-3.444A.5.5 0 113.98.364c.623 2.181-.343 3.382-1.12 4.346-.586.728-1.049 1.303-.871 2.193.158.79.54 1.319.945 1.879.523.724 1.064 1.472 1.064 2.719a.5.5 0 01-.5.5z"
  })));
}
LiniPipe.propTypes = {
  size: PropTypes.number.isRequired
};