var React = require('react');

var PropTypes = require('prop-types');

function LiniPointerLeft2({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniPointerLeft2';

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
    d: "M15.5 15c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M8.5 17c-0.827 0-1.5-0.673-1.5-1.5 0-0.195 0.038-0.382 0.106-0.553-0.637-0.173-1.106-0.756-1.106-1.447 0-0.195 0.038-0.382 0.106-0.553-0.637-0.174-1.106-0.756-1.106-1.447 0-0.175 0.030-0.344 0.086-0.5h-2.586c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5h5.966l-1.113-1.406c-0.241-0.304-0.361-0.695-0.339-1.098s0.186-0.779 0.46-1.053c0.581-0.581 1.532-0.583 2.12-0.003l3.523 3.479c0.227-0.54 0.762-0.919 1.383-0.919h2c0.827 0 1.5 0.673 1.5 1.5v7c0 0.827-0.673 1.5-1.5 1.5h-2c-0.541 0-1.016-0.288-1.28-0.719-0.636 0.328-1.798 0.719-3.72 0.719h-1zM8.182 5.15c-0.207 0.207-0.227 0.592-0.044 0.823l1.754 2.216c0.119 0.15 0.142 0.355 0.058 0.528s-0.258 0.282-0.45 0.282h-7c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-1c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1c2.102 0 3.139-0.516 3.5-0.748v-6.043l-4.108-4.057c-0.194-0.192-0.519-0.192-0.71-0.002zM16.5 16c0.276 0 0.5-0.224 0.5-0.5v-7c0-0.276-0.224-0.5-0.5-0.5h-2c-0.276 0-0.5 0.224-0.5 0.5v7c0 0.276 0.224 0.5 0.5 0.5h2z"
  }, pathProps))));
}

LiniPointerLeft2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPointerLeft2;