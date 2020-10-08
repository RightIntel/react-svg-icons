var React = require('react');

var PropTypes = require('prop-types');

function LiniLaptopPhone({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniLaptopPhone';

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
    d: "M11.5 14h-8c-0.827 0-1.5-0.673-1.5-1.5v-8c0-0.827 0.673-1.5 1.5-1.5h13c0.827 0 1.5 0.673 1.5 1.5v1c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-1c0-0.276-0.224-0.5-0.5-0.5h-13c-0.276 0-0.5 0.224-0.5 0.5v8c0 0.276 0.224 0.5 0.5 0.5h8c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M11.5 18h-10c-0.827 0-1.5-0.673-1.5-1.5v-1c0-0.276 0.224-0.5 0.5-0.5h11c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-10.5v0.5c0 0.276 0.224 0.5 0.5 0.5h10c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M18.5 18h-4c-0.827 0-1.5-0.673-1.5-1.5v-8c0-0.827 0.673-1.5 1.5-1.5h4c0.827 0 1.5 0.673 1.5 1.5v8c0 0.827-0.673 1.5-1.5 1.5zM14.5 8c-0.276 0-0.5 0.224-0.5 0.5v8c0 0.276 0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5v-8c0-0.276-0.224-0.5-0.5-0.5h-4z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M16.5 16c-0.132 0-0.26-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.261 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.261-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }, pathProps))));
}

LiniLaptopPhone.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniLaptopPhone;