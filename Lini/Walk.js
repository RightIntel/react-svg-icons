var React = require('react');

var PropTypes = require('prop-types');

function LiniWalk({
  size,
  ...props
}) {
  var className = 'Component Lini LiniWalk';

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
    d: "M9 4c-1.103 0-2-0.897-2-2s0.897-2 2-2c1.103 0 2 0.897 2 2s-0.897 2-2 2zM9 1c-0.551 0-1 0.449-1 1s0.449 1 1 1 1-0.449 1-1-0.449-1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 20c-0.198 0-0.386-0.119-0.464-0.314l-1.942-4.856-2.871-1.914c-0.16-0.107-0.245-0.296-0.218-0.487l0.865-6.055-2.941 1.47-0.944 3.777c-0.067 0.268-0.338 0.431-0.606 0.364s-0.431-0.338-0.364-0.606l1-4c0.035-0.142 0.131-0.261 0.261-0.326l4-2c0.166-0.083 0.365-0.067 0.516 0.042s0.229 0.292 0.203 0.476l-0.955 6.688 2.738 1.825c0.084 0.056 0.149 0.136 0.187 0.23l2 5c0.103 0.256-0.022 0.547-0.279 0.65-0.061 0.024-0.124 0.036-0.186 0.036z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 20c-0.095 0-0.192-0.027-0.277-0.084-0.23-0.153-0.292-0.464-0.139-0.693l1.983-2.974 0.986-1.972c0.123-0.247 0.424-0.347 0.671-0.224s0.347 0.424 0.224 0.671l-1 2c-0.009 0.019-0.020 0.037-0.031 0.054l-2 3c-0.096 0.144-0.255 0.223-0.417 0.223z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 10c-0.040 0-0.081-0.005-0.122-0.015l-4-1c-0.088-0.022-0.168-0.067-0.232-0.132l-1-1c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l0.902 0.902 3.866 0.966c0.268 0.067 0.431 0.338 0.364 0.606-0.057 0.227-0.261 0.379-0.485 0.379z"
  })));
}

LiniWalk.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniWalk;