var React = require('react');

var PropTypes = require('prop-types');

function LiniSignal({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniSignal';

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
    d: "M2.5 19h-2c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5zM1 18h1v-2h-1v2z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M6.5 19h-2c-0.276 0-0.5-0.224-0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v5c0 0.276-0.224 0.5-0.5 0.5zM5 18h1v-4h-1v4z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M10.5 19h-2c-0.276 0-0.5-0.224-0.5-0.5v-8c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v8c0 0.276-0.224 0.5-0.5 0.5zM9 18h1v-7h-1v7z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M14.5 19h-2c-0.276 0-0.5-0.224-0.5-0.5v-12c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v12c0 0.276-0.224 0.5-0.5 0.5zM13 18h1v-11h-1v11z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M18.5 19h-2c-0.276 0-0.5-0.224-0.5-0.5v-17c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v17c0 0.276-0.224 0.5-0.5 0.5zM17 18h1v-16h-1v16z"
  }, pathProps))));
}

LiniSignal.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniSignal;