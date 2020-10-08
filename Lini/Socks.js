var React = require('react');

var PropTypes = require('prop-types');

function LiniSocks({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniSocks';

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
    d: "M12.5 6c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M14.5 6c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M16.5 6c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M17.5 0h-6c-0.827 0-1.5 0.673-1.5 1.5v5c0 0.356-0.294 0.816-0.617 0.966l-6.592 3.048c-0.004 0.002-0.008 0.004-0.013 0.006-0.821 0.408-1.515 1.034-2.006 1.81-0.505 0.798-0.772 1.721-0.772 2.67 0 2.757 2.243 5 5 5 0.779 0 1.526-0.175 2.22-0.519l9.695-4.664c1.169-0.563 2.086-2.020 2.086-3.318v-10c0-0.827-0.673-1.5-1.5-1.5zM1 15c0-1.138 0.471-2.189 1.277-2.933 2.137 0.371 3.723 2.24 3.723 4.433 0 0.897-0.26 1.754-0.753 2.492-0.082 0.005-0.164 0.008-0.247 0.008-2.206 0-4-1.794-4-4zM6.783 18.581c-0.002 0.001-0.004 0.002-0.006 0.003-0.076 0.038-0.153 0.073-0.23 0.105 0.298-0.685 0.452-1.425 0.452-2.189 0-2.345-1.484-4.386-3.604-5.164l6.406-2.962c0.672-0.311 1.198-1.133 1.198-1.873v-5c0-0.276 0.224-0.5 0.5-0.5h6c0.276 0 0.5 0.224 0.5 0.5v6.523c-2.799 0.253-5 2.613-5 5.477 0 0.666 0.117 1.311 0.346 1.924l-6.563 3.157zM16.481 13.916l-2.229 1.072c-0.167-0.476-0.252-0.974-0.252-1.489 0-2.312 1.753-4.223 4-4.472v2.472c0 0.914-0.696 2.020-1.519 2.416z"
  }, pathProps))));
}

LiniSocks.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniSocks;