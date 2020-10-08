var React = require('react');

var PropTypes = require('prop-types');

function LiniBinoculars({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniBinoculars';

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
    d: "M4.5 17c-0.632 0-1.238-0.194-1.707-0.545-0.504-0.378-0.793-0.908-0.793-1.455 0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 0.472 0.642 1 1.5 1 0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M19.998 14.882c-0.044-2.005-1.2-4.788-2.173-6.788-1.050-2.158-2.355-4.331-2.971-4.947-0.471-0.471-1.278-0.521-1.604-0.521s-1.133 0.051-1.603 0.521c-0.234 0.234-0.494 0.718-0.645 2.531-0.013 0.16-0.026 0.327-0.037 0.503-0.288-0.116-0.617-0.18-0.965-0.18s-0.677 0.065-0.965 0.181c-0.011-0.176-0.023-0.344-0.037-0.504-0.151-1.813-0.411-2.297-0.645-2.531-0.471-0.471-1.278-0.521-1.604-0.521s-1.133 0.051-1.604 0.521c-0.616 0.616-1.921 2.789-2.971 4.947-0.973 2.001-2.129 4.783-2.173 6.788-0.001 0.039-0.002 0.079-0.002 0.118 0 2.206 2.019 4 4.5 4 2.475 0 4.489-1.785 4.5-3.983 0.002-0.040 0.012-0.26 0.026-0.613 0.095-0.19 0.455-0.404 0.975-0.404s0.879 0.215 0.975 0.404c0.014 0.351 0.024 0.571 0.026 0.612 0.010 2.198 2.025 3.983 4.5 3.983 2.481 0 4.5-1.794 4.5-4 0-0.040-0.001-0.079-0.002-0.118zM11.99 5.858c0.13-1.651 0.337-1.97 0.366-2.008 0.306-0.299 1.489-0.298 1.79 0.003 0.411 0.411 1.605 2.265 2.779 4.678 0.597 1.227 1.073 2.363 1.419 3.372-0.776-0.564-1.766-0.903-2.844-0.903-1.461 0-2.761 0.622-3.584 1.584-0.022-0.854-0.040-1.858-0.041-2.878-0.001-1.566 0.037-2.861 0.115-3.847zM3.075 8.531c1.174-2.413 2.368-4.267 2.779-4.678 0.301-0.301 1.484-0.302 1.79-0.003 0.029 0.037 0.236 0.356 0.366 2.006 0.078 0.986 0.117 2.28 0.115 3.845-0.001 1.021-0.019 2.027-0.041 2.881-0.823-0.962-2.123-1.584-3.584-1.584-1.078 0-2.069 0.339-2.844 0.903 0.346-1.009 0.822-2.145 1.419-3.372zM4.5 18c-1.93 0-3.5-1.346-3.5-3 0-0.026 0.001-0.053 0.001-0.080 0.050-1.617 1.6-2.92 3.499-2.92 1.93 0 3.5 1.346 3.5 3s-1.57 3-3.5 3zM10 13c-0.339 0-0.655 0.061-0.932 0.168 0.029-0.984 0.057-2.253 0.057-3.543 0-0.85-0.012-1.622-0.035-2.309 0.153-0.165 0.488-0.316 0.91-0.316 0.438 0 0.761 0.154 0.911 0.315-0.024 0.688-0.036 1.459-0.036 2.31 0 1.289 0.028 2.559 0.057 3.543-0.277-0.107-0.593-0.168-0.932-0.168zM15.5 18c-1.93 0-3.5-1.346-3.5-3s1.57-3 3.5-3c1.899 0 3.449 1.303 3.499 2.92 0.001 0.027 0.001 0.054 0.001 0.080 0 1.654-1.57 3-3.5 3z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M15.5 17c-0.632 0-1.238-0.194-1.707-0.545-0.504-0.378-0.793-0.908-0.793-1.455 0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 0.472 0.641 1 1.5 1 0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps))));
}

LiniBinoculars.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBinoculars;