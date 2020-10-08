var React = require('react');

var PropTypes = require('prop-types');

function LiniChair({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniChair';

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
    d: "M16 13.5v-0.5c0-0.428-0.321-1.133-0.639-1.609l-0.891-1.336c-0.242-0.363-0.411-1.060-0.363-1.493l0.669-6.018c0.075-0.672-0.123-1.309-0.556-1.793s-1.044-0.75-1.72-0.75h-6c-0.676 0-1.287 0.267-1.72 0.75s-0.631 1.121-0.556 1.793l0.669 6.018c0.048 0.433-0.122 1.131-0.363 1.493l-0.891 1.336c-0.317 0.476-0.639 1.182-0.639 1.609v0.5c0 0.551 0.298 1.032 0.742 1.293-0.332 0.718-0.742 2.126-0.742 4.707 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-2.869 0.53-4.101 0.76-4.5h1.24v2.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-2.5h5v2.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-2.5h1.24c0.23 0.399 0.76 1.631 0.76 4.5-0 0.276 0.224 0.5 0.5 0.5 0 0 0 0 0 0 0.276 0 0.5-0.224 0.5-0.5 0-2.58-0.41-3.989-0.742-4.707 0.443-0.261 0.742-0.743 0.742-1.293zM14.5 14h-10c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h10c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM5.361 10.609c0.368-0.552 0.598-1.5 0.525-2.158l-0.669-6.018c-0.043-0.386 0.066-0.746 0.307-1.015s0.587-0.417 0.975-0.417h6c0.388 0 0.734 0.148 0.975 0.417s0.35 0.63 0.307 1.015l-0.669 6.018c-0.073 0.659 0.157 1.607 0.525 2.159l0.891 1.336c0.012 0.019 0.025 0.038 0.037 0.056-0.022-0.001-0.044-0.002-0.066-0.002h-10c-0.022 0-0.044 0.001-0.066 0.002 0.012-0.019 0.024-0.038 0.037-0.056l0.891-1.336z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 10h-5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 5h-0.5c-1.103 0-2-0.897-2-2v-0.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v0.5c0 1.103-0.897 2-2 2h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5c1.103 0 2 0.897 2 2v0.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.5c0-1.103 0.897-2 2-2h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM9.5 6.344c-0.222-0.334-0.509-0.621-0.844-0.844 0.334-0.222 0.621-0.509 0.844-0.844 0.222 0.334 0.509 0.621 0.844 0.844-0.334 0.222-0.622 0.509-0.844 0.844z",
    fill: color
  })));
}

LiniChair.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniChair;