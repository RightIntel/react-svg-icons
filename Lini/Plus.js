var React = require('react');

var PropTypes = require('prop-types');

function LiniPlus({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniPlus';

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
    d: "M18.5 10h-8.5v-8.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v8.5h-8.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h8.5v8.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-8.5h8.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z"
  }, pathProps))));
}

LiniPlus.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPlus;