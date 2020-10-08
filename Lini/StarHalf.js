var React = require('react');

var PropTypes = require('prop-types');

function LiniStarHalf({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniStarHalf';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15.5 19c-0.082 0-0.164-0.020-0.239-0.061l-3-1.636c-0.242-0.132-0.332-0.436-0.2-0.678s0.436-0.332 0.678-0.2l2.098 1.145-0.165-0.987c-0.045-0.272 0.139-0.53 0.411-0.575s0.53 0.139 0.575 0.411l0.333 2c0.031 0.189-0.048 0.379-0.203 0.49-0.086 0.061-0.188 0.093-0.29 0.093z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.833 15c-0.24 0-0.452-0.173-0.493-0.418l-0.333-2c-0.027-0.159 0.025-0.322 0.14-0.436l1-1c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-0.818 0.818 0.291 1.746c0.045 0.272-0.139 0.53-0.411 0.575-0.028 0.005-0.055 0.007-0.083 0.007z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 10c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l0.313-0.313-2.042-0.34c-0.272-0.045-0.456-0.303-0.411-0.575s0.303-0.456 0.575-0.411l3 0.5c0.185 0.031 0.337 0.162 0.394 0.341s0.010 0.374-0.123 0.506l-1 1c-0.098 0.098-0.226 0.147-0.354 0.147z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.501 8.167c-0.027 0-0.055-0.002-0.083-0.007l-1-0.167c-0.158-0.026-0.293-0.127-0.365-0.27l-1-2c-0.123-0.247-0.023-0.547 0.224-0.671s0.547-0.023 0.671 0.224l0.886 1.772 0.749 0.125c0.272 0.045 0.456 0.303 0.411 0.575-0.041 0.244-0.253 0.418-0.493 0.418z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.5 19c-0.102 0-0.204-0.031-0.29-0.093-0.156-0.111-0.235-0.301-0.203-0.49l0.958-5.746-3.818-3.818c-0.132-0.132-0.18-0.328-0.123-0.506s0.209-0.31 0.394-0.341l5.749-0.958 2.386-4.772c0.085-0.169 0.258-0.276 0.447-0.276 0 0 0 0 0 0 0.189 0 0.363 0.107 0.447 0.276l0.5 1c0.123 0.247 0.023 0.547-0.224 0.671s-0.547 0.023-0.671-0.224l-0.053-0.106-2.053 4.106c-0.072 0.143-0.207 0.243-0.365 0.27l-5.042 0.84 3.313 3.313c0.114 0.114 0.166 0.276 0.14 0.436l-0.831 4.987 4.599-2.508c0.149-0.081 0.33-0.081 0.479 0l0.5 0.273c0.242 0.132 0.332 0.436 0.199 0.678s-0.436 0.332-0.678 0.199l-0.261-0.142-5.261 2.869c-0.075 0.041-0.157 0.061-0.239 0.061z",
    fill: color
  })));
}

LiniStarHalf.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniStarHalf;