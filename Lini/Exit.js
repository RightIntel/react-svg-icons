var React = require('react');

var PropTypes = require('prop-types');

function LiniExit({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniExit';

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
    d: "M11.5 8c0.276 0 0.5-0.224 0.5-0.5v-4c0-0.827-0.673-1.5-1.5-1.5h-9c-0.827 0-1.5 0.673-1.5 1.5v12c0 0.746 0.537 1.56 1.222 1.853l5.162 2.212c0.178 0.076 0.359 0.114 0.532 0.114 0.213-0 0.416-0.058 0.589-0.172 0.314-0.207 0.495-0.575 0.495-1.008v-1.5h2.5c0.827 0 1.5-0.673 1.5-1.5v-4c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v4c0 0.276-0.224 0.5-0.5 0.5h-2.5v-9.5c0-0.746-0.537-1.56-1.222-1.853l-3.842-1.647h7.564c0.276 0 0.5 0.224 0.5 0.5v4c0 0.276 0.224 0.5 0.5 0.5zM6.384 5.566c0.322 0.138 0.616 0.584 0.616 0.934v12c0 0.104-0.028 0.162-0.045 0.173s-0.081 0.014-0.177-0.027l-5.162-2.212c-0.322-0.138-0.616-0.583-0.616-0.934v-12c0-0.079 0.018-0.153 0.051-0.22l5.333 2.286z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M18.354 9.146l-3-3c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l2.146 2.146h-6.293c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h6.293l-2.146 2.146c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l3-3c0.195-0.195 0.195-0.512 0-0.707z"
  }, pathProps))));
}

LiniExit.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniExit;