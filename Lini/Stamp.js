var React = require('react');

var PropTypes = require('prop-types');

function LiniStamp({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniStamp';

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
    d: "M17.5 20h-16c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h16c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 14h-4.5c-0.542 0-1-0.687-1-1.5v-5.037c1.195-0.693 2-1.986 2-3.463 0-2.206-1.794-4-4-4s-4 1.794-4 4c0 1.478 0.805 2.77 2 3.463v5.037c0 0.813-0.458 1.5-1 1.5h-5.5c-0.827 0-1.5 0.673-1.5 1.5v1c0 0.827 0.673 1.5 1.5 1.5h16c0.827 0 1.5-0.673 1.5-1.5v-1c0-0.827-0.673-1.5-1.5-1.5zM7 4c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zM9 12.5v-4.627c0.32 0.083 0.655 0.127 1 0.127s0.68-0.044 1-0.127v4.627c0 0.562 0.149 1.082 0.401 1.5h-2.802c0.252-0.418 0.401-0.938 0.401-1.5zM18 16.5c0 0.276-0.224 0.5-0.5 0.5h-16c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5h16c0.276 0 0.5 0.224 0.5 0.5v1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 4c-0.055 0-0.112-0.009-0.167-0.029-0.26-0.092-0.397-0.378-0.305-0.638 0.201-0.568 0.737-1.104 1.305-1.305 0.26-0.092 0.546 0.044 0.638 0.305s-0.044 0.546-0.305 0.638c-0.283 0.1-0.595 0.412-0.695 0.695-0.073 0.205-0.265 0.334-0.471 0.334z",
    fill: color
  })));
}

LiniStamp.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniStamp;