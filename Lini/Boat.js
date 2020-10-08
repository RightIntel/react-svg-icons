var React = require('react');

var PropTypes = require('prop-types');

function LiniBoat({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniBoat';

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
    d: "M19.906 14.208c-0.094-0.13-0.245-0.208-0.406-0.208h-8.5v-1h6.5c0.206 0 0.391-0.126 0.466-0.318s0.024-0.41-0.127-0.55c-0.011-0.010-1.122-1.041-2.519-2.883-1.286-1.695-3.084-4.446-4.35-7.92-0.083-0.228-0.318-0.363-0.557-0.321s-0.413 0.25-0.413 0.492v12.5h-9.5c-0.161 0-0.312 0.077-0.406 0.208s-0.12 0.298-0.069 0.45c0.72 2.159 1.493 3.66 3.126 4.477 1.463 0.731 3.454 0.865 6.849 0.865s5.386-0.134 6.849-0.865c1.632-0.816 2.406-2.318 3.126-4.477 0.051-0.152 0.025-0.32-0.069-0.45zM11 4.010c1.164 2.503 2.51 4.509 3.539 5.864 0.691 0.91 1.309 1.623 1.772 2.125h-5.311v-7.99zM16.401 18.24c-1.277 0.639-3.235 0.76-6.401 0.76s-5.124-0.121-6.401-0.76c-1.040-0.52-1.72-1.424-2.393-3.24h17.589c-0.674 1.816-1.353 2.72-2.393 3.24z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M8.5 13h-6c-0.214 0-0.404-0.136-0.473-0.338s-0.003-0.426 0.166-0.557c0.011-0.008 1.118-0.876 2.388-2.269 1.16-1.273 2.699-3.259 3.444-5.494 0.078-0.233 0.312-0.375 0.554-0.335s0.42 0.248 0.42 0.494v8c0 0.276-0.224 0.5-0.5 0.5zM3.841 12h4.159v-5.157c-0.824 1.484-1.853 2.761-2.693 3.682-0.542 0.593-1.050 1.091-1.465 1.475z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M4.5 17c-0.132 0-0.261-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.26 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.261-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M6.5 17c-0.132 0-0.261-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.261 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.261-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M8.5 17c-0.132 0-0.261-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.261 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.261-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }, pathProps))));
}

LiniBoat.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBoat;