var React = require('react');

var PropTypes = require('prop-types');

function LiniBorderHorizontal({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniBorderHorizontal';

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
    d: "M9 16h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M9 14h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M9 12h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M9 8h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M9 6h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M9 4h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M9 2h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M1 16h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M1 18h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M1 14h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M1 12h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M1 2h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M1 8h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M1 6h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M1 4h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M17 16h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M17 18h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M17 14h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M17 12h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M17 2h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M17 8h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M17 6h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M17 4h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M9 18h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M3 2h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M5 2h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M7 2h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M11 2h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M13 2h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M15 2h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M3 18h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M5 18h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M7 18h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M11 18h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M13 18h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M15 18h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M17.5 11h-16c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h16c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps))));
}

LiniBorderHorizontal.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBorderHorizontal;