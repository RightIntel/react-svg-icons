var React = require('react');

var PropTypes = require('prop-types');

function LiniPlatter({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniPlatter';

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
    d: "M18.5 17h-18c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h18c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M18 14.474c-0.007-2.261-0.89-4.385-2.49-5.984-1.487-1.487-3.428-2.355-5.51-2.475v-1.015h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v1.015c-2.082 0.12-4.023 0.988-5.51 2.475-1.605 1.605-2.49 3.74-2.49 6.010 0 0.276 0.224 0.5 0.5 0.5h16c0 0 0 0 0.001 0 0.276 0 0.5-0.224 0.5-0.5 0-0.009-0-0.017-0.001-0.026zM2.016 14c0.258-3.903 3.516-7 7.484-7s7.225 3.097 7.484 7h-14.967z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M4.626 11.5c-0.101 0-0.203-0.031-0.292-0.094-0.224-0.161-0.275-0.474-0.114-0.698 0.493-0.685 1.105-1.261 1.819-1.711 0.729-0.46 1.53-0.765 2.378-0.907 0.272-0.046 0.53 0.138 0.576 0.41s-0.138 0.53-0.41 0.576c-1.435 0.241-2.696 1.028-3.551 2.216-0.098 0.136-0.251 0.208-0.406 0.208z"
  }, pathProps))));
}

LiniPlatter.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPlatter;