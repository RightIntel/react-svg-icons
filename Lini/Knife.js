var React = require('react');

var PropTypes = require('prop-types');

function LiniKnife({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniKnife';

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
    d: "M16.5 17c-0.132 0-0.261-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.261 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.261-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M16.5 11h-7.677l1.591-3.413c1.282-2.749 0.088-6.027-2.66-7.309-0.063-0.029-0.128-0.044-0.193-0.047-0.114-0.004-0.225 0.031-0.316 0.098-0.026 0.019-0.050 0.041-0.072 0.065s-0.042 0.051-0.059 0.080c-0.009 0.014-0.017 0.030-0.024 0.045l-6.762 14.501c-0.001 0.003-0.002 0.005-0.003 0.008-0.208 0.448-0.325 0.946-0.325 1.471 0 1.93 1.57 3.5 3.5 3.5h13c1.93 0 3.5-1.57 3.5-3.5v-2c0-1.93-1.57-3.5-3.5-3.5zM16.5 12c1.209 0 2.219 0.862 2.45 2.003-0.632-0.62-1.497-1.003-2.45-1.003h-8.609l0.466-1h8.143zM9.508 7.165l-2.721 5.835h-3.287c-0.433 0-0.848 0.079-1.231 0.224l5.504-11.803c1.931 1.176 2.712 3.648 1.735 5.744zM16.5 19h-13c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5h3.603c0.001 0 0.002 0 0.002 0s0.002-0 0.003-0h9.391c1.378 0 2.5 1.122 2.5 2.5s-1.122 2.5-2.5 2.5z"
  }, pathProps))));
}

LiniKnife.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniKnife;