function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniTrophy2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniTrophy2';

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
    d: "M18.897 3.196A.502.502 0 0018.5 3h-2.548A25.46 25.46 0 0016 1.5a.5.5 0 00-.5-.5H4.499a.5.5 0 00-.5.497c-.002.417.011.925.043 1.503H1.5a.499.499 0 00-.483.63 36.72 36.72 0 001.396 4.062c1.082 2.596 2.138 3.997 3.215 4.261.52 1.568 1.226 3.085 2.164 4.029.47.472.974.782 1.507.925-.446.95-1.162 1.715-2.023 2.145a.5.5 0 00.224.947h5a.5.5 0 00.224-.947c-.861-.43-1.576-1.195-2.023-2.145.833-.223 1.592-.853 2.264-1.88.518-.791.987-1.822 1.399-3.074 1.088-.263 2.148-1.664 3.229-4.262a36.406 36.406 0 001.389-4.063.503.503 0 00-.086-.434zM4.724 9.964c-.449-.632-.915-1.523-1.384-2.648A36.01 36.01 0 012.166 4h1.946c.122 1.462.351 3.215.729 4.998.104.491.227 1.017.371 1.555a4.53 4.53 0 01-.488-.589zM9.034 19c.373-.369.699-.798.966-1.271.267.473.593.902.966 1.271H9.035zM10 16c-.525 0-1.015-.236-1.498-.722-.825-.83-1.49-2.247-2.01-3.895a.363.363 0 00-.021-.066c-.962-3.083-1.42-6.953-1.467-9.316h9.99c-.053 2.181-.442 5.58-1.226 8.463-.084.307-.17.603-.259.886l-.001.004c-.943 3.006-2.175 4.647-3.508 4.647zm6.667-8.684c-.468 1.125-.934 2.015-1.385 2.647a4.44 4.44 0 01-.507.604c.571-2.152.931-4.563 1.103-6.567h1.957a35.421 35.421 0 01-1.169 3.316z"
  })));
}
LiniTrophy2.propTypes = {
  size: PropTypes.number.isRequired
};