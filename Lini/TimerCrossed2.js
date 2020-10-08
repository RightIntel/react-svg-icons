var React = require('react');

var PropTypes = require('prop-types');

function LiniTimerCrossed2({
  size,
  ...props
}) {
  var className = 'Component Lini LiniTimerCrossed2';

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
    d: "M15.51 5.49c-0.015-0.015-0.031-0.030-0.047-0.046l1.413-1.615c0.182-0.208 0.161-0.524-0.047-0.706s-0.524-0.161-0.706 0.047l-1.412 1.613c-1.355-1.056-2.985-1.67-4.713-1.769 0-0.005 0.001-0.010 0.001-0.015v-1h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v1c0 0.005 0.001 0.010 0.001 0.015-2.083 0.12-4.024 0.988-5.511 2.475-1.605 1.605-2.49 3.74-2.49 6.010s0.884 4.405 2.49 6.010c0.015 0.015 0.031 0.030 0.047 0.046l-1.413 1.615c-0.182 0.208-0.161 0.524 0.047 0.706 0.095 0.083 0.212 0.124 0.329 0.124 0.139 0 0.278-0.058 0.376-0.171l1.412-1.613c1.484 1.157 3.3 1.784 5.212 1.784 2.27 0 4.405-0.884 6.010-2.49s2.49-3.74 2.49-6.010c0-2.27-0.884-4.405-2.49-6.010zM2 11.5c0-4.136 3.364-7.5 7.5-7.5 1.709 0 3.287 0.575 4.549 1.542l-4.049 4.628v-4.669c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v5.812l-4.802 5.488c-1.357-1.358-2.198-3.233-2.198-5.3zM9.5 19c-1.709 0-3.287-0.575-4.549-1.542l9.851-11.258c1.358 1.358 2.198 3.233 2.198 5.3 0 4.136-3.364 7.5-7.5 7.5z",
    fill: "#000000"
  })));
}

LiniTimerCrossed2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniTimerCrossed2;