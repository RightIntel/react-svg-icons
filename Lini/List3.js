var React = require('react');

var PropTypes = require('prop-types');

function LiniList3({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniList3';

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
    d: "M2 6c-0.128 0-0.256-0.049-0.354-0.146l-1.5-1.5c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l1.146 1.146 4.146-4.146c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-4.5 4.5c-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M19.5 5h-12c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h12c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M2 13c-0.128 0-0.256-0.049-0.354-0.146l-1.5-1.5c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l1.146 1.146 4.146-4.146c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-4.5 4.5c-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M19.5 12h-12c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h12c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M2 20c-0.128 0-0.256-0.049-0.354-0.146l-1.5-1.5c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l1.146 1.146 4.146-4.146c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-4.5 4.5c-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M19.5 19h-12c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h12c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps))));
}

LiniList3.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniList3;