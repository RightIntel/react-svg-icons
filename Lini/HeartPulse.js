var React = require('react');

var PropTypes = require('prop-types');

function LiniHeartPulse({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniHeartPulse';

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
    d: "M9.5 19c-0.084 0-0.167-0.021-0.243-0.063-0.116-0.065-2.877-1.611-5.369-4.082-0.196-0.194-0.197-0.511-0.003-0.707s0.511-0.197 0.707-0.003c1.979 1.962 4.186 3.346 4.908 3.776 0.723-0.431 2.932-1.817 4.908-3.776 0.196-0.194 0.513-0.193 0.707 0.003s0.193 0.513-0.003 0.707c-2.493 2.471-5.253 4.017-5.369 4.082-0.076 0.042-0.159 0.063-0.243 0.063z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M1.279 11c-0.188 0-0.368-0.106-0.453-0.287-0.548-1.165-0.826-2.33-0.826-3.463 0-2.895 2.355-5.25 5.25-5.25 0.98 0 2.021 0.367 2.931 1.034 0.532 0.39 0.985 0.86 1.319 1.359 0.334-0.499 0.787-0.969 1.319-1.359 0.91-0.667 1.951-1.034 2.931-1.034 2.895 0 5.25 2.355 5.25 5.25 0 1.133-0.278 2.298-0.826 3.463-0.118 0.25-0.415 0.357-0.665 0.24s-0.357-0.415-0.24-0.665c0.485-1.031 0.731-2.053 0.731-3.037 0-2.343-1.907-4.25-4.25-4.25-1.703 0-3.357 1.401-3.776 2.658-0.068 0.204-0.259 0.342-0.474 0.342s-0.406-0.138-0.474-0.342c-0.419-1.257-2.073-2.658-3.776-2.658-2.343 0-4.25 1.907-4.25 4.25 0 0.984 0.246 2.006 0.731 3.037 0.118 0.25 0.010 0.548-0.24 0.665-0.069 0.032-0.141 0.048-0.212 0.048z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M10.515 15c-0.005 0-0.009-0-0.013-0-0.202-0.004-0.569-0.109-0.753-0.766l-1.217-4.334-0.807 3.279c-0.158 0.643-0.525 0.778-0.73 0.8s-0.592-0.027-0.889-0.62l-0.606-1.211c-0.029-0.058-0.056-0.094-0.076-0.117-0.003 0.004-0.007 0.009-0.011 0.015-0.37 0.543-1.192 0.953-1.913 0.953h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.421 0 0.921-0.272 1.087-0.516 0.223-0.327 0.547-0.501 0.891-0.478 0.374 0.025 0.708 0.279 0.917 0.696l0.445 0.89 0.936-3.803c0.158-0.64 0.482-0.779 0.726-0.783s0.572 0.125 0.751 0.76l1.284 4.576 1.178-3.608c0.205-0.628 0.582-0.736 0.788-0.745s0.59 0.068 0.847 0.677l0.724 1.719c0.136 0.322 0.578 0.616 0.927 0.616h1.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-1.5c-0.747 0-1.559-0.539-1.849-1.228l-0.592-1.406-1.274 3.9c-0.207 0.634-0.566 0.733-0.771 0.733z"
  }, pathProps))));
}

LiniHeartPulse.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniHeartPulse;