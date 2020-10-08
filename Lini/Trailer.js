var React = require('react');

var PropTypes = require('prop-types');

function LiniTrailer({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniTrailer';

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
    d: "M19.854 13.439l-0.717-5.020c-0.114-0.796-0.832-1.419-1.636-1.419h-4c-0.827 0-1.5 0.673-1.5 1.5v8.5h-6.269c-0.346-0.597-0.992-1-1.731-1s-1.385 0.403-1.731 1h-1.769c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1.5c0 1.103 0.897 2 2 2s2-0.897 2-2h6.086c0.206 0.582 0.762 1 1.414 1h0.769c0.346 0.597 0.992 1 1.731 1s1.385-0.403 1.731-1h0.769c0.827 0 1.5-0.673 1.5-1.5v-2c0-0.571-0.066-1.495-0.146-2.061zM4 19c-0.551 0-1-0.449-1-1s0.449-1 1-1 1 0.449 1 1-0.449 1-1 1zM18.638 12h-3.638v-2h3.352l0.286 2zM16 19c-0.551 0-1-0.449-1-1s0.449-1 1-1 1 0.449 1 1-0.449 1-1 1zM18.5 18h-0.5c0-1.103-0.897-2-2-2s-2 0.897-2 2h-0.5c-0.276 0-0.5-0.224-0.5-0.5v-9c0-0.276 0.224-0.5 0.5-0.5h4c0.302 0 0.604 0.262 0.646 0.561l0.063 0.439h-3.709c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276 0.224 0.5 0.5 0.5h4.281l0.083 0.581c0.053 0.374 0.101 0.938 0.123 1.419h-0.487c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v1.5c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  })));
}

LiniTrailer.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniTrailer;