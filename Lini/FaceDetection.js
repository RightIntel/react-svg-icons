var React = require('react');

var PropTypes = require('prop-types');

function LiniFaceDetection({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniFaceDetection';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.5 6c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM5.5 2c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5 1.5-0.673 1.5-1.5-0.673-1.5-1.5-1.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 11h-4c-0.425 0-0.796-0.177-1.019-0.486s-0.273-0.717-0.139-1.12c0.022-0.065 0.229-0.649 0.849-1.232 0.564-0.53 1.596-1.161 3.309-1.161 0.38 0 0.746 0.031 1.088 0.092 0.272 0.049 0.453 0.309 0.404 0.58s-0.309 0.453-0.58 0.404c-0.284-0.051-0.591-0.077-0.912-0.077-2.609 0-3.204 1.692-3.209 1.709-0.031 0.093-0.030 0.175 0.002 0.22s0.11 0.071 0.208 0.071h4c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 7h-1c-0.276 0-0.5-0.224-0.5-0.5v-6c0-0.276 0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-0.5v5h0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 7h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h0.5v-5h-0.5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5v6c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zM13 10c-1.103 0-2 0.897-2 2s0.897 2 2 2 2-0.897 2-2-0.897-2-2-2z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 16h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h0.5v-6h-0.5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5v7c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 16h-1c-0.276 0-0.5-0.224-0.5-0.5v-7c0-0.276 0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-0.5v6h0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 20h-7c-0.425 0-0.796-0.177-1.019-0.486s-0.273-0.717-0.139-1.12c0.033-0.098 0.842-2.393 4.658-2.393s4.626 2.296 4.658 2.393c0.134 0.403 0.084 0.811-0.139 1.12s-0.594 0.486-1.019 0.486zM9.289 18.714c-0.030 0.091-0.029 0.172 0.003 0.215s0.11 0.071 0.208 0.071h7c0.098 0 0.176-0.027 0.208-0.071s0.033-0.124 0.003-0.215c-0.011-0.029-0.175-0.442-0.679-0.847-0.704-0.567-1.752-0.866-3.032-0.866s-2.327 0.3-3.032 0.866c-0.504 0.406-0.668 0.818-0.679 0.847z",
    fill: color
  })));
}

LiniFaceDetection.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFaceDetection;