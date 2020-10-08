var React = require('react');

var PropTypes = require('prop-types');

function LiniBarcode3({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniBarcode3';

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
    d: "M16 3h0.5v11h-0.5v-11z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M3.5 3h0.5v11h-0.5v-11z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M12 3h1v11h-1v-11z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M2 3h1v11h-1v-11z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M7.5 3h0.5v11h-0.5v-11z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M6 3h1v11h-1v-11z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M19.5 3h0.5v12h-0.5v-12z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M17 3h1v11h-1v-11z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M8.5 3h0.5v11h-0.5v-11z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M10 3h1v11h-1v-11z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M3.5 14.5v0.5h1v0.5h-1v1.5h1.5v-0.5h-1v-0.5h1v-1.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M2 14.5h0.5v2.5h-0.5v-2.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M6 14.5v0.5h1v0.5h-1v1.5h1.5v-0.5h-1v-0.5h1v-1.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M9.5 14.5v1h-0.5v-1h-0.5v1.5h1v1h0.5v-2.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M11 14.5v0.5h1v0.5h-1v0.5h1v0.5h-1v0.5h1.5v-2.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M15 15v-0.5h-1.5v1.5h1v0.5h-1v0.5h1.5v-1.5h-1v-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M16 14.5h0.5v2.5h-0.5v-2.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M19 15v-0.5h-1.5v2.5h1.5v-1.5h-1v-0.5h1zM18.5 16v0.5h-0.5v-0.5h0.5z"
  }, pathProps))));
}

LiniBarcode3.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBarcode3;