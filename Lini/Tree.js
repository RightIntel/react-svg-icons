var React = require('react');

var PropTypes = require('prop-types');

function LiniTree({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniTree';

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
    d: "M16.975 6.407c-0.141-1.689-0.884-3.256-2.113-4.443-1.312-1.267-3.038-1.964-4.862-1.964-1.87 0-3.628 0.728-4.95 2.050-1.181 1.181-1.887 2.71-2.025 4.355-1.823 0.784-3.025 2.589-3.025 4.595 0 2.757 2.243 5 5 5 0.864 0 1.716-0.224 2.464-0.648 0.1-0.057 0.197-0.117 0.292-0.18 0.635 1.562 0.142 2.387-0.297 3.122-0.236 0.396-0.46 0.769-0.46 1.206 0 0.276 0.224 0.5 0.5 0.5h5c0.276 0 0.5-0.224 0.5-0.5 0-0.437-0.223-0.81-0.46-1.206-0.439-0.735-0.931-1.559-0.298-3.12 0.803 0.532 1.756 0.826 2.757 0.826 2.757 0 5-2.243 5-5 0-2.056-1.247-3.826-3.025-4.593zM8.204 19c0.036-0.063 0.075-0.127 0.114-0.193 0.502-0.839 1.251-2.094 0.241-4.296 0.177-0.179 0.34-0.371 0.488-0.575 0.315 0.043 0.634 0.064 0.953 0.064s0.637-0.022 0.952-0.064c0.149 0.206 0.313 0.399 0.488 0.577-1.008 2.201-0.259 3.455 0.242 4.294 0.039 0.066 0.078 0.13 0.114 0.193h-3.592zM15 15c-1.384 0-2.651-0.701-3.389-1.874-0.001-0.001-0.002-0.002-0.002-0.003-0.006-0.009-0.012-0.018-0.018-0.026-0.004-0.005-0.007-0.011-0.011-0.016-0.005-0.006-0.010-0.012-0.015-0.018-0.006-0.007-0.012-0.014-0.018-0.021-0.002-0.002-0.005-0.004-0.007-0.007-0.068-0.067-0.152-0.112-0.242-0.132-0.003-0.001-0.005-0.001-0.008-0.001-0.013-0.003-0.027-0.005-0.040-0.007-0.003-0-0.006-0-0.008-0.001-0.014-0.001-0.027-0.003-0.041-0.003-0.002-0-0.004 0-0.006 0-0.015-0-0.029 0-0.044 0.001-0.001 0-0.003 0-0.004 0.001-0.015 0.001-0.031 0.003-0.046 0.006-0.001 0-0.001 0-0.001 0-0.678 0.125-1.391 0.132-2.073 0.021-0.224-0.1-0.493-0.022-0.627 0.192-0.001 0.001-0.001 0.002-0.002 0.003s-0.001 0.001-0.001 0.002c-0.737 1.179-2.005 1.882-3.394 1.882-2.206 0-4-1.794-4-4 0-1.452 0.789-2.774 2.020-3.476 0.027 0.368 0.083 0.734 0.167 1.091 0.054 0.23 0.26 0.385 0.486 0.385 0.038 0 0.077-0.004 0.115-0.013 0.269-0.063 0.435-0.333 0.372-0.602-0.107-0.451-0.161-0.917-0.161-1.385 0-3.308 2.692-6 6-6 3.009 0 5.494 2.185 5.931 5.087-0.302-0.057-0.613-0.087-0.931-0.087-0.185 0-0.372 0.010-0.555 0.031-0.274 0.030-0.472 0.277-0.442 0.552s0.278 0.472 0.552 0.442c0.147-0.016 0.297-0.024 0.445-0.024 2.206 0 4 1.794 4 4s-1.794 4-4 4z"
  }, pathProps))));
}

LiniTree.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniTree;