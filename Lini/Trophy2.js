var React = require('react');

var PropTypes = require('prop-types');

function LiniTrophy2({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniTrophy2';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18.897 3.196c-0.095-0.123-0.241-0.196-0.397-0.196h-2.548c0.033-0.553 0.048-1.059 0.048-1.5 0-0.276-0.224-0.5-0.5-0.5h-11.001c-0.275 0-0.498 0.222-0.5 0.497-0.002 0.417 0.011 0.925 0.043 1.503h-2.542c-0.156 0-0.302 0.072-0.397 0.196s-0.126 0.284-0.086 0.434c0.022 0.083 0.559 2.055 1.396 4.062 1.082 2.596 2.138 3.997 3.215 4.261 0.52 1.568 1.226 3.085 2.164 4.029 0.47 0.472 0.974 0.782 1.507 0.925-0.446 0.95-1.162 1.715-2.023 2.145-0.207 0.104-0.316 0.336-0.263 0.562s0.255 0.385 0.487 0.385h5c0.232 0 0.433-0.159 0.487-0.385s-0.056-0.458-0.263-0.562c-0.861-0.43-1.576-1.195-2.023-2.145 0.833-0.223 1.592-0.853 2.264-1.88 0.518-0.791 0.987-1.822 1.399-3.074 1.088-0.263 2.148-1.664 3.229-4.262 0.835-2.008 1.367-3.98 1.389-4.063 0.040-0.15 0.008-0.311-0.086-0.434zM4.724 9.964c-0.449-0.632-0.915-1.523-1.384-2.648-0.534-1.28-0.95-2.574-1.174-3.316h1.946c0.122 1.462 0.351 3.215 0.729 4.998 0.104 0.491 0.227 1.017 0.371 1.555-0.158-0.157-0.322-0.355-0.488-0.589zM9.034 19c0.373-0.369 0.699-0.798 0.966-1.271 0.267 0.473 0.593 0.902 0.966 1.271h-1.931zM10 16c-0.525 0-1.015-0.236-1.498-0.722-0.825-0.83-1.49-2.247-2.010-3.895-0.005-0.023-0.012-0.045-0.021-0.066-0.962-3.083-1.42-6.953-1.467-9.316h9.99c-0.053 2.181-0.442 5.58-1.226 8.463-0.084 0.307-0.17 0.603-0.259 0.886-0 0.001-0.001 0.002-0.001 0.004-0.943 3.006-2.175 4.647-3.508 4.647zM16.667 7.316c-0.468 1.125-0.934 2.015-1.385 2.647-0.172 0.242-0.343 0.444-0.507 0.604 0.571-2.152 0.931-4.563 1.103-6.567h1.957c-0.222 0.742-0.636 2.036-1.169 3.316z",
    fill: color
  })));
}

LiniTrophy2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniTrophy2;