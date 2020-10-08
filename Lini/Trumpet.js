var React = require('react');

var PropTypes = require('prop-types');

function LiniTrumpet({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniTrumpet';

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
    d: "M19.615 4.014c-0.226-0.054-0.458 0.055-0.562 0.262-0.019 0.037-1.901 3.724-4.553 3.724h-4.5v-1h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v1h-3v-1h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v1h-3.485c-0.128-0.049-0.406-0.402-0.568-0.724-0.104-0.207-0.336-0.316-0.562-0.263s-0.385 0.255-0.385 0.487v4c0 0.232 0.159 0.433 0.385 0.486s0.458-0.055 0.562-0.262c0.162-0.322 0.44-0.675 0.568-0.724h0.521c-0.024 0.165-0.036 0.332-0.036 0.5 0 1.36 0.791 2.588 2 3.162v0.838c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-0.5h1v0.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-0.5h0.5c1.93 0 3.5-1.57 3.5-3.5 0-0.156-0.010-0.31-0.030-0.461 2.402 0.392 4.066 3.65 4.083 3.685 0.086 0.172 0.261 0.276 0.447 0.276 0.038 0 0.077-0.004 0.115-0.013 0.226-0.053 0.385-0.255 0.385-0.487v-10c0-0.232-0.159-0.433-0.385-0.486zM3 11.5c0-0.169 0.017-0.336 0.050-0.5h0.95v2.5c-0.617-0.464-1-1.201-1-2zM5 15v-4h1v4h-1zM8 12h-1v-1h1v1zM7 14v-1h1v1h-1zM11.5 14h-1c-0.276 0-0.5 0.224-0.5 0.5v0.5h-1v-4h1v1.5c0 0.276 0.224 0.5 0.5 0.5h1c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5h-10c-0.179 0-0.347 0.056-0.5 0.144v-1.289c0.153 0.089 0.321 0.144 0.5 0.144h10c1.378 0 2.5 1.122 2.5 2.5s-1.122 2.5-2.5 2.5zM11 12v-1h0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-0.5zM19 12.782c-0.902-1.201-2.406-2.698-4.337-2.779-0.179-0.376-0.422-0.716-0.717-1.004h0.553c2.010 0 3.573-1.548 4.5-2.782v6.565z"
  }, pathProps))));
}

LiniTrumpet.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniTrumpet;