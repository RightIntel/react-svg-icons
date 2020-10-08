var React = require('react');

var PropTypes = require('prop-types');

function LiniCli({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniCli';

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
    d: "M18.5 18h-17c-0.827 0-1.5-0.673-1.5-1.5v-13c0-0.827 0.673-1.5 1.5-1.5h17c0.827 0 1.5 0.673 1.5 1.5v13c0 0.827-0.673 1.5-1.5 1.5zM1.5 3c-0.276 0-0.5 0.224-0.5 0.5v13c0 0.276 0.224 0.5 0.5 0.5h17c0.276 0 0.5-0.224 0.5-0.5v-13c0-0.276-0.224-0.5-0.5-0.5h-17z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M3.5 10c-0.162 0-0.32-0.078-0.417-0.223-0.153-0.23-0.091-0.54 0.139-0.693l2.376-1.584-2.376-1.584c-0.23-0.153-0.292-0.464-0.139-0.693s0.464-0.292 0.693-0.139l3 2c0.139 0.093 0.223 0.249 0.223 0.416s-0.084 0.323-0.223 0.416l-3 2c-0.085 0.057-0.182 0.084-0.277 0.084z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M11.5 10h-3c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps))));
}

LiniCli.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCli;