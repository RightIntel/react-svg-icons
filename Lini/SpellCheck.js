var React = require('react');

var PropTypes = require('prop-types');

function LiniSpellCheck({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniSpellCheck';

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
    d: "M4.5 14c-0.276 0-0.5 0.224-0.5 0.5v0.001c-0.418-0.315-0.938-0.501-1.5-0.501-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5c0.562 0 1.082-0.187 1.5-0.501v0.001c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-4c0-0.276-0.224-0.5-0.5-0.5zM2.5 18c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M8.5 14c-0.562 0-1.082 0.187-1.5 0.501v-4.001c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v8c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.001c0.418 0.315 0.938 0.501 1.5 0.501 1.378 0 2.5-1.122 2.5-2.5s-1.122-2.5-2.5-2.5zM8.5 18c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M14.5 19c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5c0.439 0 0.872 0.116 1.25 0.335 0.239 0.138 0.321 0.444 0.183 0.683s-0.444 0.321-0.683 0.183c-0.227-0.131-0.486-0.2-0.75-0.2-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5c0.264 0 0.523-0.069 0.75-0.2 0.239-0.138 0.545-0.057 0.683 0.182s0.057 0.545-0.182 0.683c-0.379 0.219-0.811 0.335-1.25 0.335z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M11.5 10.5c-0.128 0-0.256-0.049-0.354-0.146l-3-3c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l2.646 2.646 6.646-6.646c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-7 7c-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps))));
}

LiniSpellCheck.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniSpellCheck;