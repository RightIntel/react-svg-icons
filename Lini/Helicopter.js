var React = require('react');

var PropTypes = require('prop-types');

function LiniHelicopter({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniHelicopter';

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
    d: "M20 9.5c0-0.652-0.418-1.208-1-1.414v-1.586c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.586c-0.582 0.206-1 0.762-1 1.414s0.418 1.208 1 1.414v1.586c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.586c0.582-0.206 1-0.762 1-1.414zM18.5 10c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M16.975 10.843c-0.087-0.262-0.369-0.405-0.631-0.318l-5.343 1.762v-2.288h5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-5.050c-0.232-1.14-1.242-2-2.45-2h-0.5v-1h6.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-6.5v-0.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v0.5h-6.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h6.5v1h-1.5c-2.481 0-4.5 2.019-4.5 4.5v1c0 1.207 0.86 2.217 2 2.45v1.050h-0.5c-0.276 0-0.5-0.224-0.5-0.5s-0.224-0.5-0.5-0.5-0.5 0.224-0.5 0.5c0 0.827 0.673 1.5 1.5 1.5h7c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.5v-1.050c0.842-0.172 1.531-0.768 1.834-1.554l5.823-1.921c0.262-0.087 0.405-0.369 0.318-0.631zM5.5 8h1.5v2.5c0 0.276-0.224 0.5-0.5 0.5h-4.464c0.243-1.694 1.704-3 3.464-3zM4 16v-1h4v1h-4zM8.5 14h-5c-0.827 0-1.5-0.673-1.5-1.5v-0.5h4.5c0.827 0 1.5-0.673 1.5-1.5v-2.5h0.5c0.827 0 1.5 0.673 1.5 1.5v3c0 0.126-0.016 0.247-0.045 0.364-0.001 0.004-0.002 0.008-0.003 0.011-0.167 0.646-0.755 1.125-1.452 1.125z"
  }, pathProps))));
}

LiniHelicopter.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniHelicopter;