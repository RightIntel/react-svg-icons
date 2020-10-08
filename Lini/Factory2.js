var React = require('react');

var PropTypes = require('prop-types');

function LiniFactory2({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniFactory2';

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
    d: "M18.5 20h-17c-0.407 0-0.78-0.161-1.051-0.453s-0.402-0.677-0.371-1.082l0.846-11.003c0.020-0.261 0.237-0.462 0.499-0.462h2.077c0.252 0 0.465 0.188 0.496 0.438l0.905 7.238 4.342-2.605c0.154-0.093 0.347-0.095 0.504-0.006s0.254 0.255 0.254 0.435v2.117l4.243-2.546c0.154-0.093 0.347-0.095 0.504-0.006s0.254 0.255 0.254 0.435v2.117l4.243-2.546c0.154-0.093 0.347-0.095 0.504-0.006s0.254 0.255 0.254 0.435v6c0 0.827-0.673 1.5-1.5 1.5zM1.886 8l-0.811 10.541c-0.010 0.125 0.029 0.241 0.108 0.326s0.192 0.133 0.317 0.133h17c0.276 0 0.5-0.224 0.5-0.5v-5.117l-4.243 2.546c-0.154 0.093-0.347 0.095-0.504 0.006s-0.254-0.255-0.254-0.435v-2.117l-4.243 2.546c-0.154 0.093-0.347 0.095-0.504 0.006s-0.254-0.255-0.254-0.435v-2.117l-4.243 2.546c-0.145 0.087-0.324 0.095-0.476 0.021s-0.256-0.22-0.277-0.388l-0.945-7.562h-1.173z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M2.5 6c-0.276 0-0.5-0.224-0.5-0.5 0-3.033 2.467-5.5 5.5-5.5 1.201 0 2.343 0.38 3.301 1.1 0.221 0.166 0.265 0.479 0.099 0.7s-0.479 0.265-0.7 0.099c-0.783-0.589-1.717-0.9-2.7-0.9-2.481 0-4.5 2.019-4.5 4.5 0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M15.5 5c-1.201 0-2.343-0.38-3.301-1.1-0.221-0.166-0.265-0.479-0.099-0.7s0.479-0.265 0.7-0.099c0.783 0.589 1.717 0.9 2.7 0.9 1.423 0 2.732-0.652 3.592-1.789 0.167-0.22 0.48-0.264 0.7-0.097s0.264 0.48 0.097 0.7c-0.502 0.664-1.158 1.214-1.898 1.59-0.776 0.395-1.614 0.595-2.491 0.595z"
  }, pathProps))));
}

LiniFactory2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFactory2;