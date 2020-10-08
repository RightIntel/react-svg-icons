var React = require('react');

var PropTypes = require('prop-types');

function LiniFeather2({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniFeather2';

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
    d: "M0.5 20c-0.009 0-0.018-0-0.027-0.001-0.272-0.015-0.482-0.244-0.473-0.515 0.118-3.655 1.096-6.94 2.907-9.762 1.487-2.317 3.53-4.321 6.072-5.955 2.426-1.559 4.83-2.468 6.421-2.956 1.827-0.56 3.375-0.811 4.1-0.811 0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-1.166 0-5.697 0.855-9.98 3.608-1.885 1.212-3.965 2.963-5.6 5.419 0.567-0.356 1.219-0.581 1.971-0.681 0.953-0.127 1.955-0.044 2.924 0.036 1.457 0.121 2.833 0.235 3.96-0.329 1.866-0.933 3.309-2.834 3.324-2.853 0.166-0.221 0.479-0.265 0.7-0.099s0.265 0.479 0.1 0.7c-0.064 0.086-1.595 2.106-3.676 3.147-1.377 0.689-2.959 0.558-4.489 0.431-1.855-0.154-3.607-0.299-4.881 0.975-2.392 2.392-2.851 8.126-2.855 8.184-0.020 0.262-0.238 0.462-0.498 0.462z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 6c-0.193 0-0.377-0.113-0.459-0.301-0.11-0.253 0.006-0.548 0.26-0.658 1.971-0.855 6.436-2.041 7.199-2.041 0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-0.528 0-4.793 1.088-6.801 1.959-0.065 0.028-0.132 0.041-0.199 0.041z",
    fill: color
  })));
}

LiniFeather2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFeather2;