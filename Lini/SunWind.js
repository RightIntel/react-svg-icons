var React = require('react');

var PropTypes = require('prop-types');

function LiniSunWind({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniSunWind';

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
    d: "M14.5 12h-6.5c-1.103 0-2-0.897-2-2s0.897-2 2-2c0.946 0 1.77 0.671 1.959 1.596 0.055 0.271 0.32 0.445 0.59 0.39s0.445-0.32 0.39-0.59c-0.284-1.388-1.52-2.396-2.939-2.396-1.654 0-3 1.346-3 3 0 0.768 0.29 1.469 0.766 2h-3.766c-0.551 0-1-0.449-1-1s0.449-1 1-1c0.423 0 0.802 0.268 0.943 0.667 0.092 0.26 0.378 0.397 0.638 0.305s0.397-0.378 0.305-0.638c-0.282-0.797-1.040-1.333-1.886-1.333-1.103 0-2 0.897-2 2s0.897 2 2 2h12.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M4 18c-1.103 0-2-0.897-2-2s0.897-2 2-2h8.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-8.5c-0.551 0-1 0.449-1 1s0.449 1 1 1c0.423 0 0.802-0.268 0.943-0.667 0.092-0.26 0.378-0.397 0.638-0.305s0.397 0.378 0.305 0.638c-0.282 0.797-1.040 1.333-1.886 1.333z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M15.5 17h-6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h6c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M15.964 11c-0.085 0-0.171-0.022-0.25-0.067-0.239-0.138-0.321-0.444-0.182-0.683 0.306-0.529 0.468-1.134 0.468-1.75 0-1.93-1.57-3.5-3.5-3.5-0.853 0-1.676 0.311-2.315 0.875-0.207 0.183-0.523 0.163-0.706-0.044s-0.163-0.523 0.044-0.706c0.822-0.725 1.879-1.125 2.976-1.125 2.481 0 4.5 2.019 4.5 4.5 0 0.791-0.208 1.569-0.602 2.25-0.093 0.16-0.261 0.25-0.433 0.25z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M12.5 3c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M7.5 4c-0.128 0-0.256-0.049-0.354-0.146l-1-1c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l1 1c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M17.5 4c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l1-1c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-1 1c-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M19.5 9h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M18.5 14c-0.128 0-0.256-0.049-0.354-0.146l-1-1c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l1 1c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps))));
}

LiniSunWind.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniSunWind;