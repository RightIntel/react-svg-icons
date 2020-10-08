var React = require('react');

var PropTypes = require('prop-types');

function LiniToggle({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniToggle';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14.5 20c-0.076 0-0.153-0.017-0.224-0.053l-3.894-1.947h-9.882c-0.276 0-0.5-0.224-0.5-0.5v-14c0-0.276 0.224-0.5 0.5-0.5h9.882l3.894-1.947c0.155-0.077 0.339-0.069 0.486 0.022s0.237 0.252 0.237 0.425v18c0 0.173-0.090 0.334-0.237 0.425-0.080 0.050-0.171 0.075-0.263 0.075zM1 17h9.5c0.078 0 0.154 0.018 0.224 0.053l3.276 1.638v-16.382l-3.276 1.638c-0.069 0.035-0.146 0.053-0.224 0.053h-9.5v13z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.5 18h-3c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2.5v-13h-2.5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5v14c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.354 10.146l-2-2c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l1.146 1.146h-4.293c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h4.293l-1.146 1.146c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l2-2c0.195-0.195 0.195-0.512 0-0.707z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 7c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 10c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 13c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 16c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  })));
}

LiniToggle.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniToggle;