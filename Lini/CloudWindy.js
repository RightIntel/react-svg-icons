var React = require('react');

var PropTypes = require('prop-types');

function LiniCloudWindy({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniCloudWindy';

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
    d: "M16.499 12.965c-0.245 0-0.459-0.18-0.494-0.429-0.039-0.273 0.151-0.527 0.424-0.566 1.466-0.21 2.571-1.486 2.571-2.97 0-1.654-1.346-3-3-3-0.343 0-0.68 0.057-1 0.17-0.217 0.077-0.458-0.005-0.584-0.197s-0.105-0.446 0.051-0.615c0.344-0.371 0.533-0.854 0.533-1.359 0-1.103-0.897-2-2-2-1.055 0-1.931 0.823-1.996 1.875-0.013 0.212-0.159 0.393-0.363 0.451s-0.423-0.020-0.545-0.194c-0.937-1.335-2.468-2.131-4.096-2.131-2.757 0-5 2.243-5 5 0 0.152 0.007 0.305 0.020 0.455 0.025 0.275-0.178 0.518-0.453 0.543s-0.518-0.178-0.543-0.453c-0.016-0.18-0.024-0.363-0.024-0.545 0-3.308 2.692-6 6-6 1.611 0 3.143 0.65 4.261 1.776 0.471-1.050 1.527-1.776 2.739-1.776 1.654 0 3 1.346 3 3 0 0.346-0.059 0.685-0.172 1.004 0.057-0.002 0.115-0.004 0.172-0.004 2.206 0 4 1.794 4 4 0 0.969-0.351 1.903-0.988 2.632-0.631 0.721-1.498 1.193-2.442 1.328-0.024 0.003-0.048 0.005-0.071 0.005z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M14.5 12h-6.5c-1.103 0-2-0.897-2-2s0.897-2 2-2c0.946 0 1.77 0.671 1.959 1.596 0.055 0.271 0.32 0.445 0.59 0.39s0.445-0.32 0.39-0.59c-0.284-1.388-1.52-2.396-2.939-2.396-1.654 0-3 1.346-3 3 0 0.768 0.29 1.469 0.766 2h-3.766c-0.551 0-1-0.449-1-1s0.449-1 1-1c0.423 0 0.802 0.268 0.943 0.667 0.092 0.26 0.378 0.397 0.638 0.305s0.397-0.378 0.305-0.638c-0.282-0.797-1.040-1.333-1.886-1.333-1.103 0-2 0.897-2 2s0.897 2 2 2h12.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M4 18c-1.103 0-2-0.897-2-2s0.897-2 2-2h8.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-8.5c-0.551 0-1 0.449-1 1s0.449 1 1 1c0.423 0 0.802-0.268 0.943-0.667 0.092-0.26 0.378-0.397 0.638-0.305s0.397 0.378 0.305 0.638c-0.282 0.797-1.040 1.333-1.886 1.333z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M15.5 17h-6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h6c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps))));
}

LiniCloudWindy.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCloudWindy;