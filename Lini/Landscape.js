var React = require('react');

var PropTypes = require('prop-types');

function LiniLandscape({
  size,
  ...props
}) {
  var className = 'Component Lini LiniLandscape';

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
    d: "M19.88 13.175l-2.349-2.741c-0.263-0.307-0.638-0.488-1.029-0.496s-0.773 0.157-1.049 0.452l-2.033 2.178c-0.24-0.363-0.548-0.68-0.911-0.935-0.59-0.414-1.285-0.633-2.008-0.633-0.77 0-1.5 0.245-2.112 0.709-0.372 0.282-0.685 0.639-0.919 1.042l-1.943-2.307c-0.262-0.312-0.636-0.493-1.026-0.499s-0.768 0.166-1.039 0.471l-3.336 3.753c-0.183 0.206-0.165 0.522 0.042 0.706s0.522 0.165 0.706-0.042l3.336-3.753c0.079-0.089 0.176-0.137 0.278-0.135 0.1 0.001 0.198 0.052 0.274 0.143l7.356 8.735c0.099 0.117 0.24 0.178 0.383 0.178 0.114 0 0.228-0.039 0.322-0.118 0.211-0.178 0.238-0.493 0.060-0.704l-2.023-2.402 2.756-2.952c0.039-0.031 0.073-0.067 0.1-0.108l2.468-2.644c0.083-0.089 0.189-0.137 0.297-0.135s0.212 0.054 0.291 0.147l2.349 2.741c0.18 0.21 0.495 0.234 0.705 0.054s0.234-0.495 0.054-0.705zM8.173 13.585c0.372-0.943 1.3-1.585 2.327-1.585 0.927 0 1.78 0.523 2.209 1.329l-2.498 2.676-2.038-2.42z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 10c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 11c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l1-1c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-1 1c-0.098 0.098-0.226 0.146-0.354 0.146z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 11c-0.128 0-0.256-0.049-0.354-0.146l-1-1c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l1 1c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.147-0.354 0.147z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.493 2.004c-0.064 0-0.129-0.013-0.191-0.039-0.187-0.080-0.306-0.259-0.302-0.462-0.002-0.048-0.019-0.184-0.082-0.298-0.056-0.101-0.149-0.205-0.418-0.205-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.624 0 1.022 0.288 1.25 0.647 0.443-0.31 1.078-0.647 1.75-0.647 0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-0.645 0-1.408 0.617-1.647 0.854-0.097 0.097-0.228 0.15-0.36 0.15z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 2c-0.057 0-0.113 0.003-0.169 0.007-0.411-1.168-1.525-2.007-2.831-2.007-0.967 0-1.871 0.474-2.43 1.241-0.331-0.157-0.696-0.241-1.070-0.241-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5h6.5c1.103 0 2-0.897 2-2s-0.897-2-2-2zM9 5h-6.5c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5c0.43 0 0.84 0.185 1.125 0.508 0.183 0.207 0.499 0.227 0.706 0.044s0.227-0.499 0.044-0.706c-0.002-0.002-0.003-0.003-0.005-0.005 0.372-0.52 0.979-0.841 1.63-0.841 1.103 0 2 0.897 2 2 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0.551 0 1 0.449 1 1s-0.449 1-1 1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.493 4.004c-0.064 0-0.129-0.013-0.191-0.039-0.187-0.080-0.306-0.259-0.302-0.462-0.002-0.048-0.019-0.184-0.082-0.298-0.056-0.101-0.149-0.205-0.418-0.205-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.624 0 1.022 0.288 1.25 0.647 0.443-0.31 1.078-0.647 1.75-0.647 0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-0.645 0-1.408 0.617-1.647 0.854-0.097 0.097-0.228 0.15-0.36 0.15z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.493 7.004c-0.064 0-0.129-0.013-0.191-0.039-0.187-0.080-0.306-0.259-0.302-0.462-0.002-0.048-0.019-0.184-0.082-0.298-0.056-0.101-0.149-0.205-0.418-0.205-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.624 0 1.022 0.288 1.25 0.647 0.443-0.31 1.078-0.647 1.75-0.647 0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-0.645 0-1.408 0.617-1.647 0.854-0.097 0.097-0.228 0.15-0.36 0.15z",
    fill: "#000000"
  })));
}

LiniLandscape.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniLandscape;