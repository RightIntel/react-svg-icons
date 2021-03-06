var React = require('react');

var PropTypes = require('prop-types');

function LiniApartment({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniApartment';

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
    d: "M14 6h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M14 8h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M14 10h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M14 12h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M14 16h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M14 14h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M6 6h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M6 8h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M6 10h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M6 12h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M6 16h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M6 14h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M4 6h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M4 8h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M4 10h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M4 12h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M4 16h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M4 14h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M8 6h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M8 8h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M8 10h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M8 12h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M8 16h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M8 14h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M18.5 19h-0.5v-13.5c0-0.763-0.567-1.549-1.291-1.791l-4.709-1.57v-1.64c0-0.158-0.075-0.307-0.202-0.401s-0.291-0.123-0.442-0.078l-9.042 2.713c-0.737 0.221-1.314 0.997-1.314 1.766v14.5h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h18c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM16.393 4.658c0.318 0.106 0.607 0.507 0.607 0.842v13.5h-5v-15.806l4.393 1.464zM2 4.5c0-0.329 0.287-0.714 0.602-0.808l8.398-2.52v17.828h-9v-14.5z"
  }, pathProps))));
}

LiniApartment.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniApartment;