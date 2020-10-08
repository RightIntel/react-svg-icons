var React = require('react');

var PropTypes = require('prop-types');

function LiniMicMute({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniMicMute';

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
    d: "M16 10.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5c0 3.033-2.467 5.5-5.5 5.5-1.231 0-2.369-0.406-3.286-1.092l1.25-1.563c0.574 0.412 1.277 0.655 2.036 0.655 1.93 0 3.5-1.57 3.5-3.5v-4.075l2.89-3.613c0.172-0.216 0.138-0.53-0.078-0.703s-0.53-0.138-0.703 0.078l-2.11 2.637v-0.325c0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5v6c0 0.81 0.277 1.556 0.74 2.15l-1.271 1.588c-0.911-0.982-1.469-2.296-1.469-3.738 0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5c0 1.758 0.702 3.354 1.839 4.526l-1.73 2.162c-0.172 0.216-0.138 0.53 0.078 0.703 0.092 0.074 0.202 0.11 0.312 0.11 0.147 0 0.292-0.064 0.391-0.188l1.699-2.124c0.964 0.728 2.136 1.195 3.411 1.292v2.019h-1.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-1.5v-2.019c3.351-0.256 6-3.065 6-6.481zM12 10.5c0 1.378-1.122 2.5-2.5 2.5-0.523 0-1.008-0.162-1.41-0.437l3.91-4.888v2.825zM7 10.5v-6c0-1.378 1.122-2.5 2.5-2.5s2.5 1.122 2.5 2.5v1.575l-4.61 5.763c-0.246-0.387-0.39-0.846-0.39-1.338z"
  }, pathProps))));
}

LiniMicMute.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniMicMute;