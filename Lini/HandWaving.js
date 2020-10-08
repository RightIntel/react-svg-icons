var React = require('react');

var PropTypes = require('prop-types');

function LiniHandWaving({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniHandWaving';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 5c-1.103 0-2-0.897-2-2s0.897-2 2-2c1.103 0 2 0.897 2 2s-0.897 2-2 2zM11 2c-0.551 0-1 0.449-1 1s0.449 1 1 1 1-0.449 1-1-0.449-1-1-1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.499 20c-0.254 0-0.471-0.192-0.497-0.45l-0.491-4.908-1.459-2.918c-0.050-0.099-0.065-0.213-0.043-0.322l0.934-4.672-1.221-0.814c-0.059-0.039-0.109-0.091-0.147-0.151l-2.5-4c-0.146-0.234-0.075-0.543 0.159-0.689s0.543-0.075 0.689 0.159l2.443 3.909 1.41 0.94c0.169 0.112 0.253 0.315 0.213 0.514l-0.966 4.832 1.423 2.847c0.027 0.054 0.044 0.113 0.050 0.174l0.5 5c0.027 0.275-0.173 0.52-0.448 0.547-0.017 0.002-0.034 0.002-0.050 0.002z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 20c-0.058 0-0.118-0.010-0.176-0.032-0.259-0.097-0.39-0.385-0.293-0.644l1.49-3.973 0.493-1.972c0.067-0.268 0.339-0.431 0.606-0.364s0.431 0.338 0.364 0.606l-0.5 2c-0.005 0.018-0.010 0.037-0.017 0.054l-1.5 4c-0.075 0.201-0.266 0.325-0.468 0.325z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 13c-0.194 0-0.379-0.114-0.46-0.303l-1.482-3.458-0.975-1.462c-0.153-0.23-0.091-0.54 0.139-0.693s0.54-0.091 0.693 0.139l1 1.5c0.017 0.025 0.032 0.052 0.044 0.080l1.5 3.5c0.109 0.254-0.009 0.548-0.263 0.657-0.064 0.028-0.131 0.041-0.197 0.041z",
    fill: color
  })));
}

LiniHandWaving.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniHandWaving;