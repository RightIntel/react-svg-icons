var React = require('react');

var PropTypes = require('prop-types');

function LiniBarcode2({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniBarcode2';

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
    d: "M0 3h1v12h-1v-12z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M16 3h0.5v12h-0.5v-12z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M3.5 3h0.5v12h-0.5v-12z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M12 3h1v12h-1v-12z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M2 3h1v12h-1v-12z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M7.5 3h0.5v12h-0.5v-12z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M6 3h1v12h-1v-12z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M19.5 3h0.5v12h-0.5v-12z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M17 3h1v12h-1v-12z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M8.5 3h0.5v12h-0.5v-12z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M10 3h1v12h-1v-12z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M0 16h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M2 16h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M3.5 16h0.5v1h-0.5v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M6 16h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M7.5 16h0.5v1h-0.5v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M8.5 16h0.5v1h-0.5v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M10 16h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M12 16h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M16 16h0.5v1h-0.5v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M17 16h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M19.5 16h0.5v1h-0.5v-1z"
  }, pathProps))));
}

LiniBarcode2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBarcode2;