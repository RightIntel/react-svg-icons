var React = require('react');

var PropTypes = require('prop-types');

function LiniFingersScrollVertical2({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniFingersScrollVertical2';

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
    d: "M16.5 6c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9.5 4c-0.827 0-1.5 0.673-1.5 1.5 0 0.195 0.038 0.382 0.106 0.553-0.637 0.173-1.106 0.756-1.106 1.447 0 0.175 0.031 0.343 0.086 0.5h-4.586c-0.827 0-1.5 0.673-1.5 1.5 0 0.691 0.469 1.274 1.105 1.447-0.068 0.171-0.105 0.358-0.105 0.553 0 0.827 0.673 1.5 1.5 1.5h5.966l-1.113 1.406c-0.241 0.304-0.361 0.694-0.339 1.098s0.186 0.779 0.46 1.053c0.581 0.581 1.532 0.583 2.12 0.003l3.523-3.479c0.227 0.54 0.762 0.919 1.383 0.919h2c0.827 0 1.5-0.673 1.5-1.5v-7c0-0.827-0.673-1.5-1.5-1.5h-2c-0.541 0-1.016 0.288-1.28 0.719-0.636-0.328-1.798-0.719-3.72-0.719h-1zM9.182 15.85c-0.207-0.207-0.227-0.592-0.044-0.823l1.754-2.216c0.119-0.15 0.142-0.355 0.058-0.528s-0.258-0.282-0.45-0.282h-7c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h6c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c2.102 0 3.139 0.516 3.5 0.748v6.043l-4.108 4.057c-0.194 0.192-0.519 0.192-0.71 0.002zM17.5 5c0.276 0 0.5 0.224 0.5 0.5v7c0 0.276-0.224 0.5-0.5 0.5h-2c-0.276 0-0.5-0.224-0.5-0.5v-7c0-0.276 0.224-0.5 0.5-0.5h2z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M3.146 1.646l-2 2c-0.195 0.195-0.195 0.512 0 0.707s0.512 0.195 0.707 0l1.146-1.146v3.293c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-3.293l1.146 1.146c0.195 0.195 0.512 0.195 0.707 0 0.098-0.098 0.146-0.226 0.146-0.354s-0.049-0.256-0.146-0.354l-2-2c-0.195-0.195-0.512-0.195-0.707 0z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M3 14.5v3.293l-1.146-1.146c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l2 2c0.195 0.195 0.512 0.195 0.707 0l2-2c0.098-0.098 0.146-0.226 0.146-0.354s-0.049-0.256-0.146-0.354c-0.195-0.195-0.512-0.195-0.707 0l-1.146 1.146v-3.293c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5z"
  }, pathProps))));
}

LiniFingersScrollVertical2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFingersScrollVertical2;