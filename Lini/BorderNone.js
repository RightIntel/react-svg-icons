var React = require('react');

var PropTypes = require('prop-types');

function LiniBorderNone({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniBorderNone';

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
    d: "M1 10h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M3 10h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M5 10h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M7 10h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9 10h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M11 10h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M13 10h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M15 10h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M17 10h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9 16h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9 14h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9 12h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9 8h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9 6h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9 4h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9 2h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M1 16h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M1 18h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M1 14h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M1 12h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M1 2h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M1 8h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M1 6h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M1 4h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M17 16h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M17 18h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M17 14h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M17 12h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M17 2h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M17 8h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M17 6h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M17 4h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9 18h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M3 2h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M5 2h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M7 2h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M11 2h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M13 2h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M15 2h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M3 18h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M5 18h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M7 18h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M11 18h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M13 18h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M15 18h1v1h-1v-1z"
  }, pathProps))));
}

LiniBorderNone.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBorderNone;