var React = require('react');

var PropTypes = require('prop-types');

function LiniBaby({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniBaby';

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
    d: "M13.5 11c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5c0 0.827-0.673 1.5-1.5 1.5zM13.5 9c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M6.5 11c-0.827 0-1.5-0.669-1.5-1.491s0.673-1.491 1.5-1.491 1.5 0.669 1.5 1.491c0 0.822-0.673 1.491-1.5 1.491zM6.5 9.018c-0.276 0-0.5 0.22-0.5 0.491s0.224 0.491 0.5 0.491 0.5-0.22 0.5-0.491-0.224-0.491-0.5-0.491z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10 16c-1.672 0-3.226-0.831-4.158-2.222-0.154-0.229-0.092-0.54 0.137-0.694s0.54-0.092 0.694 0.137c0.745 1.113 1.989 1.778 3.327 1.778s2.581-0.665 3.327-1.778c0.154-0.229 0.464-0.291 0.694-0.137s0.291 0.464 0.137 0.694c-0.931 1.391-2.486 2.222-4.158 2.222z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M18.419 7.815c-0.668-1.766-1.889-3.288-3.467-4.331 0.031-0.251 0.054-0.579 0.048-0.992-0.016-1.051-0.178-1.538-0.196-1.59-0.138-0.393-0.427-0.689-0.792-0.813s-0.774-0.065-1.123 0.162l-1.726 1.123c-0.328-0.235-0.729-0.374-1.163-0.374s-0.835 0.139-1.163 0.374l-1.726-1.123c-0.349-0.227-0.758-0.286-1.123-0.162s-0.653 0.42-0.792 0.813c-0.018 0.052-0.18 0.539-0.196 1.59-0.006 0.413 0.016 0.742 0.048 0.992-1.578 1.042-2.799 2.565-3.467 4.331-0.993 0.755-1.581 1.934-1.581 3.185s0.588 2.43 1.58 3.185c0.63 1.666 1.729 3.094 3.186 4.137 1.533 1.098 3.342 1.678 5.234 1.678s3.701-0.58 5.234-1.678c1.457-1.043 2.556-2.471 3.186-4.137 0.993-0.755 1.58-1.934 1.58-3.185s-0.588-2.43-1.581-3.185zM13.434 1.089c0.092-0.060 0.183-0.079 0.256-0.054s0.133 0.094 0.169 0.195c0.009 0.028 0.127 0.425 0.141 1.277 0.013 0.833-0.109 1.228-0.119 1.26-0.042 0.11-0.118 0.191-0.214 0.227-0.097 0.037-0.209 0.026-0.315-0.030l-1.366-0.727c0.009-0.078 0.015-0.157 0.015-0.237 0-0.305-0.069-0.594-0.191-0.853l1.626-1.058zM10 2c0.551 0 1 0.449 1 1s-0.449 1-1 1c-0.551 0-1-0.449-1-1s0.449-1 1-1zM6 2.508c0.013-0.853 0.132-1.249 0.141-1.277 0.036-0.101 0.096-0.17 0.169-0.195s0.164-0.006 0.256 0.054l1.626 1.058c-0.123 0.259-0.191 0.548-0.191 0.853 0 0.080 0.005 0.159 0.015 0.237l-1.366 0.727c-0.106 0.056-0.218 0.067-0.315 0.030-0.096-0.036-0.172-0.117-0.214-0.227-0.010-0.031-0.132-0.426-0.119-1.26zM17.716 13.461c-0.085 0.059-0.149 0.144-0.184 0.241-1.137 3.169-4.164 5.298-7.532 5.298s-6.395-2.129-7.532-5.298c-0.035-0.097-0.099-0.182-0.184-0.241-0.804-0.562-1.284-1.482-1.284-2.461s0.48-1.899 1.284-2.461c0.085-0.059 0.149-0.144 0.184-0.241 0.552-1.54 1.575-2.88 2.908-3.827 0.155 0.207 0.363 0.367 0.603 0.458 0.151 0.057 0.311 0.086 0.472 0.086 0.227 0 0.457-0.057 0.667-0.168l1.265-0.673c0.364 0.5 0.953 0.826 1.617 0.826s1.254-0.326 1.618-0.826l1.265 0.673c0.21 0.112 0.439 0.168 0.667 0.168 0.161 0 0.321-0.028 0.472-0.086 0.24-0.091 0.448-0.251 0.603-0.458 1.333 0.947 2.356 2.287 2.908 3.827 0.035 0.097 0.099 0.182 0.184 0.241 0.804 0.562 1.284 1.482 1.284 2.461s-0.48 1.899-1.284 2.461z"
  }, pathProps))));
}

LiniBaby.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBaby;