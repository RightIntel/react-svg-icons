var React = require('react');

var PropTypes = require('prop-types');

function LiniCartPlus({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniCartPlus';

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
    d: "M17.598 4.010c-0.271-0.054-0.534 0.121-0.588 0.392l-0.804 4.019c-0.064 0.321-0.419 0.638-0.745 0.666l-10.21 0.875-1.093-6.558c-0.131-0.787-0.859-1.404-1.658-1.404h-1c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1c0.307 0 0.621 0.266 0.671 0.569l1.671 10.027c0.131 0.787 0.859 1.404 1.658 1.404h10c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-10c-0.307 0-0.621-0.266-0.671-0.569l-0.413-2.479 10.131-0.868c0.768-0.066 1.489-0.71 1.64-1.466l0.804-4.019c0.054-0.271-0.121-0.534-0.392-0.588z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M8 20c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2zM8 17c-0.551 0-1 0.449-1 1s0.449 1 1 1 1-0.449 1-1-0.449-1-1-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M15 20c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2zM15 17c-0.551 0-1 0.449-1 1s0.449 1 1 1 1-0.449 1-1-0.449-1-1-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M13.5 4h-2.5v-2.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v2.5h-2.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h2.5v2.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-2.5h2.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z"
  }, pathProps))));
}

LiniCartPlus.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCartPlus;