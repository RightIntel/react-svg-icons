var React = require('react');

var PropTypes = require('prop-types');

function LiniKeyboardUp({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniKeyboardUp';

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
    d: "M17.5 19h-16c-0.827 0-1.5-0.673-1.5-1.5v-8c0-0.827 0.673-1.5 1.5-1.5h6c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-6c-0.276 0-0.5 0.224-0.5 0.5v8c0 0.276 0.224 0.5 0.5 0.5h16c0.276 0 0.5-0.224 0.5-0.5v-8c0-0.276-0.224-0.5-0.5-0.5h-6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h6c0.827 0 1.5 0.673 1.5 1.5v8c0 0.827-0.673 1.5-1.5 1.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M3.5 11h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M16.5 11h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M4.5 13h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M16.5 15h-3c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2.5v-1.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M5.5 15h-3c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M3.5 17h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M11.5 17h-6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h6c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M14.5 17h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M5.5 11c-0.132 0-0.26-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.261 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.26-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M7.5 11c-0.132 0-0.26-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.261 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.26-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9.5 11c-0.132 0-0.26-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.261 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.26-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M11.5 11c-0.132 0-0.261-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.261 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.26-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M13.5 11c-0.132 0-0.261-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.261 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.261-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M14.5 13c-0.132 0-0.261-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.26 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.261-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M12.5 13c-0.132 0-0.261-0.053-0.353-0.147s-0.147-0.222-0.147-0.353c0-0.132 0.053-0.261 0.147-0.353s0.222-0.147 0.353-0.147 0.261 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.26-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10.5 13c-0.132 0-0.261-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.261 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.261-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M8.5 13c-0.132 0-0.261-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.261 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.26-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M6.5 13c-0.132 0-0.261-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.26 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.26-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M7.5 15c-0.132 0-0.26-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.26 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.261-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9.5 15c-0.132 0-0.26-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.261 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.261-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M11.5 15c-0.132 0-0.261-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.26 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.261-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M12.854 4.646l-3-3c-0.195-0.195-0.512-0.195-0.707 0l-3 3c-0.195 0.195-0.195 0.512 0 0.707s0.512 0.195 0.707 0l2.146-2.146v5.293c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-5.293l2.146 2.146c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707z"
  }, pathProps))));
}

LiniKeyboardUp.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniKeyboardUp;