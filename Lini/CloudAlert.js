var React = require('react');

var PropTypes = require('prop-types');

function LiniCloudAlert({
  size,
  ...props
}) {
  var className = 'Component Lini LiniCloudAlert';

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
    d: "M16 16h-3.5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h3.5c1.654 0 3-1.346 3-3s-1.346-3-3-3c-0.343 0-0.68 0.057-1 0.17-0.217 0.077-0.458-0.005-0.584-0.197s-0.105-0.446 0.051-0.615c0.344-0.371 0.533-0.853 0.533-1.359 0-1.103-0.897-2-2-2-1.055 0-1.931 0.823-1.996 1.875-0.013 0.212-0.159 0.393-0.363 0.45s-0.423-0.020-0.545-0.194c-0.937-1.334-2.468-2.131-4.096-2.131-2.757 0-5 2.243-5 5s2.243 5 5 5h2.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-2.5c-3.308 0-6-2.692-6-6s2.692-6 6-6c1.611 0 3.143 0.65 4.261 1.776 0.471-1.050 1.527-1.776 2.739-1.776 1.654 0 3 1.346 3 3 0 0.346-0.059 0.685-0.172 1.004 0.057-0.002 0.115-0.004 0.172-0.004 2.206 0 4 1.794 4 4s-1.794 4-4 4z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 13c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 16c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z",
    fill: "#000000"
  })));
}

LiniCloudAlert.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCloudAlert;