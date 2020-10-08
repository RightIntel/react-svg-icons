var React = require('react');

var PropTypes = require('prop-types');

function LiniThermometer({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniThermometer';

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
    d: "M13.5 3h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 5h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 7h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 9h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 11h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 14.086v-9.586c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v9.586c-0.582 0.206-1 0.762-1 1.414 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.652-0.418-1.208-1-1.414zM8.5 16c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 20c-2.481 0-4.5-2.019-4.5-4.5 0-1.503 0.759-2.911 2-3.742l0-9.258c0-1.378 1.122-2.5 2.5-2.5s2.5 1.122 2.5 2.5l0 9.258c1.241 0.831 2 2.239 2 3.742 0 2.481-2.019 4.5-4.5 4.5zM8.5 1c-0.827 0-1.5 0.673-1.5 1.5l-0 9.535c0 0.178-0.095 0.343-0.25 0.433-1.080 0.625-1.75 1.786-1.75 3.032 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.246-0.671-2.407-1.75-3.032-0.154-0.089-0.25-0.254-0.25-0.433l-0-9.535c0-0.827-0.673-1.5-1.5-1.5z",
    fill: color
  })));
}

LiniThermometer.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniThermometer;