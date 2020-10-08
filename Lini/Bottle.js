var React = require('react');

var PropTypes = require('prop-types');

function LiniBottle({
  size,
  ...props
}) {
  var className = 'Component Lini LiniBottle';

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
    d: "M14 5.5c0-0.723-0.453-1.57-1.055-1.971l-1.062-0.708c0.073-0.087 0.117-0.199 0.117-0.321v-2c0-0.276-0.224-0.5-0.5-0.5h-4c-0.276 0-0.5 0.224-0.5 0.5v2c0 0.122 0.044 0.234 0.117 0.321l-1.062 0.708c-0.601 0.401-1.055 1.248-1.055 1.971v1c0 0.384 0.145 0.734 0.383 1-0.238 0.266-0.383 0.616-0.383 1s0.145 0.734 0.383 1c-0.238 0.266-0.383 0.616-0.383 1s0.145 0.734 0.383 1c-0.238 0.266-0.383 0.616-0.383 1s0.145 0.734 0.383 1c-0.238 0.266-0.383 0.616-0.383 1s0.145 0.734 0.383 1c-0.238 0.266-0.383 0.616-0.383 1v2c0 0.827 0.673 1.5 1.5 1.5h6c0.827 0 1.5-0.673 1.5-1.5v-2c0-0.384-0.145-0.734-0.383-1 0.238-0.266 0.383-0.616 0.383-1s-0.145-0.734-0.383-1c0.238-0.266 0.383-0.616 0.383-1s-0.145-0.734-0.383-1c0.238-0.266 0.383-0.616 0.383-1s-0.145-0.734-0.383-1c0.238-0.266 0.383-0.616 0.383-1s-0.145-0.734-0.383-1c0.238-0.266 0.383-0.616 0.383-1v-1zM8 1h3v1h-3v-1zM6 5.5c0-0.383 0.29-0.926 0.609-1.139l2.042-1.361h1.697l2.042 1.361c0.319 0.213 0.609 0.755 0.609 1.139v1c0 0.276-0.224 0.5-0.5 0.5h-6c-0.276 0-0.5-0.224-0.5-0.5v-1zM13 8.5c0 0.276-0.224 0.5-0.5 0.5h-6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h6c0.276 0 0.5 0.224 0.5 0.5zM13 10.5c0 0.276-0.224 0.5-0.5 0.5h-6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h6c0.276 0 0.5 0.224 0.5 0.5zM13 12.5c0 0.276-0.224 0.5-0.5 0.5h-6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h6c0.276 0 0.5 0.224 0.5 0.5zM13 14.5c0 0.276-0.224 0.5-0.5 0.5h-6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h6c0.276 0 0.5 0.224 0.5 0.5zM13 18.5c0 0.276-0.224 0.5-0.5 0.5h-6c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5h6c0.276 0 0.5 0.224 0.5 0.5v2z"
  })));
}

LiniBottle.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBottle;