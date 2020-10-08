var React = require('react');

var PropTypes = require('prop-types');

function LiniPhoneBubble({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniPhoneBubble';

  if (props.className) {
    className += ' ' + props.className;
  }

  const pathProps = {};

  if (color) {
    pathProps.fill = color;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M12.738 19c-1.415 0-2.918-0.4-4.468-1.189-1.425-0.726-2.832-1.764-4.070-3.003s-2.275-2.648-2.999-4.074c-0.788-1.551-1.187-3.054-1.187-4.469 0-0.914 0.778-1.766 1.241-2.193 0.562-0.517 1.385-1.070 2.011-1.070 0.329 0 0.689 0.197 1.166 0.639 0.34 0.315 0.722 0.741 1.103 1.232 0.326 0.419 1.388 1.842 1.388 2.577 0 0.649-0.691 1.074-1.423 1.523-0.249 0.153-0.507 0.311-0.701 0.46-0.167 0.128-0.234 0.209-0.261 0.247 0.752 1.821 2.963 4.033 4.785 4.785 0.039-0.026 0.12-0.094 0.247-0.261 0.148-0.194 0.307-0.452 0.46-0.701 0.45-0.732 0.875-1.423 1.524-1.423 0.735 0 2.158 1.062 2.577 1.388 0.491 0.382 0.917 0.763 1.232 1.103 0.442 0.477 0.639 0.837 0.639 1.166 0 0.626-0.552 1.452-1.069 2.015-0.427 0.466-1.28 1.248-2.194 1.248zM3.249 4.002c-0.207 0.015-0.762 0.294-1.316 0.805-0.558 0.514-0.919 1.086-0.919 1.458 0 2.466 1.456 5.396 3.894 7.837s5.366 3.899 7.831 3.899c0.371 0 0.943-0.362 1.457-0.923 0.511-0.558 0.79-1.114 0.805-1.322-0.052-0.162-0.481-0.727-1.543-1.543-0.968-0.744-1.679-1.091-1.883-1.129-0.173 0.099-0.509 0.645-0.692 0.943-0.458 0.745-0.891 1.449-1.556 1.449-0.111 0-0.221-0.021-0.326-0.063-2.094-0.838-4.572-3.315-5.41-5.41-0.112-0.28-0.133-0.715 0.401-1.199 0.268-0.242 0.632-0.466 0.985-0.683 0.298-0.183 0.845-0.519 0.943-0.692-0.038-0.205-0.385-0.915-1.129-1.883-0.816-1.062-1.381-1.491-1.543-1.543z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9.5 10c-0.202 0-0.385-0.122-0.462-0.309s-0.035-0.402 0.108-0.545c0.817-0.817 1.077-1.318 1.159-1.55-0.844-0.72-1.306-1.633-1.306-2.597 0-1.103 0.596-2.127 1.678-2.884 1.028-0.719 2.385-1.116 3.822-1.116s2.795 0.396 3.822 1.116c1.082 0.757 1.678 1.782 1.678 2.884s-0.596 2.127-1.678 2.884c-1.028 0.719-2.385 1.116-3.822 1.116-0.602 0-1.19-0.069-1.753-0.206-0.513 0.349-1.906 1.206-3.247 1.206zM14.5 2c-1.234 0-2.388 0.332-3.249 0.935-0.807 0.565-1.251 1.298-1.251 2.065 0 0.727 0.405 1.432 1.139 1.984 0.090 0.068 0.155 0.164 0.183 0.273 0.050 0.19 0.063 0.642-0.478 1.434 0.663-0.269 1.247-0.646 1.501-0.838 0.125-0.094 0.286-0.125 0.437-0.083 0.545 0.152 1.123 0.23 1.718 0.23 1.234 0 2.388-0.332 3.249-0.935 0.807-0.565 1.251-1.298 1.251-2.065s-0.444-1.5-1.251-2.065c-0.861-0.603-2.015-0.935-3.249-0.935z"
  }, pathProps))));
}

LiniPhoneBubble.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPhoneBubble;