var React = require('react');

var PropTypes = require('prop-types');

function LiniGridCrossed({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniGridCrossed';

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
    d: "M19.854 0.146c-0.195-0.195-0.512-0.195-0.707 0l-2 2c-0.196-0.094-0.415-0.147-0.646-0.147h-13c-0.827 0-1.5 0.673-1.5 1.5v13c0 0.231 0.053 0.45 0.147 0.646l-2 2c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l2-2c0.196 0.094 0.415 0.147 0.646 0.147h13c0.827 0 1.5-0.673 1.5-1.5v-13c0-0.231-0.053-0.45-0.147-0.646l2-2c0.195-0.195 0.195-0.512-0-0.707zM11.293 8l-3.293 3.293v-3.293h3.293zM8 7v-4h4v4h-4zM7 12h-4v-4h4v4zM8.707 12l3.293-3.293v3.293h-3.293zM12 13v4h-4v-4h4zM13 8h4v4h-4v-4zM13 3h3.293l-3.293 3.293v-3.293zM3.5 3h3.5v4h-4v-3.5c0-0.276 0.224-0.5 0.5-0.5zM3 13h3.293l-3.293 3.293v-3.293zM7 13.707v3.293h-3.293l3.293-3.293zM16.5 17h-3.5v-4h4v3.5c0 0.276-0.224 0.5-0.5 0.5zM17 7h-3.293l3.293-3.293v3.293z"
  }, pathProps))));
}

LiniGridCrossed.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniGridCrossed;