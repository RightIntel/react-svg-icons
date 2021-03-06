var React = require('react');

var PropTypes = require('prop-types');

function LiniTimer({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniTimer';

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
    d: "M15.51 5.49c-1.487-1.487-3.428-2.355-5.51-2.475v-1.015h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v1.015c-2.082 0.12-4.023 0.988-5.51 2.475-1.605 1.605-2.49 3.74-2.49 6.010s0.884 4.405 2.49 6.010c1.605 1.605 3.74 2.49 6.010 2.49s4.405-0.884 6.010-2.49c1.605-1.605 2.49-3.74 2.49-6.010s-0.884-4.405-2.49-6.010zM10 18.983v-0.483c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v0.483c-3.738-0.247-6.736-3.245-6.983-6.983h0.483c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.483c0.247-3.738 3.245-6.736 6.983-6.983v0.483c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.483c3.738 0.247 6.736 3.245 6.983 6.983h-0.483c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.483c-0.247 3.738-3.245 6.736-6.983 6.983z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9.5 12c-0.276 0-0.5-0.224-0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v5c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps))));
}

LiniTimer.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniTimer;