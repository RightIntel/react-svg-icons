var React = require('react');

var PropTypes = require('prop-types');

function LiniRecycle({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniRecycle';

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
    d: "M10.5 19c-0.183 0-0.36-0.101-0.448-0.277l-1-2c-0.077-0.155-0.069-0.339 0.022-0.486s0.252-0.237 0.425-0.237h4c1.412 0 2.46-0.46 2.951-1.294s0.384-1.974-0.302-3.208l-0.975-1.755c-0.134-0.241-0.047-0.546 0.194-0.68s0.546-0.047 0.68 0.194l0.975 1.755c0.427 0.769 0.67 1.525 0.72 2.245 0.051 0.727-0.094 1.385-0.43 1.956s-0.841 1.017-1.501 1.326c-0.654 0.306-1.432 0.461-2.312 0.461h-3.191l0.638 1.276c0.123 0.247 0.023 0.547-0.224 0.671-0.072 0.036-0.148 0.053-0.223 0.053z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M14.5 8c-0.181 0-0.349-0.098-0.437-0.257l-2.086-3.755c-0.683-1.229-1.563-1.906-2.477-1.906s-1.794 0.677-2.477 1.906l-0.975 1.755c-0.134 0.241-0.438 0.328-0.68 0.194s-0.328-0.438-0.194-0.68l0.975-1.755c0.867-1.561 2.057-2.421 3.351-2.421 0 0-0 0 0 0 1.294 0 2.484 0.86 3.351 2.421l1.626 2.926 0.576-1.152c0.123-0.247 0.424-0.347 0.671-0.224s0.347 0.424 0.224 0.671l-1 2c-0.083 0.166-0.251 0.272-0.436 0.276-0.004 0-0.007 0-0.011 0z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M7.5 17h-2c-0.88 0-1.658-0.155-2.312-0.461-0.66-0.309-1.165-0.755-1.501-1.326s-0.481-1.229-0.43-1.956c0.050-0.72 0.292-1.475 0.72-2.245l1.673-3.012h-1.15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.177 0 0.341 0.094 0.431 0.246s0.092 0.342 0.006 0.496l-2.086 3.755c-0.686 1.234-0.793 2.373-0.302 3.208s1.539 1.294 2.951 1.294h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps))));
}

LiniRecycle.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniRecycle;