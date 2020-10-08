var React = require('react');

var PropTypes = require('prop-types');

function LiniGas({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniGas';

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
  }, /*#__PURE__*/React.createElement("path", _extends({
    d: "M10.5 20h-9c-0.827 0-1.5-0.673-1.5-1.5v-14c0-0.827 0.673-1.5 1.5-1.5h9c0.827 0 1.5 0.673 1.5 1.5v14c0 0.827-0.673 1.5-1.5 1.5zM1.5 4c-0.276 0-0.5 0.224-0.5 0.5v14c0 0.276 0.224 0.5 0.5 0.5h9c0.276 0 0.5-0.224 0.5-0.5v-14c0-0.276-0.224-0.5-0.5-0.5h-9z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M8.5 10h-5c-0.827 0-1.5-0.673-1.5-1.5v-2c0-0.827 0.673-1.5 1.5-1.5h5c0.827 0 1.5 0.673 1.5 1.5v2c0 0.827-0.673 1.5-1.5 1.5zM3.5 6c-0.276 0-0.5 0.224-0.5 0.5v2c0 0.276 0.224 0.5 0.5 0.5h5c0.276 0 0.5-0.224 0.5-0.5v-2c0-0.276-0.224-0.5-0.5-0.5h-5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M18.146 3.939l-2.293-2.293c-0-0-0-0-0-0s-0-0-0-0l-0.293-0.293c-0.46-0.46-1.323-0.904-1.965-1.011l-2.014-0.336c-0.272-0.045-0.53 0.139-0.575 0.411s0.139 0.53 0.411 0.575l2.014 0.336c0.414 0.069 1.025 0.374 1.36 0.673l-0.438 0.438c-0.585 0.585-0.585 1.536 0 2.121l0.586 0.586c0.283 0.283 0.659 0.438 1.061 0.438s0.778-0.156 1.061-0.438l0.437-0.437c0.27 0.315 0.503 0.903 0.503 1.29v9.5c0 0.827-0.673 1.5-1.5 1.5s-1.5-0.673-1.5-1.5v-7c0-0.827-0.673-1.5-1.5-1.5h-0.5v-0.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v2c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.5h0.5c0.276 0 0.5 0.224 0.5 0.5v7c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5v-9.5c0-0.688-0.367-1.574-0.854-2.061zM16 4.585c-0.134 0-0.26-0.052-0.354-0.145l-0.586-0.586c-0.195-0.195-0.195-0.512 0-0.707l0.439-0.439 1.293 1.293-0.439 0.439c-0.094 0.094-0.219 0.145-0.354 0.145z"
  }, pathProps))));
}

LiniGas.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniGas;