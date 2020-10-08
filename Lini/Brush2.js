var React = require('react');

var PropTypes = require('prop-types');

function LiniBrush2({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniBrush2';

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
    d: "M3.5 17c-0.132 0-0.261-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.26 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.26 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.261-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M18.646 9.439l-8.086-8.086c-0.283-0.283-0.659-0.438-1.061-0.438s-0.778 0.156-1.061 0.438l-5.086 5.086c-0.539 0.539-0.695 1.496-0.354 2.179l1.606 3.211c0.049 0.099 0.058 0.193 0.024 0.265s-0.111 0.127-0.219 0.152c-0.086 0.021-2.129 0.521-3.386 1.778-0.661 0.661-1.025 1.54-1.025 2.475s0.364 1.814 1.025 2.475c0.661 0.661 1.54 1.025 2.475 1.025 0 0-0 0 0 0 0.935 0 1.814-0.364 2.475-1.025 1.257-1.257 1.758-3.3 1.778-3.386 0.021-0.089 0.082-0.239 0.249-0.239 0.053 0 0.11 0.015 0.169 0.045l3.211 1.606c0.238 0.119 0.517 0.182 0.808 0.182 0.523 0 1.035-0.2 1.37-0.535l5.086-5.086c0.585-0.585 0.585-1.536 0-2.121zM12.854 15.939c-0.147 0.147-0.408 0.242-0.663 0.242-0.137 0-0.262-0.026-0.361-0.076l-3.211-1.606c-0.199-0.1-0.407-0.15-0.616-0.15-0.586 0-1.077 0.404-1.221 1.006-0.004 0.018-0.458 1.858-1.513 2.912-0.472 0.472-1.1 0.732-1.768 0.732s-1.296-0.26-1.768-0.732c-0.472-0.472-0.732-1.1-0.732-1.768s0.26-1.296 0.732-1.768c1.055-1.055 2.894-1.509 2.912-1.513 0.404-0.097 0.729-0.353 0.892-0.702s0.15-0.763-0.036-1.135l-1.606-3.211c-0.15-0.299-0.070-0.788 0.166-1.024l0.939-0.939 8.793 8.793-0.939 0.939zM17.939 10.854l-3.439 3.439-8.793-8.793 3.439-3.439c0.094-0.094 0.219-0.145 0.354-0.145s0.26 0.052 0.354 0.145l8.086 8.086c0.195 0.195 0.195 0.512 0 0.707z"
  }, pathProps))));
}

LiniBrush2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBrush2;