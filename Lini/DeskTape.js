var React = require('react');

var PropTypes = require('prop-types');

function LiniDeskTape({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniDeskTape';

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
    d: "M18.659 8.027l0-0.001-11.283-3.782c-0.069-0.025-0.139-0.049-0.21-0.070l-0.007-0.002-0 0c-0.367-0.111-0.756-0.171-1.159-0.171-1.867 0-3.461 1.284-3.888 3.056-0.515-0.036-1.052-0.056-1.612-0.056-0.276 0-0.5 0.224-0.5 0.5 0 1.091 0.264 3.12 0.769 4.887 0.685 2.397 1.604 3.613 2.731 3.613l11.149 0c1.391-0 2.467-1.651 3.126-3.037 0.721-1.518 1.225-3.353 1.225-4.464 0-0.218-0.14-0.406-0.341-0.473zM6 5c0.301 0 0.591 0.045 0.865 0.127l0.175 0.059c1.143 0.424 1.96 1.525 1.96 2.814 0 0.252-0.031 0.5-0.092 0.739-0.3-0.131-0.613-0.261-0.939-0.387 0.020-0.115 0.031-0.233 0.031-0.352 0-1.103-0.897-2-2-2-0.504 0-0.985 0.188-1.355 0.529-0.232 0.214-0.408 0.476-0.516 0.765-0.325-0.055-0.66-0.103-1.006-0.144 0.368-1.255 1.527-2.15 2.878-2.15zM5.14 7.492c0.176-0.295 0.499-0.492 0.86-0.492 0.551 0 1 0.449 1 1 0 0.002-0 0.004-0 0.005-0.578-0.19-1.196-0.365-1.86-0.513zM16.872 12.534c-0.723 1.521-1.574 2.466-2.222 2.466l-0.005-0c-0.001 0-0.002 0-0.004 0l-11.141-0c-0.351 0-0.678-0.4-0.89-0.736-0.321-0.508-0.617-1.232-0.879-2.152-0.404-1.413-0.649-3.040-0.714-4.107 0.49 0.011 0.96 0.037 1.41 0.076 0.013 0.002 0.026 0.005 0.039 0.007 0.021 0.002 0.043 0.003 0.064 0.003 0.649 0.060 1.259 0.148 1.833 0.257 0.031 0.009 0.063 0.015 0.097 0.018 0.988 0.193 1.872 0.45 2.676 0.738 0.029 0.014 0.059 0.024 0.089 0.032 0.63 0.229 1.212 0.478 1.757 0.731 0.005 0.003 0.010 0.006 0.016 0.008 0.003 0.001 0.006 0.002 0.009 0.003 0.56 0.26 1.081 0.524 1.576 0.774 1.427 0.723 2.659 1.347 3.918 1.347 1.16 0 2.202-0.41 3.048-1.194-0.185 0.582-0.416 1.181-0.677 1.728zM17.22 9.705c-0.727 0.86-1.642 1.295-2.72 1.295-1.020 0-2.1-0.547-3.466-1.239-0.377-0.191-0.778-0.394-1.205-0.599 0.114-0.375 0.172-0.764 0.172-1.162 0-0.729-0.196-1.413-0.538-2.002l8.36 2.802c-0.131 0.253-0.327 0.581-0.601 0.905z"
  }, pathProps))));
}

LiniDeskTape.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniDeskTape;