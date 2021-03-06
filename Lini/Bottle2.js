var React = require('react');

var PropTypes = require('prop-types');

function LiniBottle2({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniBottle2';

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
    d: "M11 8.050v-5.050c0.551 0 1-0.449 1-1v-1c0-0.551-0.449-1-1-1h-3c-0.551 0-1 0.449-1 1v1c0 0.551 0.449 1 1 1v5.050c-1.14 0.232-2 1.242-2 2.45v8c0 0.827 0.673 1.5 1.5 1.5h4c0.827 0 1.5-0.673 1.5-1.5v-8c0-1.207-0.86-2.217-2-2.45zM8 1h3l0 1h-3v-1zM12 18.5c0 0.276-0.224 0.5-0.5 0.5h-4c-0.276 0-0.5-0.224-0.5-0.5v-8c0-0.827 0.673-1.5 1.5-1.5 0.276 0 0.5-0.224 0.5-0.5v-5.5h1v5.5c0 0.276 0.224 0.5 0.5 0.5 0.827 0 1.5 0.673 1.5 1.5v8z"
  }, pathProps))));
}

LiniBottle2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBottle2;